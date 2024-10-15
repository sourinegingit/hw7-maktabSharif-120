const leftfirstTab = document.querySelector(".leftfirstTab");
const leftSecondTab = document.querySelector(".leftSecondTab");
const leftthirdTab = document.querySelector(".leftthirdTab");
console.log(leftfirstTab);

const liElements = document.getElementById("myList").querySelectorAll("li");
console.log(liElements);

liElements.forEach((li) => {
  li.addEventListener("click", () => {
    const uniqueText = li.getAttribute("data-text");
    //    console.log(uniqueText);
    const output = document.getElementById("output");
    output.textContent = uniqueText;
  });
});
