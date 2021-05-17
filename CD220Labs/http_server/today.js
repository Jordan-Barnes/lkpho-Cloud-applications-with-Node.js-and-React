module.exports.getDate = function getDate() {
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    return new Date(aestTime);
}
