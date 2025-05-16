function changeContent() {
  const textEl = document.getElementById("dynamic-text");
  textEl.textContent = "The content has changed!";
  textEl.style.color = "green";
  textEl.style.fontWeight = "bold";
  textEl.style.backgroundColor = "#e0ffe0";
  textEl.style.padding = "10px";
}

let elementExists = false;

function toggleElement() {
  const container = document.getElementById("element-container");

  if (!elementExists) {
    const newDiv = document.createElement("div");
    newDiv.id = "dynamic-box";
    newDiv.textContent = "I'm a new element!";
    newDiv.style.border = "2px solid #333";
    newDiv.style.padding = "10px";
    newDiv.style.marginTop = "10px";
    container.appendChild(newDiv);
    elementExists = true;
  } else {
    const box = document.getElementById("dynamic-box");
    if (box) container.removeChild(box);
    elementExists = false;
  }
}
