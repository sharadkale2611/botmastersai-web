import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimationTarget = gsap.DOMTarget;

type ScrollAnimationOptions = {
  delay?: number;
  duration?: number;
  ease?: string;
  once?: boolean;
  start?: string;
  trigger?: AnimationTarget;
};

type StaggerAnimationOptions = ScrollAnimationOptions & {
  stagger?: number;
};

const defaultScrollOptions = {
  duration: 0.8,
  ease: "power3.out",
  once: true,
  start: "top 85%",
} satisfies Required<Pick<ScrollAnimationOptions, "duration" | "ease" | "once" | "start">>;

let pluginsRegistered = false;

export function registerAnimationPlugins() {
  if (pluginsRegistered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger, useGSAP);
  pluginsRegistered = true;
}

function withScrollTrigger(
  target: AnimationTarget,
  options: ScrollAnimationOptions = {},
) {
  registerAnimationPlugins();

  const config = {
    ...defaultScrollOptions,
    ...options,
  };

  return {
    delay: config.delay,
    duration: config.duration,
    ease: config.ease,
    scrollTrigger: {
      trigger: config.trigger ?? target,
      start: config.start,
      once: config.once,
    },
  };
}

export function fadeUp(target: AnimationTarget, options?: ScrollAnimationOptions) {
  const elements = gsap.utils.toArray<HTMLElement>(target);
  gsap.set(elements, { autoAlpha: 0, y: 40 });
  
  return gsap.to(target, {
    autoAlpha: 1,
    y: 0,
    ...withScrollTrigger(target, options),
  });
}

export function fadeLeft(
  target: AnimationTarget,
  options?: ScrollAnimationOptions,
) {
  const elements = gsap.utils.toArray<HTMLElement>(target);
  gsap.set(elements, { autoAlpha: 0, x: -40 });
  
  return gsap.to(target, {
    autoAlpha: 1,
    x: 0,
    ...withScrollTrigger(target, options),
  });
}

export function fadeRight(
  target: AnimationTarget,
  options?: ScrollAnimationOptions,
) {
  const elements = gsap.utils.toArray<HTMLElement>(target);
  gsap.set(elements, { autoAlpha: 0, x: 40 });
  
  return gsap.to(target, {
    autoAlpha: 1,
    x: 0,
    ...withScrollTrigger(target, options),
  });
}

export function fadeIn(target: AnimationTarget, options?: ScrollAnimationOptions) {
  const elements = gsap.utils.toArray<HTMLElement>(target);
  gsap.set(elements, { autoAlpha: 0 });
  
  return gsap.to(target, {
    autoAlpha: 1,
    ...withScrollTrigger(target, options),
  });
}

export function scaleIn(
  target: AnimationTarget,
  options?: ScrollAnimationOptions,
) {
  const elements = gsap.utils.toArray<HTMLElement>(target);
  gsap.set(elements, { autoAlpha: 0, scale: 0.94 });
  
  return gsap.to(target, {
    autoAlpha: 1,
    scale: 1,
    transformOrigin: "center",
    ...withScrollTrigger(target, options),
  });
}

export function staggerCards(
  target: AnimationTarget,
  options: StaggerAnimationOptions = {},
) {
  const { stagger = 0.12, ...scrollOptions } = options;

  const elements = gsap.utils.toArray<HTMLElement>(target);
  gsap.set(elements, { autoAlpha: 0, y: 32 });

  return gsap.to(target, {
    autoAlpha: 1,
    y: 0,
    stagger,
    ...withScrollTrigger(target, { ...scrollOptions }),
  });
}

export { gsap, ScrollTrigger, useGSAP };
