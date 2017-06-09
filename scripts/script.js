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
    // consoleVal("Gunmetal");
    var template = $("#handlebars-slider").html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(myJson);
    $(".slider .inner1").append(html);
    $(".rslides").responsiveSlides({
        auto: false,
        pager: true
    });
    var radioVal = "";
    var colorRadio = document.querySelectorAll(".colorRadio");
    for (var i = 0; i < colorRadio.length; i++) {
        colorRadio[i].addEventListener("click", function(e) {
            if (this.checked) {
                // console.log(this.value);
                consoleVal(this.value);
                // return radioVal = this.value;
            }
        });
    }

    function consoleVal(radioVal) {

        if (radioVal === "Gunmetal") {

        } else {
            template = $("#handlebars-slider2").html();
            templateScript = Handlebars.compile(template);
            html = templateScript(myJson);
            $(".slider .inner1 .rslides").replaceWith(html);
//             $(document).on('click',this,function(){
//    alert( 'success' );
// });
            // doAnimation(jQuery, this, 0);
            
        }
        // Handlebars.registerHelper("SliderChooser", function(radioVal) {
        // });


    }
});
window.onload = function() {

};
