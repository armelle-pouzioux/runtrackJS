$("#toggle").click(function() {
    $("#texte").fadeToggle();

    if ($("#texte").is(":visible")) {
        $("#toggle").text("Cacher la citation");
    } else {
        $("#toggle").text("Afficher la citation");
    }
});