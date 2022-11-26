var pixelSize = 16;
var brushColor;
interact(".rainbow-pixel-canvas")
    .draggable({
        max: Infinity,
        maxPerElement: Infinity,
        origin: "self",
        modifiers: [
            interact.modifiers.snap({
                // snap to the corners of a grid
                targets: [interact.snappers.grid({ x: pixelSize, y: pixelSize })],
            }),
        ],
        listeners: {
            // draw colored squares on move
            move: function (event) {
                var context = event.target.getContext("2d");

                // check for scheme-color
                let isDarkMode = localStorage.getItem("isDarkMode");
                if (isDarkMode == "true") {
                    brushColor = `#ffffff`;
                } else if (isDarkMode == "false") {
                    brushColor = `#000000`;
                }

                // set color based on drag angle and speed
                context.fillStyle = brushColor;

                // draw squares
                context.fillRect(
                    event.pageX - pixelSize / 2,
                    event.pageY - pixelSize / 2,
                    pixelSize,
                    pixelSize
                );
            },
        },
    })
    // clear the canvas on doubletap
    .on("doubletap", function (event) {
        var context = event.target.getContext("2d");

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        resizeCanvases();
    });

export default function resizeCanvases() {
    [].forEach.call(
        document.querySelectorAll(".rainbow-pixel-canvas"),
        function (canvas) {
            delete canvas.width;
            delete canvas.height;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    );
}

resizeCanvases();

// interact.js can also add DOM event listeners
interact(window).on("resize", resizeCanvases);
