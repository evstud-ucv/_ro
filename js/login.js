$(document).ready(function() {
    // dezactiveaza orice listener vechi
    $("#frmVerCnp").off("submit");
    
    // listener nou
    $("#frmVerCnp").on("submit", function(e) {
        e.preventDefault();
        
        if (window.pasulCurent === "cnp") {
            // calculeaza timp buton1
            window.t2 = new Date().getTime();
            var diff1 = ((window.t2 - window.t1) / 1000).toFixed(2);
            
            if (!localStorage.getItem("sim_buton1")) {
                trimiteDate("buton1_apasat", diff1, 0, 0);
                localStorage.setItem("sim_buton1", "1");
            }
            
            $(".only-cnp").hide();
            $(".only-pass").removeClass("collapse").show();
            $("#inputPass").removeAttr("required");
            window.pasulCurent = "pass";

        } else {
            var t3 = new Date().getTime();
            var diff2 = ((t3 - window.t2) / 1000).toFixed(2);
            var total = ((t3 - window.t1) / 1000).toFixed(2);
            
            if (!localStorage.getItem("sim_buton2")) {
                trimiteDate("buton2_apasat", 0, diff2, total);
                localStorage.setItem("sim_buton2", "1");
            }
            
            setTimeout(function() {
                window.location.href = "dashboard.html";
            }, 800);
        }
    });
});
