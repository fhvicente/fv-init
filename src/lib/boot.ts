import gsap from "gsap";

const KEY = "fv-booted";

/** Plays the `fv init` intro if BootSequence opted in. Resolves when the page is ready. */
export function runBoot(): Promise<void> {
    const root = document.documentElement;
    const el = document.querySelector<HTMLElement>("[data-boot]");
    if (!el || !root.classList.contains("boot")) return Promise.resolve();

    return new Promise((resolve) => {
        const cmd = el.querySelector<HTMLElement>("[data-boot-cmd]")!;
        const text = cmd.textContent ?? "";
        const typed = { n: 0 };
        let done = false;

        const finish = () => {
            if (done) return;
            done = true;
            tl.kill();
            ["keydown", "pointerdown", "wheel", "touchmove"].forEach((e) => removeEventListener(e, finish));
            try {
                sessionStorage.setItem(KEY, "1");
            } catch {}
            gsap.to(el, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                    root.classList.remove("boot");
                    resolve();
                },
            });
        };

        // ~3s total (PRD: 2–4s).
        const tl = gsap
            .timeline({ onComplete: finish })
            .set(el.querySelectorAll("[data-boot-line]"), { opacity: 0 })
            .set(cmd, { textContent: "" })
            .to(typed, {
                n: text.length,
                duration: 0.6,
                ease: `steps(${text.length})`,
                delay: 0.3,
                onUpdate: () => (cmd.textContent = text.slice(0, Math.round(typed.n))),
            })
            .set(el.querySelector("[data-boot-caret]"), { display: "none" }, "+=0.15")
            .to(el.querySelectorAll("[data-boot-line]"), { opacity: 1, duration: 0.05, stagger: 0.28 })
            .to({}, { duration: 0.6 }); // hold on `ready_`

        // Any interaction skips: the intro never blocks the page.
        ["keydown", "pointerdown", "wheel", "touchmove"].forEach((e) =>
            addEventListener(e, finish, { once: true, passive: true }),
        );
    });
}

/** Clears the session flag and reloads so the intro plays again. */
export function replayBoot() {
    try {
        sessionStorage.removeItem(KEY);
    } catch {}
    scrollTo(0, 0);
    location.reload();
}
