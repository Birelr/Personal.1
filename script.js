function typeWriter(text, element, speed = 50) {
  let i = 0;
  const cursor = document.querySelector(".cursor");

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      updateCursorPosition(element, cursor);

      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function updateCursorPosition(textElement, cursor) {
  const textRect = textElement.getBoundingClientRect();
  const lines = textElement.innerHTML.split("\n").length;
  const lastLine = textElement.innerHTML.split("\n").pop();
  const tempSpan = document.createElement("span");
  tempSpan.style.visibility = "hidden";
  tempSpan.style.position = "absolute";
  tempSpan.style.font = window.getComputedStyle(textElement).font;
  tempSpan.textContent = lastLine;
  document.body.appendChild(tempSpan);

  const lastLineWidth = tempSpan.offsetWidth;
  document.body.removeChild(tempSpan);
  cursor.style.left = textRect.left + lastLineWidth + "px";
  cursor.style.top = textRect.top + (lines - 1) * 17 + "px";
}

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text");
  textElement.innerHTML = "";
  typeWriter(
    "You're not on the default gateway.\nTrace the route.",
    textElement,
    50
  );
});
