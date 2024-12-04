$(document).ready(function () {
  $(".delete").on("click", function (e) {
    e.preventDefault();

    if (confirm("Tas seguro lco mío?")) {
      $(this).closest(".form-delete").submit();
    }
  });
});
