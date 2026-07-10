const btn = document.getElementById("btn");
const first = document.getElementById("first");
const second = document.getElementById("second");
const video = document.getElementById("bgvideo");

btn.addEventListener("click", () => {

    // দ্বিতীয় ভিডিও চালু হবে
    video.src = "video/2.mp4";
    video.load();
    video.play();

    // প্রথম পেজ লুকাবে
    first.style.display = "none";

    // দ্বিতীয় পেজ দেখাবে
    second.style.display = "flex";

});
