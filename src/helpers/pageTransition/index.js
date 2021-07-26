export const toDown = {
  variants: {
    initial: {
      opacity: 0,
      y: '-5%'
    },
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '-5%'
    }
  },
  transition: {
    duration: 0.3
  }
}

export const toRight = {
  variants: {
    initial: {
      opacity: 0,
      x: '-100vw',
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: '-10vw',
    }
  },
  transition: {
    // type: "tween",
    ease: "anticipate",
    duration: 0.3,
    stiffness: 50
  }
}

export const fadeIn = {
  variants: {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  },
  transition: {
    duration: 0.5,
  }
}