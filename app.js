const { createClient } = supabase;
const SUPABASE_URL = "https://tdasbzonyzwgrnjkjenx.supabase.co/rest/v1/";
const SUPABASE_ANONKEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkYXNiem9ueXp3Z3JuamtqZW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NzQ0ODAsImV4cCI6MjEwMjE1MDQ4MH0.0B70uF_E-bvFRqQAQLWyvM-C_yJEtKIEKHjVUG0KiFU";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANONKEY);

// DOM
const generalContainer = document.querySelector(".general-container");
const marker = document.querySelector(".marker");
const rouletteContainer = document.querySelector(".square-container");
const squares = document.querySelectorAll(".standard");
const headerTitle = document.querySelector(".header-title");

// Game Values
let isGameActive = localStorage.getItem("isGameActive") || false;
let isPlayerActive = false;
let errors = 0;
let points = 0;
let rounds = 0;
let roundsLimit = 25;
let currentLength = -4.86;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + 1;
}

function activeGame() {
  headerTitle.addEventListener("click", () => {
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
  localStorage.setItem("isGameActive", true);
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
  }, 5000);
});
