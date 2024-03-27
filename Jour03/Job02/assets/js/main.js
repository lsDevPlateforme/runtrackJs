$(document).ready(function () {
  $("#melanger").click(function () {
    let images = $("#arc-en-ciel img").toArray();
    images.sort(function () {
      return 0.5 - Math.random();
    });
    $("#arc-en-ciel").empty().append(images);
  });

  $("#arc-en-ciel").on("dragstart", "img", function (event) {
    event.originalEvent.dataTransfer.setData("text", event.target.id);
  });

  $(".slot")
    .on("dragover", function (event) {
      event.preventDefault();
    })
    .on("drop", function (event) {
      event.preventDefault();
      var data = event.originalEvent.dataTransfer.getData("text");
      if (!$(this).has("img").length) {
        var draggedImage = $("#" + data).detach();
        $(this).append(draggedImage);
        verifierOrdre();
      }
    });

  function verifierOrdre() {
    var dansLeBonOrdre = true;
    $(".container .slot").each(function (index) {
      var idImage = $(this).find("img").attr("id");
      if (idImage !== "arc" + (index + 1)) {
        dansLeBonOrdre = false;
        return false;
      }
    });

    if (dansLeBonOrdre && $(".container .slot img").length === 6) {
      $("#message").text("Vous avez gagné").css("color", "green");
    } else {
      $("#message").text("Vous avez perdu").css("color", "red");
    }
  }
});
