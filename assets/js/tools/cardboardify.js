window.addEventListener("load", () => {
    document.getElementById("uploadFile__fileBtn").addEventListener("change", e => {
        if (!e.target.files[0]) return;
        const file = e.target.files[0];
        console.log(e.target.files);

        const reader = new FileReader();

        reader.onload = event => {
            const img = new Image();
            img.onload = function() {
                const resolution = { width: this.width, height: this.height };
                console.log('Resolution:', resolution);
            }
            img.src = event.target.result;
        };

        reader.readAsDataURL(file);


        document.getElementById("uploadFile__chosenFile").textContent = file.name;
    });
});