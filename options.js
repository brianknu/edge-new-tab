const input = document.getElementById("url");
const button = document.getElementById("save");

// Cargar valor guardado
chrome.storage.sync.get(["redirectUrl"], (res) => {
  if (res.redirectUrl) {
    input.value = res.redirectUrl;
  }
});

// Guardar valor
button.addEventListener("click", () => {
  const url = input.value.trim();
  if (!url.startsWith("http")) {
    alert("Invalid URL");
    return;
  }
  chrome.storage.sync.set({ redirectUrl: url }, () => {
    alert("Done ✅");
  });
});
