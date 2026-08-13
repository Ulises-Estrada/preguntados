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
let isGameActive = false;
let isPlayerActive = false;
let errors = 0;
let points = 0;
let rounds = 0;
let roundsLimit = 25;
