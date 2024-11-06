import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { editor } from "./editor/editor.ts";
import { CssOptions } from "./editor/css-options/css-options.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

`;

editor();
