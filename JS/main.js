$(document).ready(

    //function to sort elements by h3
    // function sortingElements(){
    //     var el = $(".searchable h3");
    //     el.sort();

    // },

    function buttonClick() {
        $("#definition").click(function () {
            $(".searchable").removeClass("d-none");
            $(".title").removeClass("d-none");
            $(".definition").removeClass("d-none");
            $(".sorts-def").addClass("d-none");
            $(".tree-def").addClass("d-none");
            $(".sample-code").addClass("d-none");
        
            //transition
            $("html").animate({
                scrollTop: $(".title").offset().top}, 1000);

        });

        $("#sample").click(function () {
            $(".searchable").removeClass("d-none");
            $(".title").removeClass("d-none");
            $(".sample-code").removeClass("d-none");
            $(".definition").addClass("d-none");
            $(".sorts-def").addClass("d-none");
            $(".tree-def").addClass("d-none");

            //transition
            $("html").animate({
                scrollTop: $(".title").offset().top},
                'slow');
        });
        $("#sorts").click(function () {
            $(".searchable").removeClass("d-none");
            $(".title").removeClass("d-none");
            $(".sorts-def").removeClass("d-none");
            $(".definition").addClass("d-none");
            $(".sample-code").addClass("d-none");
            $(".tree-def").addClass("d-none");

            //transition
            $("html").animate({
                scrollTop: $(".title").offset().top},
                'slow');
        });
        $("#tree").click(function () {
            $(".searchable").removeClass("d-none");
            $(".title").removeClass("d-none");
            $(".tree-def").removeClass("d-none");
            $(".sorts-def").addClass("d-none");
            $(".definition").addClass("d-none");
            $(".sample-code").addClass("d-none");

            //transition
            $("html").animate({
                scrollTop: $(".title").offset().top},
                'slow');
        });
    },

    // Function to implement search
    $(function () {

        // when the user type something
        $("#search").keyup(function () {

            // makes the categories block disappear
            $(".categories-block").addClass("d-none");

            // gets what the user typed and stored inside val
            var val = $(this)
                .val()
                .toLowerCase();

            // add class d-none to all the divs
            $(".searchable").addClass("d-none");

            $(".searchable h3").each(function () {

                // goes throught the divs and gets the text from the h3
                var text = $(this)
                    .text()
                    .toLowerCase();
                
                // searchs through the text to find the val(user input) if returns -1, cannot find
                if (text.indexOf(val) != -1) {
                    $(".mt-5").removeClass("d-none");
                    $(this)
                        .parent()
                        .removeClass("d-none");
                } 
            });

            if($("#search").val().length == 0){
                $(".categories-block").removeClass("d-none");
                $(".searchable").addClass("d-none");
                $(".title").addClass("d-none");
            }
        });
    })
);
