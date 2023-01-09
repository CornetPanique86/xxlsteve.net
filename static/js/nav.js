const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(";")
            .map(cookie => cookie.split("="))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value};Expires=${new Date(new Date().getTime()+15768000000).toGMTString()};Path=/`
    }
}

//const storageType = cookieStorage;
const consentPropName = "xxlsteve";

const shouldShowPopup = () => { return cookieStorage.getItem(consentPropName) }
const saveToStorage = (value) => { if (shouldShowPopup() != "-1") cookieStorage.setItem(consentPropName, value) }

function cookieAgreementFn (value) {
    saveToStorage(value);
    const consentPopup = document.getElementById("page-blur");
    consentPopup.classList.add("hidden");
    setTimeout(() => {
        consentPopup.style.display = "none";
    }, 820);
}

window.onload = () => {
    const body = document.body;
    const consentPopup = document.getElementById("page-blur");

    switch (shouldShowPopup()) {
        case "-1":
            changeIndexBackground("auto");
            break;
        case "3":
            body.setAttribute("data-theme", "dark");
            changeIndexBackground("dark");
            break;
        case "2":
            body.setAttribute("data-theme", "light");
            break;
        case "1":
            body.setAttribute("data-theme", "auto");
            changeIndexBackground("auto");
            break;
        default:
            consentPopup.style.display = "block";
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
            changeIndexBackground("light");
            saveToStorage(2);
            break;
        case "dark":
            body.setAttribute("data-theme", "dark");
            changeIndexBackground("dark");
            saveToStorage(3);
            break;
        case "auto":
        default:
            body.setAttribute("data-theme", "auto");
            changeIndexBackground("auto");
            saveToStorage(1);
            break;
    }
}

const setInnerHTML = (elm, html) => {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
        .forEach(attr => newScript.setAttribute(attr.name, attr.value));
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}

function changeIndexBackground(theme) {
    let parallax = document.getElementById("parallax");
    if (!parallax) {
        return;
    }
    switch (theme) {
        case "light":
            let parallaxLightInnerHTML = 
            `<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('ug')">About this background</button>
            <img src="/index/redbuilding01.png" id="redbuilding1" style="z-index: 5">
            <img src="/index/uglogo02.png" id="uglogo2" style="z-index: 4">
            <img src="/index/platform03.png" id="platform3" style="z-index: 3">
            <img src="/index/bgbuilds04.png" id="bgbuilds4" style="z-index: 2">
            <img src="/index/clouds05.png" id="clouds5" style="z-index: 1">
            <script>
            gsap.from("#redbuilding1", {
                scrollTrigger : {
                  scrub: true
                },
                y: 200
            });
            gsap.from("#uglogo2", {
              scrollTrigger : {
                scrub: true
              },
              y: 100
            });
            gsap.from("#platform3", {
              scrollTrigger : {
                scrub: true
              },
              y: 80
            });
            gsap.from("#bgbuilds4", {
              scrollTrigger : {
                scrub: true
              },
              y: 50
            });
            gsap.from("#parallax__aboutbg", {
                scrollTrigger : {
                  scrub: true
                },
                opacity: 0.5
            });
            </script>`;
            setInnerHTML(parallax, parallaxLightInnerHTML);
            break;
        case "dark":
            let parallaxDarkInnerHTML = 
            `<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('nc')">About this background</button>
            <img src="/index/ncwhitestarline01.png" id="redbuilding1" style="z-index: 3">
            <img src="/index/ncbuilding02.png" id="uglogo2" style="z-index: 2">
            <img src="/index/ncbg03.png" id="clouds5" style="z-index: 1">
            <script>
            gsap.from("#redbuilding1", {
                scrollTrigger : {
                  scrub: true
                },
                y: 180
              });
              gsap.from("#uglogo2", {
                scrollTrigger : {
                  scrub: true
                },
                y: 120
              });
              gsap.from("#parallax__aboutbg", {
                scrollTrigger : {
                  scrub: true
                },
                opacity: 0.5
              });
            </script>`;
            setInnerHTML(parallax, parallaxDarkInnerHTML);
            break;
        case "auto":
        default:
            if(!window.matchMedia) {
                return false;
            } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setInnerHTML(parallax, parallaxDarkInnerHTML);
            } else {
                setInnerHTML(parallax, parallaxLightInnerHTML);
            }
            break;
    }
}

const closePageBlock = id => {
    document.getElementById(id).style.display = "none";
    
}

// Image popup
function imagePopup(figure) {
  let image = figure.querySelector("img");
  document.getElementById("image-popup__image").src = image.getAttribute("src");
  document.getElementById("image-popup__download").href = image.getAttribute("src");
  document.getElementById("image-popup__download").title = "Download (" + image.getAttribute("src").split("/").pop() + ")";
  document.getElementById("image-popup__image").alt = image.getAttribute("alt");
  try {
    document.getElementById("image-popup__text").innerHTML = figure.querySelector("figcaption").innerHTML;
  } catch { }
  document.getElementById("image-popup-pageblock").style.display = "block";
}

document.getElementById("image-popup-pageblock").addEventListener("keyup", (e) => {
  if (document.getElementById("image-popup-pageblock").style.display == "block" && e.key == "Escape") closePageBlock();
});