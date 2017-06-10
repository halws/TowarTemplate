$(function() {
    var myJson = {
        "gunmetal": {
            "color": "Gunmetal",
            "slider1": [
                "images/gunmetal-1.png",
                "images/gunmetal-2.png",
                "images/gunmetal-3.png"
            ]
        },
        "softGold": {
            "color": "Soft Gold",
            "slider2": [
                "images/soft-gold-1.png",
                "images/soft-gold-2.png",
                "images/soft-gold-3.png"
            ]

        }
    };
    (function doHandlebars() {
    var template = $("#handlebars-slider").html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(myJson);
    $(".slider .inner1").append(html);
        
    })();
    $(".rslides").responsiveSlides({
        auto: false,
        pager: true
    });
    var radioVal = "";
    var colorRadio = document.querySelectorAll(".colorRadio");
    for (var i = 0; i < colorRadio.length; i++) {
        colorRadio[i].addEventListener("click", function(e) {
            if (this.checked) {
                consoleVal(this.value);
            }
        });
    }

    function consoleVal(radioVal) {

        if (radioVal === "Soft Gold") {
            $(".rslides li img").each(function(index, el) {
                el.setAttribute("src", myJson.softGold.slider2[index]);
            });
        } else {
            $(".rslides li img").each(function(index, el) {
                el.setAttribute("src", myJson.gunmetal.slider1[index]);
            });
        }

    }
});
