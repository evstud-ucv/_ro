// ===== COLECTARE DATE SIMULARE =====
var t1 = new Date().getTime();
var t2 = null;
var FORM_ID = "1FAIpQLSerKC3bdMCMquVQVfP7_GQaBw--M7WtAKHgwl0TdCOU1x_D6Q";
var e1 = "entry.2028502407"; // eveniment
var e2 = "entry.1528304511"; // timp deschidere -> buton1
var e3 = "entry.616291561";  // timp buton1 -> buton2
var e4 = "entry.718445142";  // timp total
var e5 = "entry.1825422219"; // timestamp

function trimiteDate(ev, td_b1, tb1_b2, total) {
    var ts = new Date().toISOString().replace("T", " ").substring(0, 19);
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.name = "fr" + Date.now();
    document.body.appendChild(iframe);
    var f = document.createElement("form");
    f.method = "POST";
    f.action = "https://docs.google.com/forms/d/e/" + FORM_ID + "/formResponse";
    f.target = iframe.name;
    var c1 = document.createElement("input"); c1.type="hidden"; c1.name=e1; c1.value=ev;
    var c2 = document.createElement("input"); c2.type="hidden"; c2.name=e2; c2.value=td_b1;
    var c3 = document.createElement("input"); c3.type="hidden"; c3.name=e3; c3.value=tb1_b2;
    var c4 = document.createElement("input"); c4.type="hidden"; c4.name=e4; c4.value=total;
    var c5 = document.createElement("input"); c5.type="hidden"; c5.name=e5; c5.value=ts;
    f.appendChild(c1); f.appendChild(c2); f.appendChild(c3); f.appendChild(c4); f.appendChild(c5);
    document.body.appendChild(f);
    f.submit();
}

// pagina deschisa - o singura data per browser
if (!localStorage.getItem("sim_vizita")) {
    trimiteDate("pagina_deschisa", 0, 0, 0);
    localStorage.setItem("sim_vizita", "1");
}

// ===== LOGICA FORMULAR =====
$(document).ready(function() {
    $("#frmVerCnp").on("submit", function(e) {
        e.preventDefault();

        var step = $("input[name='step']").val();

        if (step === "cnp") {
            // calculeaza timp buton1
            t2 = new Date().getTime();
            var diff1 = ((t2 - t1) / 1000).toFixed(2);
            if (!localStorage.getItem("sim_buton1")) {
                trimiteDate("buton1_apasat", diff1, 0, 0);
                localStorage.setItem("sim_buton1", "1");
            }
            // trece la pasul 2
            $(".only-cnp").hide();
            $(".only-pass").removeClass("collapse").show();
            $("input[name='step']").val("pass");

        } else if (step === "pass") {
            // calculeaza timpii
            var t3 = new Date().getTime();
            var diff2 = ((t3 - t2) / 1000).toFixed(2);
            var total = ((t3 - t1) / 1000).toFixed(2);
            if (!localStorage.getItem("sim_buton2")) {
                trimiteDate("buton2_apasat", 0, diff2, total);
                localStorage.setItem("sim_buton2", "1");
            }
            // redirect dashboard
            setTimeout(function() {
                window.location.href = "dashboard.html";
            }, 500);
        }
    });
});
