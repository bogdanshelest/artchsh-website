export const projects = () => {
    let body = document.getElementsByTagName("body");
    setTimeout(() => {
        $("#content-changer").html(`<div id="cards" class="card__row margin-top animation-fade-in"></div>`)//load("projects/index.html");
        $(body).css("align-items", "unset");
        $("#content-changer").css("box-shadow", "none")
        document.getElementById("content-changer").style.border = 'none';

        function readTextFile(file, callback) {
            let rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }

        let canvas = document.getElementById('canvas')
        let context = canvas.getContext("2d");

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        readTextFile("../projects.json", function (text) {
            let data = JSON.parse(text);
            let projects = data.projects
            projects.forEach(element => {
                document.getElementById("cards").innerHTML += `
                <div class="card">
                    <img src="${element.img}" alt="${element.img}">
                    <div class="card__title">
                        <h1>${element.title}</h1>
                    </div>
                    <div class="card__content">
                        <p>${element.description}</p>
                    </div>
                    <button class="card__button" href="${element.link}">Check</button>
                </div>
                `
            });
        });

    }, 2500);
    document.getElementById("content-changer").classList.add('animation-index');
};