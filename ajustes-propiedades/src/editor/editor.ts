import { applyCssOptions } from "./css-options/css-options";

export function editor() {
  let app = document.querySelector("#app") as HTMLDivElement;
  const html = `
    <form class="options">
    </form>
    `;
  app.insertAdjacentHTML("beforeend", html);
  applyCssOptions();
}
