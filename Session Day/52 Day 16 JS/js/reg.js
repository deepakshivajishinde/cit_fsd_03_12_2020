var btnSaveData = document.getElementsByClassName("btnSaveData");
for (const btn of btnSaveData) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    this.innerHTML = "EDIT";
    console.log("hello");
  });
}