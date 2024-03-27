$(document).ready(function () {
  $("#recommencer").hide();

  function melanger() {
    var tuiles = $("#taquin .tuile").not(".vide").get();
    tuiles.sort(function () {
      return 0.5 - Math.random();
    });

    $("#taquin").empty().append(tuiles);
    $('<div class="tuile vide"></div>').appendTo("#taquin");
  }

  melanger();

  $("#taquin").on("click", ".tuile:not(.vide)", function () {
    var indexVide = $(".vide").index();
    var indexClic = $(this).index();

    if (estAdjacent(indexClic, indexVide)) {
      var cloneThis = $(this).clone();
      var cloneVide = $(".vide").clone();

      $(".vide").replaceWith(cloneThis);
      $(this).replaceWith(cloneVide);

      verifierGagne();
    }
  });

  function estAdjacent(indexClic, indexVide) {
    var rowDiff = Math.floor(indexClic / 3) - Math.floor(indexVide / 3);
    var colDiff = (indexClic % 3) - (indexVide % 3);

    return (
      (Math.abs(rowDiff) === 1 && colDiff === 0) ||
      (Math.abs(colDiff) === 1 && rowDiff === 0)
    );
  }

  function verifierGagne() {
    var gagne = true;
    $("#taquin .tuile").each(function (index) {
      if ($(this).data("tuile") && $(this).data("tuile") !== index + 1) {
        gagne = false;
        return false;
      }
    });

    if (gagne) {
      $("#message").text("Vous avez gagné!").css("color", "green");
      $("#recommencer").show();
    }
  }

  $("#recommencer").click(function () {
    melanger();
    $("#message").text("");
    $(this).hide();
  });
});
