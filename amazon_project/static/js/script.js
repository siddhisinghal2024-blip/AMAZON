document.addEventListener("DOMContentLoaded", function () {

    /* ===== SIDE MENU (All button) ===== */
    const allBtn   = document.getElementById("allBtn");
    const sideMenu = document.getElementById("sideMenu");
    const overlay  = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    allBtn.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("open");
    });

    closeBtn.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        overlay.classList.remove("open");
    });

    overlay.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        overlay.classList.remove("open");
    });


    /* ===== CAROUSEL ===== */
    const track   = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (track) {
        nextBtn.addEventListener("click", function () {
            track.scrollBy({ left: 550, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", function () {
            track.scrollBy({ left: -550, behavior: "smooth" });
        });
    }

});
