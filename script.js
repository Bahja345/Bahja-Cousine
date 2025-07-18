document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! We'll follow up with your message or reservation.");
  });
});
const proverbs = [
  "“Aqoon la’aan waa iftiin la’aan.” – Without knowledge, there is no light.",
  "“Nin gacan fiican leh geed wuu jaraa.” – A man with a good hand can cut even the thickest tree.",
  "“Af-Soomaali waa dhaqanka.” – Somali language is our culture."
];

let index = 0;
setInterval(() => {
  index = (index + 1) % proverbs.length;
  document.getElementById("proverb-display").textContent = proverbs[index];
}, 4000);