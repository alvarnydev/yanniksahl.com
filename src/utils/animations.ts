import { fade } from "astro:transitions";

const animation = fade();
const oldAnim = {
  name: "astroFadeOut",
  duration: 0,
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  fillMode: "both",
};
const newAnim = {
  name: "astroFadeIn",
  duration: 500,
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  fillMode: "both",
};
animation.backwards.old = oldAnim;
animation.forwards.old = oldAnim;
animation.backwards.new = newAnim;
animation.forwards.new = newAnim;

export default animation;
