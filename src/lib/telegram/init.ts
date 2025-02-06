import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  setDebug,
  init as initSDK,
} from "@telegram-apps/sdk-solid";

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  setDebug(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Mount all components used in the project.
  backButton.isSupported() && backButton.mount();
  initData.restore();

  void viewport
    .mount()
    .catch((e) => {
      console.error("Something went wrong mounting the viewport", e);
    })
    .then(async () => {
      viewport.bindCssVars();
      if (viewport.requestFullscreen.isAvailable()) {
        await viewport.requestFullscreen();
      }
    });

  void miniApp
    .mount()
    .catch((e) => {
      console.error("Something went wrong mounting the miniApp", e);
    })
    .then(async () => {
      miniApp.bindCssVars();
    });

  const webApp = (window as any)?.Telegram?.WebApp;
  if (webApp) {
    try {
      webApp.disableVerticalSwipes();
    } catch (e) {
      console.log("Error requesting fullscreen", e);
    }
  }
  // Add Eruda if needed.
  debug &&
    import("eruda").then((lib) => lib.default.init()).catch(console.error);
}
