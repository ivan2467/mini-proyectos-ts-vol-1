import { CssOptions } from "../css-options/css-options";

export function showPreview(options: CssOptions) {
  checkIfShowPreviewExists();
  const oldPreview = document.querySelector("#showPreview") as HTMLDivElement;

  const newPreview = document.createElement("section") as HTMLDivElement;
  newPreview.id = "showPreview";
  const css = `
    font-family: ${options.font_family};
    font-size: ${options.font_size}px;
    letter-spacing: ${options.letter_spacing}px;
    word-spacing: ${options.word_spacing}px;
    color: ${options.color};
    font-weight: ${options.font_weigth};
    text-decoration: ${options.font_decoration};
    font-style: ${options.font_style};
    font-variant: ${options.font_variant};
    text-transform: ${options.text_transform};
  `;
  newPreview.innerHTML = `
    <p style="${css}"> ${options.test_text} </p>
  `;

  oldPreview.replaceWith(newPreview);
}

function checkIfShowPreviewExists() {
  const preview = document.querySelector("#showPreview");

  if (preview === null) {
    const form = document.querySelector("#app > .options") as HTMLFormElement;

    const previewElement = document.createElement("section");
    previewElement.id = "showPreview";
    previewElement.innerHTML = `<p>hola</p>`;

    form.insertAdjacentElement("afterend", previewElement);
  }
}
