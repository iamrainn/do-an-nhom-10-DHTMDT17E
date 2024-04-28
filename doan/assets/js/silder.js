// hero silder
var mySwiper = new Swiper(".swiper-container", {
    // Tuỳ chọn
    autoplay: {
        delay: 4000,
    },
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
});

// silder dự án tiêu biểu
var silderTypicalProject = new Swiper(".swiper-typical-project-container", {
    // Tuỳ chọn
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
});

// silder cảm nhận của khách hàng

var silderPartnerservice = new Swiper(
    ".section-emtion-client-silder-container",
    {
        // Tuỳ chọn
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        slidesPerView: 1,
        loop: true,
    }
);

// silder ĐỐI TÁC ĐỊA ĐIỂM CỦA VOWS AND DREAM

var silderPartnerAddress = new Swiper(
    ".section-partner-dress-vd-swiper-container",
    {
        // Tuỳ chọn
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
    }
);

// silder ĐỐI TÁC DỊCH VỤ CỦA VOWS & DREAM

var silderPartnerservice = new Swiper(
    ".section-partner-sevice-vd-swiper-container",
    {
        // Tuỳ chọn
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
    }
);
