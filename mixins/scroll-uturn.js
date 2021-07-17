class Uturn {
  constructor(element) {
    this.body = element
    this.lastScroll = 0
    this.lastDirection = null
  }

  calculateDirection() {
    const currentScroll = window.pageYOffset
    if (currentScroll <= 0) {
      this.lastDirection = "down"
      return
    }

    if (
      currentScroll > this.lastScroll &&
      !this.body.classList.contains("scroll-down")
    ) {
      this.lastDirection = "down"
    } else if (
      currentScroll < this.lastScroll &&
      this.lastDirection === "down"
    ) {
      this.lastDirection = "up"
    }
    this.lastScroll = currentScroll
    return this.lastDirection
  }
}
export { Uturn }
