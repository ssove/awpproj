/*
 * Functions related to OW API's url are implemented here.
 * In functions, "nickname" means an user's name,
 * and "number" means a number followed by # (hashtag).
 * For example, a nickname of "ssove#3749" is "ssove",
 * and number is "3749".
 */

 function getCompleteStatsUrl(nickname, number) {
     return "https://ow-api.com/v1/stats/pc/asia/" +
                 nickname + "-" + number + "/complete";
 }

 function getProfileUrl(nickname, number) {
     return "https://ow-api.com/v1/stats/pc/asia/" +
                 nickname + "-" + number + "/profile";
 }
