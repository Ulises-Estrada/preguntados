const { createClient } = supabase;
const SUPABASE_URL = "https://tdasbzonyzwgrnjkjenx.supabase.co";
const SUPABASE_ANONKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkYXNiem9ueXp3Z3JuamtqZW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NzQ0ODAsImV4cCI6MjEwMjE1MDQ4MH0.0B70uF_E-bvFRqQAQLWyvM-C_yJEtKIEKHjVUG0KiFU";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANONKEY);

// DOM
const generalContainer = document.querySelector(".general-container");
const marker = document.querySelector(".marker");
const rouletteContainer = document.querySelector(".square-container");
const squares = document.querySelectorAll(".standard");
const headerTitle = document.querySelector(".header-title");
const questionContainer = document.querySelector(".question-container");
const playerMistakes = document.querySelector(".player-mistakes-one");
const playerPoints = document.querySelector(".player-points-one");
const finalResultContainer = document.querySelector(".final-result-container");

// Game Values
let isGameActive = localStorage.getItem("isGameActive") || false;
let isPlayerActive = false;
let errors = 0;
let points = 0;
let rounds = 0;
let roundsLimit = 25;
let currentLength = -4.86;
let theAnswer = null;
let countDown = null;
const SECOND = 1000;
let totalAmount = 20 * SECOND;
let counter = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + 1;
}

function activeGame() {
  headerTitle.addEventListener("click", () => {
    localStorage.setItem("isGameActive", true);
    setGameValuesLS();
    isPlayerActive = true;
    marker.computedStyleMap.pointerEvents = "auto";
    headerTitle.style.pointerEvents = "none";
    headerTitle.innerText = `Ronda 0 / ${roundsLimit}`;
  });
}

function setGameValuesLS() {
  localStorage.setItem("points", 0);
  localStorage.setItem("errors", 0);
  localStorage.setItem("rounds", 0);
}

activeGame();

// Marker event listener

marker.addEventListener("click", (e) => {
  e.preventDefault();

  if (!isPlayerActive) return false;
  marker.style.pointerEvents = "none";

  localStorage.getItem("rounds");
  rounds++;
  headerTitle.innerText = `Ronda ${rounds} / ${roundsLimit}`;
  currentLength += 900 + getRandomInt(0, 37) * 9.729;
  rouletteContainer.style.transform = "rotate(-" + currentLength + "deg)";

  const gameTime = setTimeout(async () => {
    const filtered = Array.from(squares).sort(
      (a, b) =>
        a.getBoundingClientRect().right - b.getBoundingClientRect().right,
    );

    const categorySelected = filtered[0].dataset.category;

    const { data, error } = await supabaseClient.rpc("get_random_question", {
      category: categorySelected,
    });

    const questionRevealed = data[0];
    console.log(questionRevealed);

    questionContainer.style.display = "block";
    const backgroundColorCat = categorySelected.substring(0, 3);

    questionContainer.innerHTML = questionsTemplate(
      backgroundColorCat,
      questionRevealed,
      categorySelected,
    );

    theAnswer = questionRevealed.correcta;

    const countdownContainer = document.createElement("span");
    const questionBar = document.createElement("div");

    countdownContainerTemplate(countdownContainer, questionBar);

    clearTimeout(gameTime);

    countDown = setInterval(() => {
      totalAmount -= SECOND;
      countdownContainer.innerText = `${totalAmount / SECOND}s`;
      questionBar.style.width = `${totalAmount / 200}%`;

      if (totalAmount <= 0) {
        errors++;
        points -= 5;
        playerMistakes.innerText = `Errores: ${errors}`;
        playerPoints.innerText = `Puntos: ${points}`;
        if (errors > 3) {
          localStorage.setItem("isGameActive", false);
          setGameValuesLS();
          setTimeout(() => {
            // Template para resultado final cuando se pierde
            finalResultTemplate("Perdiste");
          }, 1500);
          setTimeout(() => {
            location.reload();
          }, 4000);
        }
        // Reset values
        let endTime = setTimeout(() => {
          questionContainer.innerHTML = "";
          questionContainer.style.display = "none";
          marker.style.pointerEvents = "auto";
          totalAmount = 20 * SECOND;
          clearTimeout(endTime);
        }, 1500);
        clearInterval(countDown);
      }
    }, SECOND);
  }, 5000);
});

questionContainer.addEventListener("click", (e) => {
  const answerSelected = e.target.getAttribute("data-id");
  if (answerSelected) {
    clearInterval(countDown);
    totalAmount = 20 * SECOND;

    if (answerSelected === theAnswer) {
      points += 5;
      playerPoints.innerText = `Puntos: ${points}`;
      // Mensaje de respuesta correcta
      answerResultTemplate("Correcta", "success");
      if (rounds === roundsLimit) {
        localStorage.setItem("isGameActive", false);
        setGameValuesLS();
        setTimeout(() => {
          // Template para el resultado final cuando se gana
          finalResultTemplate("Ganaste");
        }, 1500);
        setTimeout(() => {
          location.reload();
        }, 4000);
      }
    } else {
      console.log("No es la respuesta correcta");
      errors++;
      points -= 5;
      playerMistakes.innerText = `Errores: ${errors}`;
      playerPoints.innerText = `Puntos: ${points}`;
      if (errors > 3) {
        localStorage.setItem("isGameActive", false);
        setGameValuesLS();
        setTimeout(() => {
          // Template para resultado final cuando se pierde
          finalResultTemplate("Perdiste");
        }, 1500);
        setTimeout(() => {
          location.reload();
        }, 4000);
      }
      // Mensaje de respuesta incorrecta
      answerResultTemplate("Incorrecta", "error");
    }

    let endTime = setTimeout(() => {
      questionContainer.innerHTML = "";
      questionContainer.style.display = "none";
      clearTimeout(endTime);
    }, 1500);

    marker.style.pointerEvents = "auto";
  }
});

function questionsTemplate(
  backgroundColorCat,
  questionRevealed,
  categorySelected,
) {
  return `
  <div class="question">
    <div class="question-header ${backgroundColorCat}">
      <h2 class="category-name">${categorySelected}</h2>
    </div>
    <div class="question-body">
      <div class="question-title ${backgroundColorCat}">
        <h3>${questionRevealed.nombre}</h3>
      </div>
      <div class="answers-container">
        <span data-id="a" class="answer ${backgroundColorCat}">${questionRevealed.opciones[0].a}</span>
        <span data-id="b" class="answer ${backgroundColorCat}">${questionRevealed.opciones[0].b}</span>
        <span data-id="c" class="answer ${backgroundColorCat}">${questionRevealed.opciones[0].c}</span>
        <span data-id="d" class="answer ${backgroundColorCat}">${questionRevealed.opciones[0].d}</span>
      </div>
    </div>
  </div>
  `;
}

function countdownContainerTemplate(countdownContainer, questionBar) {
  countdownContainer.classList.add("countdown");
  countdownContainer.innerText = "20s";
  const questionHeader = document.querySelector(".question-header");
  questionHeader.insertAdjacentElement("beforeend", countdownContainer);
  questionBar.classList.add("question-bar");
  questionHeader.insertAdjacentElement("afterend", questionBar);
}

function answerResultTemplate(message, resultColor) {
  const questionBody = document.querySelector(".question-body");
  const resultTemplate = document.createElement("div");
  resultTemplate.classList.add("result-container");
  if (resultColor === "success") {
    resultTemplate.classList.add("success-answer");
  } else {
    resultTemplate.classList.add("wrong-answer");
  }
  resultTemplate.innerText = message;
  questionBody.insertAdjacentElement("beforeend", resultTemplate);
}

function finalResultTemplate(message) {
  finalResultContainer.style.display = "block";
  const finalResultBody = document.createElement("div");
  finalResultBody.innerText = message;
  finalResultBody.classList.add("final-result");
  finalResultContainer.append(finalResultBody);
}
