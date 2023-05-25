function handleAccordion(index) {
  if (
    document.querySelectorAll(".collapsible div")[index - 1].style.display ==
    "block"
  ) {
    document.querySelectorAll(".collapsible div")[index - 1].style.display =
      "none";
    document
      .querySelectorAll(".collapsible .collapsible-h")
      [index - 1].classList.remove("collapsible-open");
    document
      .querySelectorAll(".collapsible .collapsible-h")
      [index - 1].classList.add("collapsible-close");
  } else {
    document.querySelectorAll(".collapsible div")[index - 1].style.display =
      "block";
    document
      .querySelectorAll(".collapsible .collapsible-h")
      [index - 1].classList.add("collapsible-open");
    document
      .querySelectorAll(".collapsible .collapsible-h")
      [index - 1].classList.remove("collapsible-close");
  }
}

window.onload = function () {
  document.querySelectorAll(".collapsible .collapsible-h").forEach((el) => {
    el.classList.add("collapsible-close");
  });
  document.querySelectorAll(".collapsible div").forEach((el) => {
    el.style.display = "none";
  });
};
