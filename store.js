
const initSlider = () => {
    const previewBox = document.querySelector(".preview .preview-box");
    const slideButtons = document.querySelectorAll(".slider .slide-buttons");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "btn-prev" ? -1 : 1;
            const scrollAmount = previewBox.clientWidth * direction;
            previewBox.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
} 
