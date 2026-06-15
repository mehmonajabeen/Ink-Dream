function searchNovel() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let novels = document.getElementsByClassName("novel");

  for (let i = 0; i < novels.length; i++) {
    let title = novels[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (title.includes(input)) {
      novels[i].style.display = "block";
    } else {
      novels[i].style.display = "none";
    }
  }
}