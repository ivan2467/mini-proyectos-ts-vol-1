import { showPreview } from "../show-result/show-result";

export interface CssOptions {
  font_family: string;
  font_size: number;
  letter_spacing: number;
  word_spacing: number;
  color: string;
  font_weigth: "normal" | "bold";
  font_decoration: "none" | "underline" | "overline" | "line-through";
  font_style: "normal" | "italic" | "oblique";
  font_variant: "normal" | "small-caps";
  text_transform: "none" | "uppercase" | "lowercase" | "capitalize";
  test_text: string;
}

export function applyCssOptions() {
  const optionsForm = document.querySelector(
    "#app > .options"
  ) as HTMLFormElement;

  let html = `
  <label for="font_family">
    <p>Familia de fuentes</p>
    <select name="font_family" id="font_family">
      <option value="Inter">Inter</option>
      <option value="Georgia">Georgia</option>
    </select>
  </label>
  <label for="font_size">
    <p>Tamaño de fuentes</p>
    <input type="number" id="font_size" name="font_size" value="18" />
  </label>
  <label for="letter_spacing">
    <p>Espaciado de letras</p>
    <input type="number" id="letter_spacing" name="letter_spacing" value="0" />
  </label>
  <label for="word_spacing">
    <p>Espaciado entre palabras</p>
    <input type="number" id="word_spacing" name="word_spacing" value="0" />
  </label>
  <label for="text_color">
    <p>Color</p>
    <input type="number" id="text_color" name="text_color" value="0" />
  </label>
  <fieldset id="font_weigth">
    <legend>Peso</legend>
    <div>
      <input type="radio" name="font_weigth" id="font_weigth1" value="normal" checked />
      <label for="font_weigth1">Normal</label>
      <input type="radio" name="font_weigth" id="font_weigth2" value="bold" />
      <label for="font_weigth2">Bold</label>
    </div>
  </fieldset>
  <fieldset id="font_decoration">
    <legend>Decoración</legend>
    <div>
      <input
        type="radio"
        name="font_decoration"
        id="font_decoration1"
        value="none"
        checked
      />
      <label for="font_decoration1">None</label>
      <input
        type="radio"
        name="font_decoration"
        id="font_decoration2"
        value="underline"
      />
      <label for="font_decoration2">Underline</label>
      <input
        type="radio"
        name="font_decoration"
        id="font_decoration3"
        value="overline"
      />
      <label for="font_decoration3">Overline</label>
      <input
        type="radio"
        name="font_decoration"
        id="font_decoration4"
        value="line-through"
      />
      <label for="font_decoration4">Line through</label>
    </div>
  </fieldset>
  <fieldset id="font_style">
    <legend>Estilo</legend>
    <div>
      <input type="radio" name="font_style" id="font-style1" value="normal" checked />
      <label for="font-style1">Normal</label>
      <input type="radio" name="font_style" id="font-style2" value="italic" />
      <label for="font-style2">Italic</label>
      <input type="radio" name="font_style" id="font-style3" value="oblique" />
      <label for="font-style3">Oblique</label>
    </div>
  </fieldset>
  <fieldset id="font_variant">
    <legend>Variante</legend>
    <div>
      <input
        type="radio"
        name="font_variant"
        id="font_variant1"
        value="normal"
        checked
      />
      <label for="font_variant1">Normal</label>
      <input
        type="radio"
        name="font_variant"
        id="font_variant2"
        value="small-caps"
      />
      <label for="font_variant2">SMALL CAPS</label>
    </div>
  </fieldset>
  <fieldset id="text_transform">
    <legend>Transformar</legend>
    <div>
      <input
        type="radio"
        id="text_transform1"
        name="text_transform"
        value="none"
        checked
      />
      <label for="text_transform1">none</label>

      <input
        type="radio"
        id="text_transform2"
        name="text_transform"
        value="uppercase"
      />
      <label for="text_transform2">UPPERCASE</label>

      <input
        type="radio"
        id="text_transform3"
        name="text_transform"
        value="lowercase"
      />
      <label for="text_transform3">lowercase</label>

      <input
        type="radio"
        id="text_transform4"
        name="text_transform"
        value="capitalize"
      />
      <label for="text_transform4">Capitalize</label>
    </div>
  </fieldset>
  <label for="test_text">
    <p>Texto para ver</p>
    <input type="text" id="test_text" name="test_text" value="Preview text" />
  </label>
`;

  optionsForm.insertAdjacentHTML("beforeend", html);
  updateObj();
}

function updateObj() {
  let formElement = document.querySelector("form.options") as HTMLFormElement;

  formElement.addEventListener("input", update);
  update(null);

  function update(e: Event | null) {
    if (e != null) e.preventDefault();

    const formData = new FormData(formElement);
    const options = Object.fromEntries(formData) as unknown as CssOptions;
    console.log(options);

    showPreview(options);
  }
}
