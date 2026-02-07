chrome.storage.sync.get(["redirectUrl"], (res) => {
  const url = res.redirectUrl || "http://www.google.com";
  document.getElementById("frame").src = url;
});