// tạo chức năng cho modal
const btnsMain = document.querySelectorAll(".section-btn-main");
const modalElement = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-btn");

btnsMain.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        modalElement.style.display = "flex";
    });
});

btnCloseModal.addEventListener("click", (e) => {
    modalElement.style.display = "none";
});

modalElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
        modalElement.style.display = "none";
    }
});



