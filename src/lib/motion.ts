import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Keep these in sync with the CSS breakpoints in Scene.astro / Hero.astro.
const FULL = "(prefers-reduced-motion: no-preference) and (min-width: 861px) and (min-height: 601px)";
const COMPACT = "(prefers-reduced-motion: no-preference) and ((max-width: 860px) or (max-height: 600px))";
const REDUCED = "(prefers-reduced-motion: reduce)";
const EASE_OUT = "power3.out"; // closest GSAP built-in to the ease-out token

export function initMotion() {
    const mm = gsap.matchMedia();

    // Smooth scroll only when motion is welcome; native scroll otherwise.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);
        const raf = (t: number) => lenis.raf(t * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
        // Anchor links go through Lenis so they stay in sync with pins.
        const onClick = (e: MouseEvent) => {
            const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
            if (!a || a.pathname !== location.pathname) return;
            const target = a.hash && document.querySelector(a.hash);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target as HTMLElement, { offset: 0 });
            history.pushState(null, "", a.hash);
        };
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("click", onClick);
            gsap.ticker.remove(raf);
            lenis.destroy();
        };
    });

    mm.add({ full: FULL, compact: COMPACT, reduced: REDUCED }, (ctx) => {
        const { full, reduced } = ctx.conditions!;

        // Hero title intro
        const title = document.querySelector<HTMLElement>("[data-hero-title]");
        if (title && !reduced) {
            const split = SplitText.create(title, { type: "words,chars", mask: "words" });
            gsap.from(split.chars, { yPercent: 110, duration: 0.9, ease: EASE_OUT, stagger: 0.025 });
        }

        if (full) {
            // Hero: pinned, the visual is the protagonist.
            const hero = document.querySelector<HTMLElement>("[data-hero]");
            if (hero) {
                gsap.timeline({
                    scrollTrigger: { trigger: hero, start: "top top", end: "+=100%", pin: true, scrub: true },
                })
                    .to(hero.querySelector("[data-hero-visual]"), { scale: 1.25, yPercent: -8, ease: "none" }, 0)
                    .to(hero.querySelector("[data-hero-copy]"), { opacity: 0, yPercent: -30, ease: "none" }, 0);
            }

            // Project scenes: pinned with a scrubbed timeline, one protagonist (the visual).
            gsap.utils.toArray<HTMLElement>("[data-scene]").forEach((scene) => {
                gsap.timeline({
                    scrollTrigger: { trigger: scene, start: "top top", end: "+=100%", pin: true, scrub: true },
                })
                    .fromTo(
                        scene.querySelector("[data-scene-visual]"),
                        { scale: 0.82, yPercent: 10 },
                        { scale: 1, yPercent: 0, ease: "none" },
                        0,
                    )
                    .from(
                        scene.querySelector("[data-scene-copy]"),
                        { opacity: 0, y: 40, ease: "none", duration: 0.4 },
                        0,
                    );
            });
        }

        // Plain reveals (compact and reduced): short fades, no pin, no scrub.
        const targets = full ? "[data-reveal]" : "[data-reveal], [data-scene-copy], [data-scene-visual]";
        const y = reduced ? 0 : 24;
        gsap.set(targets, { opacity: 0, y }); // set from JS so the page stays readable without it
        ScrollTrigger.batch(targets, {
            start: "top 92%",
            once: true,
            onEnter: (els) =>
                gsap.to(els, { opacity: 1, y: 0, duration: reduced ? 0.3 : 0.6, ease: EASE_OUT, stagger: 0.06 }),
        });
    });

    return mm;
}
