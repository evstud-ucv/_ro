var pas = "cnp";

$(document).ready(function() {
    $("#frmVerCnp").off("submit").on("submit", function(e) {
        e.preventDefault();
        
        if (pas === "cnp") {
            $(".only-cnp").hide();
            $(".only-pass").removeClass("collapse").show();
            $("#inputPass").prop("required", false);
            pas = "pass";
        } else {
            window.location.href = "dashboard.html";
        }
    });
});
