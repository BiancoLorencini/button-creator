const controls = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");
controls.addEventListener("change", handleChange);

const handleStyle = {
    element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  color(value) {
    this.element.style.color = value;
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem"
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value)
  showCss();
};

function saveValues(name, value) {
  localStorage[name] = value;
};

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((properties) => {
    handleStyle[properties](localStorage[properties]);
    controls.elements[properties].value = localStorage[properties];
  });
  showCss();
};

setValues();

function showCss() {
    cssText.innerHTML = "<span>" + btn.style.cssText.split("; ").join(";<span></span>");
};