const small = document.querySelector(".small");
const large = document.querySelector(".large");
const text = document.querySelector(".text");
small.addEventListener("click", (e) => {
  console.log(e);

  text.style.fontSize = "14px";
});
large.addEventListener("click", (e) => {
  console.log(e);

  text.style.fontSize = "32px";
});
