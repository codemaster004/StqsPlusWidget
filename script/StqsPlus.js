window.onload=function() {
    document.body.classList.add('dark');

    let errorDiv = document.getElementById("error");
    if (errorDiv.innerHTML === "") {
        errorDiv.style.display = "none";
    }
}
