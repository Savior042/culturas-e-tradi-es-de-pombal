const scenes = [
  {
    title: "Sala de Eco Neon",
    description:
      "As bordas ficam mais quentes e a estação sugere um mini ritual bobo para você testar agora.",
    mission: "Escolha um objeto perto de você e invente um nome de nave para ele.",
    duration: "24 segundos",
    mood: "diversamente inútil",
    detailTitle: "Cromado Quente",
    detailText:
      "A página puxou o brilho para tons quentes, como se o visor tivesse acabado de sair de um pôr do sol sintético.",
    vibe: "lúdico e elétrico",
    energy: "93%",
    tempo: "saltitante",
    boredom: 6,
    mode: "sunset",
  },
  {
    title: "Jardim de Asteroides Macios",
    description:
      "O fundo desacelera, o brilho abre espaço e a experiência vira uma pausa contemplativa com um toque estranho.",
    mission: "Observe uma cor na tela e associe ela a um sabor inventado.",
    duration: "12 segundos",
    mood: "serenamente estranho",
    detailTitle: "Calma Orbital",
    detailText:
      "Os tons frios ganham mais espaço e os elementos transparentes ficam com cara de cabine silenciosa no espaço.",
    vibe: "curiosidade macia",
    energy: "81%",
    tempo: "quase flutuando",
    boredom: 11,
    mode: "nebula",
  },
  {
    title: "Cassino de Cometas",
    description:
      "Tudo parece um pouco mais teatral. É como se a interface estivesse apostando que você vai clicar de novo.",
    mission: "Encontre a forma mais bonita na tela e dê a ela um cargo importante.",
    duration: "18 segundos",
    mood: "glamour cósmico",
    detailTitle: "Reflexo Pulsante",
    detailText:
      "Camadas de brilho reagem mais rápido ao mouse para criar um efeito de luxo futurista e meio exagerado.",
    vibe: "dramático e brilhante",
    energy: "97%",
    tempo: "ritmo de arcade fino",
    boredom: 4,
    mode: "midnight",
  },
  {
    title: "Aquário Intergaláctico",
    description:
      "As partículas parecem mais líquidas e os cantos assumem uma textura visual mais calma, quase hipnótica.",
    mission: "Respire fundo uma vez e role a página como se estivesse mergulhando.",
    duration: "9 segundos",
    mood: "aquático espacial",
    detailTitle: "Luz Submersa",
    detailText:
      "O contraste foi suavizado nas bordas para parecer vidro molhado iluminado por bioluminescência.",
    vibe: "líquido e calmo",
    energy: "76%",
    tempo: "ondulante",
    boredom: 9,
    mode: "aurora",
  },
];

const modeDetails = {
  nebula: {
    detailTitle: "Reflexo Líquido",
    detailText:
      "A camada superior está usando brilho deslocado e sombras frias para parecer um visor de vidro em órbita.",
  },
  sunset: {
    detailTitle: "Calor Sintético",
    detailText:
      "O ambiente muda para um gradiente de fim de tarde digital, com brilhos quentes e mais contraste nas camadas.",
  },
  midnight: {
    detailTitle: "Aço Lunar",
    detailText:
      "Os tons mais metálicos criam um clima de observatório noturno, quase silencioso, mas ainda muito luminoso.",
  },
  aurora: {
    detailTitle: "Ácido Boreal",
    detailText:
      "A estação acende verdes e amarelos energéticos para deixar tudo mais inesperado, quase radioativo de tão bonito.",
  },
};

const cursorGlow = document.querySelector(".cursor-glow");
const particlesContainer = document.querySelector(".floating-particles");
const canvas = document.querySelector(".space-canvas");
const surpriseButton = document.getElementById("surpriseButton");
const pulseButton = document.getElementById("pulseButton");
const modeButtons = document.querySelectorAll(".mode-chip");
const revealItems = document.querySelectorAll(".section-reveal");
const tiltCards = document.querySelectorAll(".tilt-card");

const momentTitle = document.getElementById("momentTitle");
const momentDescription = document.getElementById("momentDescription");
const missionText = document.getElementById("missionText");
const missionDuration = document.getElementById("missionDuration");
const missionMood = document.getElementById("missionMood");
const detailTitle = document.getElementById("detailTitle");
const detailText = document.getElementById("detailText");
const statusVibe = document.getElementById("statusVibe");
const statusEnergy = document.getElementById("statusEnergy");
const statusTempo = document.getElementById("statusTempo");
const boredomFill = document.getElementById("boredomFill");
const boredomValue = document.getElementById("boredomValue");

let sceneIndex = 0;
let starField = [];
let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function createParticles() {
  if (!particlesContainer) {
    return;
  }

  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 20; index += 1) {
    const particle = document.createElement("span");
    particle.style.setProperty("--size", `${Math.random() * 8 + 4}px`);
    particle.style.setProperty("--left", `${Math.random() * 100}%`);
    particle.style.setProperty("--top", `${Math.random() * 100}%`);
    particle.style.setProperty("--duration", `${Math.random() * 8 + 8}s`);
    particle.style.setProperty("--delay", `${Math.random() * -8}s`);
    fragment.appendChild(particle);
  }

  particlesContainer.appendChild(fragment);
}

function updateScene(scene) {
  momentTitle.textContent = scene.title;
  momentDescription.textContent = scene.description;
  missionText.textContent = scene.mission;
  missionDuration.textContent = scene.duration;
  missionMood.textContent = scene.mood;
  detailTitle.textContent = scene.detailTitle;
  detailText.textContent = scene.detailText;
  statusVibe.textContent = scene.vibe;
  statusEnergy.textContent = scene.energy;
  statusTempo.textContent = scene.tempo;
  boredomFill.style.width = `${100 - scene.boredom}%`;
  boredomValue.textContent = `${scene.boredom}% restante`;
}

function cycleScene() {
  sceneIndex = (sceneIndex + 1) % scenes.length;
  const scene = scenes[sceneIndex];
  updateScene(scene);
  setMode(scene.mode, true);
}

function setMode(mode, preserveDetail = false) {
  document.body.dataset.mode = mode;

  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  const modeDetail = modeDetails[mode];
  if (modeDetail && !preserveDetail) {
    detailTitle.textContent = modeDetail.detailTitle;
    detailText.textContent = modeDetail.detailText;
  }
}

function attachRipple(button) {
  button.addEventListener("click", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty("--ripple-x", `${x}px`);
    button.style.setProperty("--ripple-y", `${y}px`);
    button.classList.remove("rippling");
    window.requestAnimationFrame(() => button.classList.add("rippling"));
  });
}

function attachMagnet(button) {
  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.06}px, ${y * 0.1 - 3}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
}

function setupReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupTilt() {
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 8;
      const rotateX = (0.5 - py) * 8;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function updateCursorGlow(event) {
  pointer = { x: event.clientX, y: event.clientY };

  if (cursorGlow) {
    cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    cursorGlow.style.opacity = "0.34";
  }
}

function initCursorGlow() {
  window.addEventListener("mousemove", updateCursorGlow);
  window.addEventListener("mouseleave", () => {
    if (cursorGlow) {
      cursorGlow.style.opacity = "0";
    }
  });
}

function resizeCanvas() {
  if (!canvas) {
    return;
  }

  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  const starCount = Math.max(80, Math.floor(window.innerWidth / 16));
  starField = Array.from({ length: starCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2.2 + 0.4,
    speed: Math.random() * 0.25 + 0.05,
    alpha: Math.random() * 0.7 + 0.2,
  }));
}

function animateStars() {
  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }
  const ratio = window.devicePixelRatio || 1;

  function frame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const pointerX = (pointer.x / window.innerWidth - 0.5) * 14 * ratio;
    const pointerY = (pointer.y / window.innerHeight - 0.5) * 14 * ratio;

    starField.forEach((star, index) => {
      star.y += star.speed * ratio;

      if (star.y > canvas.height + 8) {
        star.y = -8;
        star.x = Math.random() * canvas.width;
      }

      const twinkle = 0.6 + Math.sin(Date.now() * 0.0014 + index) * 0.35;
      context.fillStyle = `rgba(198, 230, 255, ${star.alpha * twinkle})`;
      context.beginPath();
      context.arc(
        star.x + pointerX * star.speed * 0.12,
        star.y + pointerY * star.speed * 0.12,
        star.size * ratio,
        0,
        Math.PI * 2
      );
      context.fill();
    });

    window.requestAnimationFrame(frame);
  }

  frame();
}

surpriseButton.addEventListener("click", cycleScene);
pulseButton.addEventListener("click", () => {
  document.body.classList.toggle("hypnotic");
  pulseButton.textContent = document.body.classList.contains("hypnotic")
    ? "Modo hipnótico ativo"
    : "Ativar modo hipnótico";
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setMode(button.dataset.mode);
  });
});

[surpriseButton, pulseButton, ...modeButtons].forEach((button) => {
  attachRipple(button);
  attachMagnet(button);
});

createParticles();
setupReveals();
setupTilt();
initCursorGlow();
resizeCanvas();
animateStars();
updateScene(scenes[sceneIndex]);
setMode(scenes[sceneIndex].mode, true);

window.addEventListener("resize", resizeCanvas);
