$("#search").click(function() {
    let battletag = $("#battletag").val().split("#");
    let url = "https://ow-api.com/v1/stats/pc/asia/" +
                battletag[0] + "-" + battletag[1] + "/profile";
    $.ajax({
        url: url,
        type: "GET",
        success: function(result) {
            result = JSON.parse(result);
        }
    });
});
