import { mockTelegramEnv, isTMA } from "@telegram-apps/sdk-solid";

// It is important, to mock the environment only for development purposes.
// When building the application the import.meta.env.DEV will value become
// `false` and the code inside will be tree-shaken (removed), so you will not
// see it in your final bundle.
if (import.meta.env.DEV) {
  (() => {
    if (isTMA()) {
      return;
    }

    mockTelegramEnv({
      launchParams: {
        tgWebAppPlatform: "tdesktop",
        tgWebAppThemeParams: {
          accent_text_color: "#6ab2f2",
          bg_color: "#17212b",
          button_color: "#5288c1",
          button_text_color: "#ffffff",
          destructive_text_color: "#ec3942",
          header_bg_color: "#17212b",
          hint_color: "#708499",
        },
        tgWebAppVersion: "8",
        tgWebAppData:
          "user=%7B%22id%22%3A99281932%2C%22first_name%22%3A%22Andrew%22%2C%22last_name%22%3A%22Rogue%22%2C%22username%22%3A%22rogue%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&signature=abc&hash=89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31&auth_date=1716922846&start_param=debug&chat_type=sender&chat_instance=8428209589180549439",
      },
    });
    console.warn(
      "⚠️ As long as the current environment was not considered as the Telegram-based one, it was mocked. Take a note, that you should not do it in production and current behavior is only specific to the development process. Environment mocking is also applied only in development mode. So, after building the application, you will not see this behavior and related warning, leading to crashing the application outside Telegram."
    );
  })();
}
