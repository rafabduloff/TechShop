document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("more-popularity-link");
  const hiddenContent = document.querySelector(".our_services_content_hidden");

  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      hiddenContent.style.display === "none" ||
      hiddenContent.style.display === ""
    ) {
      hiddenContent.style.display = "block";
      link.textContent = "меньше";
    } else {
      hiddenContent.style.display = "none";
      link.textContent = "больше";
    }
  });
});
