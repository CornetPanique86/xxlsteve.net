const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(";")
            .map(cookie => cookie.split("="))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`
    }
}

//const storageType = cookieStorage;
const consentPropName = "xxlsteve";

const shouldShowPopup = () => { return cookieStorage.getItem(consentPropName) }
const saveToStorage = (value) => { if (shouldShowPopup() != "0") cookieStorage.setItem(consentPropName, value) }

window.onload = () => {
    const body = document.body;
    const consentPopup = document.getElementById("cookie-consent-popup");
    const acceptBtn = document.getElementById("cookie-accept");

    const acceptFn = event => {
        saveToStorage(1);
        consentPopup.classList.add("hidden");
    }

    acceptBtn.addEventListener("click", acceptFn);

    switch (shouldShowPopup()) {
        case "0":
            break;
        case "3":
            body.setAttribute("data-theme", "dark");
            break;
        case "2":
            body.setAttribute("data-theme", "light");
            break;
        case "1":
            body.setAttribute("data-theme", "auto");
            break;
        default:
            setTimeout(() => {
                consentPopup.classList.remove("hidden");
            }, 500);
            break;
    }
}

function themeSettings() {
    const body = document.body;
    const theme = document.getElementById("themeToggler").value;

    switch(theme) {
        case "light":
            body.setAttribute("data-theme", "light");
            saveToStorage(2);
            break;
        case "dark":
            body.setAttribute("data-theme", "dark");
            saveToStorage(3);
            break;
        case "auto":
        default:
            body.setAttribute("data-theme", "auto");
            saveToStorage(1);
            break;
    }
}