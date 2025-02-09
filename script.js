document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const warning = document.getElementById("warning");
    const maxLength = 200;

    textarea.addEventListener("input", function () {
        let currentLength = textarea.value.length;
        charCount.textContent = `${currentLength}/${maxLength} characters`;

        if (currentLength >= maxLength) {
            warning.classList.remove("hidden");
        } else {
            warning.classList.add("hidden");
        }
    });
});
