particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150, 
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#744f78"
    },
    "shape": {
      "type": "star", 
      "stroke": {
        "width": 0,
        "color": "#fff"
      }
    },
    "opacity": {
      "value": 0.8, 
      "random": true
    },
    "size": {
      "value": 4, 
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1, 
      "direction": "bottom", 
      "random": true,
      "straight": false,
      "out_mode": "out", 
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "window", // Detecta interação no canvas
    "events": {
      "onhover": {
        "enable": true, // Habilita interação no hover
        "mode": "repulse" // O efeito pode ser "repulse", "grab", "bubble", etc.
      },
      "onclick": {
        "enable": false // Desativa o clique (se não precisar)
      }
    },
    "modes": {
      "repulse": {
      "distance": 80, // Distância de "expansão" das partículas ao passar o mouse
           //"duration": 2,
            //"size": 10, 
            //"opacity": 0.8 
      }
    }
  },
  "retina_detect": true
});