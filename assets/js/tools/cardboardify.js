const settings = {
    isHD: false,
    merge3DLayer: false,
    outline: 0 // Black
};
const layer2DPos = [
    [ // isHD = FALSE
        { // HEAD
            ori: [ 8, 8, 8, 8 ],
            dest: [ 40, 8 ]
        },
        { // CHEST
            ori: [ 20, 20, 8, 12 ],
            dest: [ 20, 36 ]
        },
        { // RIGHT LEG
            ori: [ 4, 20, 4, 12 ],
            dest: [ 4, 36 ]
        },
        { // LEFT LEG
            ori: [ 20, 52, 4, 12 ],
            dest: [ 4, 52 ]
        },
        { // RIGHT ARM
            ori: [ 44, 20, 4, 12 ],
            dest: [ 44, 36 ]
        },
        { // LEFT ARM
            ori: [ 36, 52, 4, 12 ],
            dest: [ 52, 52 ]
        }
    ],
    [ // isHD = TRUE
        { // HEAD
            ori: [
                16, // pos x
                16, // pos y
                16, // width
                16  // height
            ],
            dest: [
                80, // pos x
                16  // pos y
            ]
        },
        { // CHEST
            ori: [ 40, 40, 16, 24 ],
            dest: [ 40, 72 ]
        },
        { // RIGHT LEG
            ori: [ 8, 40, 8, 24 ],
            dest: [ 8, 72 ]
        },
        { // LEFT LEG
            ori: [ 40, 104, 8, 24 ],
            dest: [ 8, 104 ]
        },
        { // RIGHT ARM
            ori: [ 88, 40, 8, 24 ],
            dest: [ 88, 72 ]
        },
        { // LEFT ARM
            ori: [ 72, 104, 8, 24 ],
            dest: [ 104, 104 ]
        }
    ]
];
let skinName = "skin";
let baseSkin;
let canvas;
let skinViewer;


function cardboardify() {
    if (!baseSkin) return;
    const layerPos = settings.isHD ? layer2DPos[1] : layer2DPos[0];
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseSkin, 0, 0);

    // Merge 16x16 at 80, 16 to 16, 16
    if (settings.merge3DLayer) {
        for (const part of layerPos) {
            // Extract the pixels from the 3D layer (16x16) starting at (80,16)
            const imageData3D = ctx.getImageData(part.dest[0], part.dest[1], part.ori[2], part.ori[3]);

            // Extract the pixels from the 2D layer (16x16) starting at (16, 16)
            const imageData2D = ctx.getImageData(part.ori[0], part.ori[1], part.ori[2], part.ori[3]);

            // Merge the two sets of pixels
            for (let y = 0; y < part.ori[3]; y++) {
                for (let x = 0; x < part.ori[2]; x++) {
                    const index = (y * part.ori[3] + x) * 4;

                    // Merge the pixels by copying the RGBA values from the 3D layer to the 2D layer
                    if (imageData3D.data[index + 3] > 0) { // Only if not transparent
                        imageData2D.data[index] = imageData3D.data[index];         // R
                        imageData2D.data[index + 1] = imageData3D.data[index + 1]; // G
                        imageData2D.data[index + 2] = imageData3D.data[index + 2]; // B
                        imageData2D.data[index + 3] = imageData3D.data[index + 3]; // A
                    }
                }
            }

            // Put the merged pixels back onto the canvas
            ctx.putImageData(imageData2D, part.ori[0], part.ori[1]);
        }
    }
    const moveAreas = [];
    for (const part of layerPos) {
        moveAreas.push(ctx.getImageData(part.ori[0], part.ori[1], part.ori[2], part.ori[3]));
    }

    // Clear the area at 64, 0 with a size of 64x32
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Put the extracted pixels to the position 80,16
    for (let i=0; i<layerPos.length; i++) {
        ctx.putImageData(moveAreas[i], layerPos[i].dest[0], layerPos[i].dest[1]);
    }

    // Load the overlay image
    const overlayImg = new Image();
    if (settings.isHD) {
        overlayImg.src = "/images/cardboard_template.png";
    } else if (settings.outline === 0) {
        overlayImg.src = "/images/cardboard_template_java_black.png";
    } else {
        overlayImg.src = "/images/cardboard_template_java_white.png";
    }

    overlayImg.onload = function() {
        ctx.drawImage(overlayImg, 0, 0);
        updateSkinViewer();
    }
}

function updateSkinViewer() {
    skinViewer.loadSkin(canvas.toDataURL('image/png'));
}

function downloadSkin() {
    const link = document.createElement('a');
    link.download = skinName + '_cardboardified.png';
    link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    link.click();
}

window.addEventListener("load", () => {
    canvas = document.getElementById("preview2DSectionCanvas");

    document.getElementById("uploadFile__fileBtn").addEventListener("change", e => {
        if (!e.target.files[0]) return;
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onload = event => {
            const img = new Image();
            img.onload = function() {
                const resolution = { width: this.width, height: this.height };
                if ((resolution.width === 64) && (resolution.height === 64)) {
                    updateHD(false);
                    baseSkin = img;
                    cardboardify();
                } else if ((resolution.width === 128) && (resolution.height === 128)) {
                    updateHD(true);
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
        skinName = file.name.replace(".png", "");
    });

    document.getElementById("searchUsername__btn").addEventListener("click", () => {
        checkJavaUsername();
    });
    document.getElementById("searchUsername__input").addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            checkJavaUsername();
        }
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

    document.getElementById("skinIsHD").addEventListener("click", () => { return false });

    document.getElementById("outlineBtn").addEventListener("click", () => {
        if (document.getElementById("outlineBtn").checked) {
            settings.outline = 1;
            cardboardify();
        } else {
            settings.outline = 0;
            cardboardify();
        }
    });

    document.getElementById("iconScaleRange").addEventListener("input", elm => {
        changeIconScale(elm.target.value);
    });
    canvas.addEventListener("wheel", changeIconScaleWheel, { passive: false });

    document.getElementById("downloadBtn").addEventListener("click", () => {
        downloadSkin();
    });



    // Initial skin
    skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("skin_container"),
        width: 200,
        height: 350,
        skin: "/images/steve_skin.png",
        zoom: 0.6
    });

    const img = new Image();
    img.onload = function() {
        const resolution = { width: this.width, height: this.height };
        if ((resolution.width === 64) && (resolution.height === 64)) {
            updateHD(false);
            baseSkin = img;
            cardboardify();
        }
    }
    img.src = "/images/steve_skin.png";
});

function checkJavaUsername() {
    const username = document.getElementById("searchUsername__input").value;
    if (username.length == 0) return;
    if (username.length > 16) {
        customAlert("Must be a Java username under 16 characters long!", "#cc0000");
        return;
    }
    const img = new Image();
    img.onload = function() {
        if ((this.width === 64) && (this.height === 64)) {
            updateHD(false);
            baseSkin = img;
            cardboardify();
        }
    }
    img.src = "https://mineskin.eu/skin/" + username;
    img.crossOrigin = "Anonymous";

    skinName = username;
}

function updateHD(isHD) {
    if (isHD) {
        settings.isHD = true;
        document.getElementById("skinIsHD").removeAttribute("checked");
        document.getElementById("outlineBtn").style.display = "none";
        document.querySelector("label[for=outlineBtn]").style.display = "none";
        canvas.width = 128;
        canvas.height = 128;
    } else {
        settings.isHD = false;
        document.getElementById("skinIsHD").setAttribute("checked", "true");
        document.getElementById("outlineBtn").style.display = "inline";
        document.querySelector("label[for=outlineBtn]").style.display = "inline-block";
        canvas.width = 64;
        canvas.height = 64;
    }
}

let scale = 1;
function changeIconScaleWheel(event) {
    event.preventDefault();
    
    event.deltaY >= 0 ? scale -= 0.1 : scale += 0.1;
    scale = Math.min(Math.max(1, scale), 8);
    canvas.style.transform = `scale(${scale}) translate(-20%, -10%)`;
    document.getElementById("iconScaleRangeLabel").innerHTML = "Scale: " + scale.toString().substring(0, 3);
    document.getElementById("iconScaleRange").value = scale;
}
function changeIconScale(value) {
    canvas.style.transform = `scale(${value}) translate(-20%, -10%)`;
    document.getElementById("iconScaleRangeLabel").innerHTML = "Scale: " + value;
}
