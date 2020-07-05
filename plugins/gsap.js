import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js"
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js"

export default (context, inject) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)
  gsap.registerPlugin(MotionPathPlugin)
  inject("ScrollTrigger", ScrollTrigger)
  inject("gsap", gsap)
}
