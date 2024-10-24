let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let content = document.querySelector(".content");

let rgb1 = "#00ffff";
let rgb2 = "#90ee90";
let rgb3 = "#000000";

let hexColors = () => {
  let hex = "1234567890abcdef";
  let temp = "#";
  for (let i = 1; i <= 6; i++) {
    temp += hex[Math.floor(Math.random() * 16)];
  }
  return temp;
};
let handleBtn1 = () => {
  rgb1 = hexColors();
  document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2}, ${rgb3})`;
  btn1.innerHTML = `${rgb1}`;
  content.innerHTML = `
          background-image: linear-gradient(to right ,
          ${rgb1},${rgb2},${rgb3});`;
};
let handleBtn2 = () => {
  rgb2 = hexColors();
  document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2}, ${rgb3})`;
  btn2.innerHTML = `${rgb2}`;
  content.innerHTML = `
          background-image: linear-gradient(to right ,
          ${rgb1},${rgb2},${rgb3});`;
};
let handleBtn3 = () => {
  rgb3 = hexColors();
  document.body.style.backgroundImage = `linear-gradient(to right , ${rgb1}, ${rgb2}, ${rgb3})`;
  btn3.innerHTML = `${rgb3}`;
  content.innerHTML = `
          background-image: linear-gradient(to right ,
          ${rgb1},${rgb2},${rgb3});`;
};
content.addEventListener("click", () => {
  navigator.clipboard.writeText(content.innerText);
});
btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
btn3.addEventListener("click", handleBtn3);
