const toggleBtn = document.getElementById("theme-toggle");

function applyTheme(isLight) {
  document.documentElement.classList.toggle("light", isLight);
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "light");

toggleBtn.addEventListener("click", () => {
  const nowLight = !document.documentElement.classList.contains("light");
  applyTheme(nowLight);
  localStorage.setItem("theme", nowLight ? "light" : "dark");
});
