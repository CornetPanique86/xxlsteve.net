const settings = {
    isHD: false,
    merge3DLayer: false
};
let baseSkin;
let canvas;


function cardboardify() {
    if (!baseSkin) return;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(baseSkin, 0, 0);

    // Merge 32x16 at 32, 0 to 0, 0
    if (settings.merge3DLayer) {
        // Extract the pixels from the 3D layer (32x16) starting at (32,0)
        const imageData3D = ctx.getImageData(32, 0, 32, 16);

        // Extract the pixels from the 2D layer (32x16) starting at (0,0)
        const imageData2D = ctx.getImageData(0, 0, 32, 16);

        // Merge the two sets of pixels
        for (let y = 0; y < 16; y++) {
            for (let x = 0; x < 32; x++) {
                const index = (y * 32 + x) * 4;

                // Merge the pixels by copying the RGBA values from the 3D layer to the 2D layer
                imageData2D.data[index] = imageData3D.data[index];
                imageData2D.data[index + 1] = imageData3D.data[index + 1];
                imageData2D.data[index + 2] = imageData3D.data[index + 2];
                imageData2D.data[index + 3] = imageData3D.data[index + 3];
            }
        }

        // Put the merged pixels back onto the canvas
        ctx.putImageData(imageData2D, 0, 0);
    }

    // Move 32x16 at 0, 0 to 32, 0
    const moveArea = ctx.getImageData(0, 0, 32, 16);
    // Clear the area at 0,0 with a size of 32x16
    ctx.clearRect(0, 0, 32, 16);
    // Put the extracted pixels to the position 32,0
    ctx.putImageData(moveArea, 32, 0);

    // Load the overlay image
    const overlayImg = new Image();
    overlayImg.src = "/cardboard_template.png";

    overlayImg.onload = function() {
        ctx.drawImage(overlayImg, 0, 0);
    }
}

window.addEventListener("load", () => {
    canvas = document.getElementById("2DpreviewSection");

    document.getElementById("uploadFile__fileBtn").addEventListener("change", e => {
        if (!e.target.files[0]) return;
        const file = e.target.files[0];
        console.log(e.target.files);

        const reader = new FileReader();

        reader.onload = event => {
            const img = new Image();
            img.onload = function() {
                const resolution = { width: this.width, height: this.height };
                if ((resolution.width === 64) && (resolution.height === 64)) {
                    settings.isHD = false;
                    baseSkin = img;
                    cardboardify();
                } else if ((resolution.width === 128) && (resolution.height === 128)) {
                    settings.isHD = true;
                    baseSkin = img;
                    cardboardify();
                } else {
                    customAlert("Incorrect image resolution! It can either be 64x64 or 128x128", "#cc0000");
                    return;
                }
            }
            img.src = event.target.result;
        };

        reader.readAsDataURL(file);


        document.getElementById("uploadFile__chosenFile").textContent = file.name;
    });

    document.getElementById("merge3DLayer").addEventListener("click", () => {
        if (document.getElementById("merge3DLayer").checked) {
            settings.merge3DLayer = true;
            cardboardify();
        } else {
            settings.merge3DLayer = false;
            cardboardify();
        }
    });
});