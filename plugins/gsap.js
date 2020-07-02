import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

export default (context, inject) => {
  gsap.registerPlugin(ScrollTrigger)
  inject("gsap", gsap)
}
