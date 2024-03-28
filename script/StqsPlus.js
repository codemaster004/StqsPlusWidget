function getColors(color1, color2, precent) {
    let colors = [];
    for (let i = 0; i < color1.length; i++) {
        colors.push(color1[i] + (color2[i] - color1[i]) * precent);
    }
    return colors;
}

window.onload=function() {
    document.body.classList.add('dark');

    let errorDiv = document.getElementById("error");
    if (errorDiv.innerHTML === "") {
        errorDiv.style.display = "none";
    }

    let gradientColors = [[237,104,96], [155,60,185], [78,166,153]]
    document.querySelectorAll("td").forEach((element) => {
        if (element.classList.length > 0 && element.classList[0].includes("score")) {
            let aScore = element.querySelector("a")
            if (aScore === null) {
                return;
            }
            // aScore.innerHTML = `${Math.round(Math.random() * 100)}.00%`;
            let score = aScore.innerHTML;
            let precent = parseFloat(score.trim()) / 100;
            console.log(precent);
            if (precent >= 0.5) {
                precent -= 0.5;
                precent *= 2;
                let colors = getColors(gradientColors[1], gradientColors[2], precent);
                element.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
            } else {
                precent *= 2;
                let colors = getColors(gradientColors[0], gradientColors[1], precent);
                element.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
            }

        }
    })
}
