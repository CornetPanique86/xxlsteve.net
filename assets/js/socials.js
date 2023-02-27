var canCloseDetailsPopup = true;

window.onload = () => {
    document.addEventListener("click", e => {
        if (e.target.classList.contains("infoBtn")) {
            e.preventDefault();
            moreDetails(e);
        }
        if (canCloseDetailsPopup && !e.target.classList.contains("detailsElm")) {
            closeDetails();
        }
    });
    // document.querySelectorAll(".infoBtn").forEach((elm) => {
    //     elm.addEventListener("click", moreDetails(e));
    // });
}
function moreDetails(event) {
    canCloseDetailsPopup = false;
    const detailsPopup = document.getElementById("detailsPopup");
    let header = "Loading";
    let img = { src: "", alt: "" }
    let desc = "";
    let ahref = "/";
    let link = "Join";

    switch (event.target.id) {
        case "infoYtEn":
            header = "XXL Steve";
            img.src = "https://media.discordapp.net/attachments/690266197136375838/1028261120248664184/unknown.png?width=472&height=472";
            img.alt = "My youtube profile picture"
            desc = "Welcome to my English YouTube channel, where I post about pretty much anything as long as it's Minecraft. Tho I do mostly MCBE content.";
            ahref = "https://youtube.com/@XXLSteve";
            link = "Start watching!";
            break;
        case "infoDiscEn":
            header = "XXL Steve (aka CornetPanique86)";
            img.src = "https://cdn.discordapp.com/icons/690256802536751105/8ef794501a4389d2a0f5b021d465636c.webp?size=512";
            img.alt = "My discord server logo"
            desc = "Welcome to my English Discord server! Here we talk about random stuff 🤷‍♂️";
            ahref = "https://discord.gg/dJJyryc";
            link = "Join the server!";
            break;

        case "infoYtFr":
            header = "XXL Steve Français";
            img.src = "https://cdn.discordapp.com/icons/955139831900557312/4b061b45256ff2c8c894c81026248b89.webp?size=512";
            img.alt = "Le logo de ma chaîne"
            desc = "Bienvenue sur ma chaîne YouTube française ! J'upload plus rarement que sur ma chaîne anglaise, et des fois la même vidéo mais traduite en français. Mais je fais surtout des vidéos d'events !";
            ahref = "https://www.youtube.com/@XXLSteveFR";
            link = "Jettes-y un coup d'oeil !";
            break;
        case "infoDiscFr":
            header = "XXL Steve Français";
            img.src = "https://cdn.discordapp.com/icons/955139831900557312/4b061b45256ff2c8c894c81026248b89.webp?size=512";
            img.alt = "Le logo de mon serveur discord"
            desc = "Bienvenue sur mon serveur Discord français ! Tenez vous au courant de mes dernières vidéos et parlez de tout et n'importe quoi :)";
            ahref = "https://discord.gg/qPcDsAUZyv";
            link = "Rejoins le serveur !";
            break;
        case "infoDiscEvents":
            header = "Events Minecraft Français";
            img.src = "https://cdn.discordapp.com/icons/1013554125348290611/f9b2ee96ca08d1422ad9334739bacbcf.webp?size=512";
            img.alt = "Le logo de mon serveur discord"
            desc = "Ce serveur permet de se tenir au courant sur plein d'events de vos youtubeurs préférés ! Fuze III, Azpaz, heroptix...";
            ahref = "https://discord.gg/nsgXbM7sxz";
            link = "Rejoins le serveur !";
            break;
    }
    const headerElm = document.getElementById("detailsPopup__header");
    headerElm.querySelector("img").src = img.src;
    headerElm.querySelector("img").alt = img.alt;
    headerElm.querySelector("h3").innerHTML = header;

    document.getElementById("detailsPopup__desc").innerHTML = desc;
    detailsPopup.querySelector("a").href = ahref;
    document.getElementById("detailsPopup__linkText").innerHTML = link;

    detailsPopup.style.display = "flex";
    detailsPopup.classList.remove("hidden");
    setTimeout(() => canCloseDetailsPopup = true, 520);
}
function closeDetails() {
    const detailsPopup = document.getElementById("detailsPopup");
    detailsPopup.classList.add("hidden");
    setTimeout(() => {
        detailsPopup.style.display = "none";
    }, 520);
}