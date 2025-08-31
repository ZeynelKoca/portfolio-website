const ParticlesConfig = {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 120,
  interactivity: {
    detectOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "push"
      },
      onHover: {
        enable: false,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "bounce",
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
}

export default ParticlesConfig