const STORAGE_KEY = "voce-prefere-pulse-v1";

const baseQuestions = [
  {
    id: "weekend-hideaway",
    category: "viagem",
    prompt: "Num fim de semana perfeito",
    left: "acordar numa cabana com chuva no telhado",
    right: "abrir a cortina para um horizonte de mar infinito",
  },
  {
    id: "party-energy",
    category: "social",
    prompt: "Numa noite inesquecivel",
    left: "ter uma conversa absurda de boa com tres pessoas brilhantes",
    right: "dancar sem parar ate o fim da festa",
  },
  {
    id: "dream-setup",
    category: "tecnologia",
    prompt: "Na sua mesa ideal",
    left: "um setup limpo, silencioso e com quase nenhum cabo visivel",
    right: "um painel cheio de botoes, luzes bonitas e controles tatteis",
  },
  {
    id: "day-off",
    category: "caos",
    prompt: "Num dia totalmente livre",
    left: "seguir um roteiro impecavelmente planejado",
    right: "sair sem mapa e descobrir o caminho na intuicao",
  },
  {
    id: "creative-process",
    category: "criatividade",
    prompt: "Quando uma ideia aparece",
    left: "lapidar uma unica criacao ate ela ficar impecavel",
    right: "abrir cinco caminhos novos e perseguir todos ao mesmo tempo",
  },
  {
    id: "morning-ritual",
    category: "rotina",
    prompt: "Toda manha",
    left: "tomar um cafe longo com a janela aberta e tempo desacelerado",
    right: "entrar num banho gelado e reiniciar a energia na hora",
  },
  {
    id: "date-mood",
    category: "romance",
    prompt: "Num encontro memoravel",
    left: "um jantar com luz baixa, ritmo lento e conversa longa",
    right: "um passeio noturno pela cidade vazia sem hora para terminar",
  },
  {
    id: "moving-view",
    category: "viagem",
    prompt: "Durante uma grande aventura",
    left: "ver a paisagem num trem panoramico pelas montanhas",
    right: "cruzar a agua num barco no exato momento do entardecer",
  },
  {
    id: "listening-mode",
    category: "tecnologia",
    prompt: "Para ouvir algo com prazer absoluto",
    left: "colocar um vinil e deixar o ambiente participar da musica",
    right: "usar fones perfeitos e desaparecer do mundo por completo",
  },
  {
    id: "friends-plan",
    category: "social",
    prompt: "Com as pessoas certas",
    left: "passar horas numa varanda conversando sem nenhum roteiro",
    right: "entrar num jogo competitivo que vira caos em minutos",
  },
  {
    id: "room-balance",
    category: "caos",
    prompt: "No seu espaco criativo",
    left: "ter uma mesa impecavel e cada detalhe no lugar",
    right: "conviver com uma bagunca bonita que so voce entende",
  },
  {
    id: "learning-style",
    category: "criatividade",
    prompt: "Para aprender algo novo",
    left: "seguir um curso muito bem estruturado do inicio ao fim",
    right: "mergulhar sozinho e descobrir a ordem durante o caminho",
  },
  {
    id: "work-rhythm",
    category: "rotina",
    prompt: "No trabalho ideal",
    left: "ter blocos silenciosos de foco sem notificacoes",
    right: "sentir a energia de uma equipe inteira criando ao vivo",
  },
  {
    id: "next-escape",
    category: "viagem",
    prompt: "Na proxima escapada",
    left: "explorar uma cidade historica inteira a pe",
    right: "sumir na natureza bruta e ficar sem sinal por um tempo",
  },
  {
    id: "show-affection",
    category: "romance",
    prompt: "Para demonstrar carinho",
    left: "escrever uma carta longa e pessoal a mao",
    right: "preparar uma surpresa espontanea no meio da semana",
  },
  {
    id: "phone-interface",
    category: "tecnologia",
    prompt: "No celular perfeito",
    left: "uma interface limpa, sem badges e com paz visual",
    right: "um dashboard vivo com atalhos, widgets e tudo visivel",
  },
  {
    id: "sunday-choice",
    category: "social",
    prompt: "Num domingo muito bem vivido",
    left: "um brunch elegante e demorado sem olhar o relogio",
    right: "uma feira barulhenta cheia de cheiros, cor e improviso",
  },
  {
    id: "error-reaction",
    category: "caos",
    prompt: "Quando algo da errado",
    left: "reinventar tudo imediatamente e transformar o problema em estilo",
    right: "insistir no plano original ate ele finalmente funcionar",
  },
  {
    id: "flow-state",
    category: "criatividade",
    prompt: "Para entrar em flow",
    left: "diminuir as luzes e deixar uma trilha lenta dominar o clima",
    right: "abrir a janela, sentir o sol e trabalhar com energia crua",
  },
  {
    id: "night-rhythm",
    category: "rotina",
    prompt: "No fim do dia",
    left: "fechar tudo cedo e desaparecer completamente offline",
    right: "ficar acordado lapidando ideias enquanto a cidade desacelera",
  },
];

const ui = {
  stageSection: document.getElementById("stageSection"),
  startButton: document.getElementById("startButton"),
  shuffleHeroButton: document.getElementById("shuffleHeroButton"),
  shuffleButton: document.getElementById("shuffleButton"),
  categorySelect: document.getElementById("categorySelect"),
  filterChips: document.getElementById("filterChips"),
  questionPrompt: document.getElementById("questionPrompt"),
  leftChoice: document.getElementById("leftChoice"),
  rightChoice: document.getElementById("rightChoice"),
  leftOptionText: document.getElementById("leftOptionText"),
  rightOptionText: document.getElementById("rightOptionText"),
  leftResultFill: document.getElementById("leftResultFill"),
  rightResultFill: document.getElementById("rightResultFill"),
  leftResultValue: document.getElementById("leftResultValue"),
  rightResultValue: document.getElementById("rightResultValue"),
  resultHeadline: document.getElementById("resultHeadline"),
  resultSubline: document.getElementById("resultSubline"),
  nextButton: document.getElementById("nextButton"),
  shareButton: document.getElementById("shareButton"),
  roundBadge: document.getElementById("roundBadge"),
  activeCategoryLabel: document.getElementById("activeCategoryLabel"),
  streakValue: document.getElementById("streakValue"),
  bestStreakValue: document.getElementById("bestStreakValue"),
  totalAnswersValue: document.getElementById("totalAnswersValue"),
  favoriteCategoryValue: document.getElementById("favoriteCategoryValue"),
  heroTotalAnswers: document.getElementById("heroTotalAnswers"),
  heroCustomCount: document.getElementById("heroCustomCount"),
  heroHotCategory: document.getElementById("heroHotCategory"),
  historyList: document.getElementById("historyList"),
  composerForm: document.getElementById("composerForm"),
  customPrompt: document.getElementById("customPrompt"),
  customLeft: document.getElementById("customLeft"),
  customRight: document.getElementById("customRight"),
  customCategory: document.getElementById("customCategory"),
  composerNote: document.getElementById("composerNote"),
  resetDataButton: document.getElementById("resetDataButton"),
  toast: document.getElementById("toast"),
};

const state = {
  currentFilter: "todas",
  currentQuestion: null,
  deck: [],
  deckIndex: 0,
  answeredCurrent: false,
  roundNumber: 0,
  toastTimer: null,
  recentQuestionIds: [],
  persistent: loadState(),
};

init();

function init() {
  renderCategoryControls();
  bindEvents();
  chooseNextQuestion(true);
  renderHistory();
  renderStats();
}

function bindEvents() {
  ui.startButton.addEventListener("click", () => {
    ui.stageSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  ui.shuffleHeroButton.addEventListener("click", () => {
    chooseNextQuestion(true);
    showToast("Deck remixado.");
  });

  ui.shuffleButton.addEventListener("click", () => {
    chooseNextQuestion(true);
    showToast("Nova rodada preparada.");
  });

  ui.leftChoice.addEventListener("click", () => vote("left"));
  ui.rightChoice.addEventListener("click", () => vote("right"));

  ui.nextButton.addEventListener("click", () => {
    chooseNextQuestion();
  });

  ui.shareButton.addEventListener("click", copyCurrentQuestion);

  ui.categorySelect.addEventListener("change", (event) => {
    setFilter(event.target.value);
  });

  ui.composerForm.addEventListener("submit", addCustomQuestion);
  ui.resetDataButton.addEventListener("click", resetLocalData);

  document.addEventListener("keydown", handleShortcuts);
}

function loadState() {
  const fallback = {
    votes: {},
    history: [],
    customQuestions: [],
    currentStreak: 0,
    bestStreak: 0,
    totalAnswers: 0,
    categoryCounts: {},
  };

  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    return {
      votes: parsed.votes || {},
      history: Array.isArray(parsed.history) ? parsed.history : [],
      customQuestions: Array.isArray(parsed.customQuestions)
        ? parsed.customQuestions
        : [],
      currentStreak: Number.isFinite(parsed.currentStreak) ? parsed.currentStreak : 0,
      bestStreak: Number.isFinite(parsed.bestStreak) ? parsed.bestStreak : 0,
      totalAnswers: Number.isFinite(parsed.totalAnswers) ? parsed.totalAnswers : 0,
      categoryCounts: parsed.categoryCounts || {},
    };
  } catch (error) {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.persistent));
}

function getCatalog() {
  return [
    ...baseQuestions.map((question) => ({ ...question, origin: "base" })),
    ...state.persistent.customQuestions.map((question) => ({
      ...question,
      origin: "custom",
    })),
  ];
}

function getCategories() {
  const allCategories = getCatalog().map((question) => question.category);
  return ["todas", ...new Set(allCategories)];
}

function renderCategoryControls() {
  const categories = getCategories();

  ui.categorySelect.replaceChildren();
  ui.filterChips.replaceChildren();

  categories.forEach((category) => {
    const label = prettyCategory(category);
    const option = document.createElement("option");
    option.value = category;
    option.textContent = label;
    if (category === state.currentFilter) {
      option.selected = true;
    }
    ui.categorySelect.append(option);

    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "filter-chip";
    if (category === state.currentFilter) {
      chip.classList.add("is-active");
    }
    chip.textContent = label;
    chip.dataset.category = category;
    chip.addEventListener("click", () => setFilter(category));
    ui.filterChips.append(chip);
  });
}

function setFilter(category) {
  state.currentFilter = category;
  renderCategoryControls();
  chooseNextQuestion(true);
}

function getFilteredCatalog() {
  const catalog = getCatalog();
  if (state.currentFilter === "todas") {
    return catalog;
  }
  return catalog.filter((question) => question.category === state.currentFilter);
}

function chooseNextQuestion(forceShuffle = false, preferredQuestionId = null) {
  const filtered = getFilteredCatalog();

  resetStreakIfQuestionWasSkipped();

  if (!filtered.length) {
    renderEmptyState();
    return;
  }

  if (preferredQuestionId) {
    state.currentQuestion =
      filtered.find((question) => question.id === preferredQuestionId) || filtered[0];
  } else {
    if (
      forceShuffle ||
      !state.deck.length ||
      state.deckIndex >= state.deck.length ||
      !state.deck.every((entry) =>
        filtered.some((question) => question.id === entry.id)
      )
    ) {
      rebuildDeck(filtered);
    }

    state.currentQuestion = state.deck[state.deckIndex];
    state.deckIndex += 1;
  }

  state.answeredCurrent = false;
  state.roundNumber += 1;
  state.recentQuestionIds.unshift(state.currentQuestion.id);
  state.recentQuestionIds = state.recentQuestionIds.slice(0, 5);
  renderQuestion();
}

function resetStreakIfQuestionWasSkipped() {
  if (!state.currentQuestion || state.answeredCurrent) {
    return;
  }

  if (state.persistent.currentStreak === 0) {
    return;
  }

  state.persistent.currentStreak = 0;
  saveState();
  renderStats();
}

function rebuildDeck(source) {
  const filteredPool = source.filter(
    (question) => !state.recentQuestionIds.includes(question.id)
  );
  const deckSource = filteredPool.length ? filteredPool : source;
  state.deck = shuffleArray([...deckSource]);
  state.deckIndex = 0;
}

function renderQuestion() {
  const question = state.currentQuestion;
  if (!question) {
    renderEmptyState();
    return;
  }

  ui.questionPrompt.textContent = question.prompt;
  ui.leftOptionText.textContent = question.left;
  ui.rightOptionText.textContent = question.right;
  ui.roundBadge.textContent = String(state.roundNumber).padStart(2, "0");
  ui.activeCategoryLabel.textContent = prettyCategory(question.category);

  ui.leftChoice.classList.remove("is-selected", "is-dimmed");
  ui.rightChoice.classList.remove("is-selected", "is-dimmed");
  ui.leftChoice.disabled = false;
  ui.rightChoice.disabled = false;
  ui.leftChoice.classList.remove("empty-state");
  ui.rightChoice.classList.remove("empty-state");

  setResultsVisuals(null, null);
  ui.resultHeadline.textContent =
    "Escolha uma opcao para revelar como essa disputa esta ficando.";
  ui.resultSubline.textContent =
    "Use 1 ou 2 no teclado para votar com mais fluidez.";
  ui.nextButton.disabled = true;
}

function renderEmptyState() {
  state.currentQuestion = null;
  ui.questionPrompt.textContent = "Nenhuma rodada nesta vibe ainda.";
  ui.leftOptionText.textContent = "Crie uma pergunta autoral";
  ui.rightOptionText.textContent = "ou troque o filtro para continuar";
  ui.roundBadge.textContent = "--";
  ui.activeCategoryLabel.textContent = prettyCategory(state.currentFilter);
  ui.leftChoice.classList.remove("is-selected", "is-dimmed");
  ui.rightChoice.classList.remove("is-selected", "is-dimmed");
  ui.leftChoice.classList.add("empty-state");
  ui.rightChoice.classList.add("empty-state");
  ui.leftChoice.disabled = true;
  ui.rightChoice.disabled = true;
  setResultsVisuals(null, null);
  ui.resultHeadline.textContent =
    "Essa categoria ainda nao tem rodadas suficientes para jogar.";
  ui.resultSubline.textContent =
    "Adicione uma rodada personalizada abaixo ou escolha outra vibe.";
  ui.nextButton.disabled = true;
}

function vote(side) {
  if (!state.currentQuestion || state.answeredCurrent) {
    return;
  }

  state.answeredCurrent = true;

  const voteStore =
    state.persistent.votes[state.currentQuestion.id] || { left: 0, right: 0 };
  voteStore[side] += 1;
  state.persistent.votes[state.currentQuestion.id] = voteStore;

  state.persistent.totalAnswers += 1;
  state.persistent.currentStreak += 1;
  state.persistent.bestStreak = Math.max(
    state.persistent.bestStreak,
    state.persistent.currentStreak
  );

  state.persistent.categoryCounts[state.currentQuestion.category] =
    (state.persistent.categoryCounts[state.currentQuestion.category] || 0) + 1;

  state.persistent.history.unshift({
    id: state.currentQuestion.id,
    category: state.currentQuestion.category,
    option: state.currentQuestion[side],
    prompt: state.currentQuestion.prompt,
    choiceSide: side,
    timestamp: Date.now(),
  });
  state.persistent.history = state.persistent.history.slice(0, 6);

  saveState();
  renderResults(side);
  renderStats();
  renderHistory();
  createChoiceBurst(side);
}

function renderResults(side) {
  const totals = getVoteTotals(state.currentQuestion);
  const totalVotes = totals.left + totals.right;
  const leftPercent = Math.round((totals.left / totalVotes) * 100);
  const rightPercent = 100 - leftPercent;

  setResultsVisuals(leftPercent, rightPercent);

  const winnerSide = leftPercent >= rightPercent ? "left" : "right";
  const winnerText = state.currentQuestion[winnerSide];
  const chosenText = state.currentQuestion[side];

  ui.leftChoice.classList.toggle("is-selected", side === "left");
  ui.leftChoice.classList.toggle("is-dimmed", side !== "left");
  ui.rightChoice.classList.toggle("is-selected", side === "right");
  ui.rightChoice.classList.toggle("is-dimmed", side !== "right");

  ui.leftChoice.disabled = true;
  ui.rightChoice.disabled = true;

  ui.resultHeadline.textContent =
    'Voce foi de "' + chosenText + '". A maioria local esta inclinando para "' + winnerText + '".';
  ui.resultSubline.textContent =
    formatNumber(totalVotes) +
    " votos combinados nesta rodada. Clique em Proxima rodada para seguir.";
  ui.nextButton.disabled = false;
  showToast("Escolha registrada com sucesso.");
}

function setResultsVisuals(leftPercent, rightPercent) {
  if (leftPercent == null || rightPercent == null) {
    ui.leftResultFill.style.width = "0%";
    ui.rightResultFill.style.width = "0%";
    ui.leftResultValue.textContent = "--";
    ui.rightResultValue.textContent = "--";
    return;
  }

  ui.leftResultValue.textContent = leftPercent + "%";
  ui.rightResultValue.textContent = rightPercent + "%";

  requestAnimationFrame(() => {
    ui.leftResultFill.style.width = leftPercent + "%";
    ui.rightResultFill.style.width = rightPercent + "%";
  });
}

function getVoteTotals(question) {
  const baseVotes = createBaseVotes(question);
  const liveVotes = state.persistent.votes[question.id] || { left: 0, right: 0 };

  return {
    left: baseVotes.left + liveVotes.left,
    right: baseVotes.right + liveVotes.right,
  };
}

function createBaseVotes(question) {
  const seed = hashString(question.id);
  const total = question.origin === "custom" ? 14 + (seed % 36) : 180 + (seed % 760);
  const leftBias = 34 + ((seed >> 3) % 33);
  const left = Math.round((total * leftBias) / 100);
  return { left, right: total - left };
}

function renderStats() {
  const favoriteCategory = getFavoriteCategory();
  const customCount = state.persistent.customQuestions.length;

  ui.streakValue.textContent = state.persistent.currentStreak;
  ui.bestStreakValue.textContent = state.persistent.bestStreak;
  ui.totalAnswersValue.textContent = formatNumber(state.persistent.totalAnswers);
  ui.favoriteCategoryValue.textContent = favoriteCategory;
  ui.heroTotalAnswers.textContent = formatNumber(state.persistent.totalAnswers);
  ui.heroCustomCount.textContent = formatNumber(customCount);
  ui.heroHotCategory.textContent = favoriteCategory;
  ui.composerNote.textContent =
    customCount === 0
      ? "As rodadas criadas por voce ficam salvas neste navegador."
      : formatNumber(customCount) +
        " rodada(s) autoral(is) ja fazem parte do seu deck.";
}

function renderHistory() {
  ui.historyList.replaceChildren();

  if (!state.persistent.history.length) {
    const item = document.createElement("li");
    item.className = "history-item";
    item.textContent = "As escolhas mais recentes aparecem aqui assim que voce votar.";
    ui.historyList.append(item);
    return;
  }

  state.persistent.history.forEach((entry) => {
    const item = document.createElement("li");
    item.className = "history-item";

    const info = document.createElement("div");

    const category = document.createElement("p");
    category.className = "history-category";
    category.textContent = prettyCategory(entry.category);

    const option = document.createElement("strong");
    option.textContent = entry.option;

    const meta = document.createElement("div");
    meta.className = "history-meta";
    meta.textContent = formatRelativeTime(entry.timestamp);

    info.append(category, option);
    item.append(info, meta);
    ui.historyList.append(item);
  });
}

function addCustomQuestion(event) {
  event.preventDefault();

  const prompt = cleanText(ui.customPrompt.value) || "Na sua proxima cena perfeita";
  const left = cleanText(ui.customLeft.value);
  const right = cleanText(ui.customRight.value);
  const category = ui.customCategory.value;

  if (!left || !right) {
    showToast("Preencha as duas opcoes para criar a rodada.");
    return;
  }

  if (left.toLowerCase() === right.toLowerCase()) {
    showToast("As duas opcoes precisam ser diferentes.");
    return;
  }

  const question = {
    id: "custom-" + Date.now(),
    category,
    prompt,
    left,
    right,
  };

  state.persistent.customQuestions.unshift(question);
  state.persistent.customQuestions = state.persistent.customQuestions.slice(0, 30);
  saveState();

  ui.composerForm.reset();
  renderCategoryControls();
  renderStats();

  if (state.currentFilter !== "todas" && state.currentFilter !== category) {
    state.currentFilter = category;
    renderCategoryControls();
  }

  chooseNextQuestion(true, question.id);
  showToast("Rodada autoral adicionada ao deck.");
}

function resetLocalData() {
  const confirmed = window.confirm(
    "Deseja limpar votos, historico e rodadas autorais deste navegador?"
  );

  if (!confirmed) {
    return;
  }

  state.persistent = {
    votes: {},
    history: [],
    customQuestions: [],
    currentStreak: 0,
    bestStreak: 0,
    totalAnswers: 0,
    categoryCounts: {},
  };

  state.currentFilter = "todas";
  state.deck = [];
  state.deckIndex = 0;
  state.recentQuestionIds = [];
  saveState();
  renderCategoryControls();
  renderStats();
  renderHistory();
  chooseNextQuestion(true);
  showToast("Memoria local reiniciada.");
}

function copyCurrentQuestion() {
  if (!state.currentQuestion) {
    showToast("Nenhuma rodada ativa para copiar.");
    return;
  }

  const text =
    "Voce prefere: " +
    state.currentQuestion.left +
    " OU " +
    state.currentQuestion.right +
    "?";

  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    showToast("Copiar nao esta disponivel neste navegador.");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => showToast("Duelo copiado para a area de transferencia."))
    .catch(() => showToast("Nao foi possivel copiar agora."));
}

function handleShortcuts(event) {
  const activeTag = document.activeElement && document.activeElement.tagName;
  if (activeTag === "INPUT" || activeTag === "SELECT" || activeTag === "TEXTAREA") {
    return;
  }

  if (event.key === "1") {
    vote("left");
  }
  if (event.key === "2") {
    vote("right");
  }
  if ((event.key === "Enter" || event.key.toLowerCase() === "n") && !ui.nextButton.disabled) {
    chooseNextQuestion();
  }
}

function getFavoriteCategory() {
  const entries = Object.entries(state.persistent.categoryCounts);
  if (!entries.length) {
    return "explorando";
  }

  entries.sort((a, b) => b[1] - a[1]);
  return prettyCategory(entries[0][0]);
}

function prettyCategory(category) {
  if (category === "todas") {
    return "todas";
  }

  return category;
}

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add("is-visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => {
    ui.toast.classList.remove("is-visible");
  }, 2200);
}

function createChoiceBurst(side) {
  const host = side === "left" ? ui.leftChoice : ui.rightChoice;
  const palette = side === "left"
    ? ["#2dc5b6", "#4f87ff", "#d9f59a"]
    : ["#ff7a67", "#f6c35b", "#ffb6a7"];

  for (let index = 0; index < 12; index += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.setProperty("--x", (Math.random() - 0.5) * 220 + "px");
    spark.style.setProperty("--y", (Math.random() - 0.5) * 180 + "px");
    spark.style.setProperty("--spark-color", palette[index % palette.length]);
    host.append(spark);
    spark.addEventListener("animationend", () => spark.remove());
  }
}

function cleanText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function shuffleArray(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }
  return items;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function formatRelativeTime(timestamp) {
  const diff = Date.now() - timestamp;
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) {
    return "agora";
  }
  if (diff < hour) {
    return Math.round(diff / minute) + " min";
  }
  if (diff < day) {
    return Math.round(diff / hour) + " h";
  }
  return Math.round(diff / day) + " d";
}

function formatNumber(value) {
  return new Intl.NumberFormat("pt-BR").format(value);
}
