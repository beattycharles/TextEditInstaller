const butInstall = document.getElementById("buttonInstall");

// Event handler for prompt before you install the app
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
});

// Event handler for when you click the install button
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
});

// Event handler for when the app is installed
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
