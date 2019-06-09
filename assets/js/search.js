$("#search").click(function() {
    let battletag = $("#battletag").val().split("#");
    let url = getCompleteStatsUrl(battletag[0], battletag[1]);
    $.ajax({
        url: url,
        type: "GET",
        success: function(result) {
            console.log(typeof result);
        }
    });
});
