$(document).ready(function() {
    //sorting function

    $(function () {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });

//animation function
    $(function () {
        // run the currently selected effect
        function runEffect() {
            // get effect type from
            var selectedEffect = $("#effectTypes").val();

            // Most effect types need no options passed by default
            var options = {};
            // some effects have required parameters
            if (selectedEffect === "scale") {
                options = {percent: 50};
            } else if (selectedEffect === "size") {
                options = {to: {width: 200, height: 60}};
            }

            // Run the effect
            $("#effect").toggle(selectedEffect, options, 500);
        };

        // Set effect from select menu value
        $("#button").on("click", function () {
            runEffect();
        });
    });

});