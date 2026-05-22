// Instead of attaching listeners to each <li>, attach once to the parent <ul>
document.querySelector("#taskList").addEventListener("click", function(event) {
  const target = event.target;

  if (target.matches(".delete-btn")) {
    target.closest("li").remove();
  } else if (target.matches(".complete-btn")) {
    target.closest("li").classList.toggle("done");
  }
});