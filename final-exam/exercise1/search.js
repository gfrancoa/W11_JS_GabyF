window.onload = () => {
  let button = document.getElementById("search-button");

  button.addEventListener("click", () => {
    let courses = Array.from(document.querySelectorAll(".courses td"));
    let searchText = document.getElementById("course-search").value;
    if (courses.find((course) => course.innerHTML == searchText)) {
      //   document.getElementsByClassName("courses").style.backgroundColor =
      //     "yellow";

      courses.forEach((course) => {
        course.parentElement.style.backgroundColor = "yellow";
      });
    } else {
      let td = document.createElement("td");
      td.innerText = searchText;
      let tr = document.createElement("tr");
      tr.appendChild(td).parentElement.classList.add("courses");

      document.getElementById("list").appendChild(tr);
    }
  });
};
