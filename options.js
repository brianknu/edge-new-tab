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
    alert("Ingresá una URL válida (http o https)");
    return;
  }
  chrome.storage.sync.set({ redirectUrl: url }, () => {
    alert("Guardado ✅");
  });
});
