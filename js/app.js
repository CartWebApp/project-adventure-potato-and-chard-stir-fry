document.addEventListener("DOMContentLoaded", function () {
    const moreInfoBtn = document.getElementById("more-info");
    const extraInfo = document.getElementById("extra-info");

    moreInfoBtn.addEventListener("click", function () {
        extraInfo.classList.toggle("hidden");
    });
});
