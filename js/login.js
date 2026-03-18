$(document).ready(function() {

    $("#frmVerCnp").on("submit", function(e) {
        e.preventDefault();

        var step = $("input[name='step']").val();

        if (step === "cnp") {
            // trece la pasul 2 - parola
            $(".only-cnp").hide();
            $(".only-pass").removeClass("collapse").show();
            $("input[name='step']").val("pass");

        } else if (step === "pass") {
            // orice parola -> dashboard
            window.location.href = "dashboard.html";
        }
    });

});
