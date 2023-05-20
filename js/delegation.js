const MAX_PRODUCTS = 20;

function selected(ev) {
  //   console.log("selected item", ev.target.innerHTML);
  document.getElementById("output").innerHTML =
    ev.target.innerHTML + " (ID=product_no_" + ev.target.id + ")";
}

for (let i = 1; i <= MAX_PRODUCTS; i++) {
  let child = document.createElement("li");
  child.innerHTML = "Product number: " + i;
  child.setAttribute("id", i);
  document.getElementById("listContainer").appendChild(child);
}

let elements = document.getElementById("listContainer").children;

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", selected);
}
