
function getCompleteStats() {
    let battletag = $("#battletag").val().split("#");

    if (!battletag[0] || !battletag[1]) {
        alert("잘못된 배틀태그 입력입니다.");
        return;
    }
    let url = getCompleteStatsUrl(battletag[0], battletag[1]);

    $.ajax({
        url: url,
        type: "GET",
        success: function(result) {
            console.log(result);
        }
    });
}

$("#search").click(getCompleteStats);

$(document).keypress(function(event) {
    if (event.which === 13) {
        event.preventDefault();
        getCompleteStats();
    }
})
