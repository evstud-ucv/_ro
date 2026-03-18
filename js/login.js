$(document).ready(function() {
    var t1 = new Date().getTime();
    var t2 = null;
    var pas = "cnp";

    $("#frmVerCnp").off("submit").on("submit", function(e) {
        e.preventDefault();

        if (pas === "cnp") {
            t2 = new Date().getTime();
            $(".only-cnp").hide();
            $(".only-pass").removeClass("collapse").show();
            $("#inputPass").prop("required", false);
            pas = "pass";

        } else {
            setTimeout(function() {
                window.location.href = "dashboard.html";
            }, 500);
        }
    });
});
