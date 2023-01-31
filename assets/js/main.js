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
    document.documentElement.classList.remove("noScroll");
    setTimeout(() => {
        consentPopup.style.display = "none";
    }, 820);
}

window.onload = () => {
    const consentPopup = document.getElementById("page-blur");

    switch (shouldShowPopup()) {
        case "-1":
            changeTheme("auto");
            break;
        case "3":
            changeTheme("dark");
            break;
        case "2":
            changeTheme("light");
            break;
        case "1":
            changeTheme("auto");
            break;
        default:
            consentPopup.style.display = "block";
            document.documentElement.classList.add("noScroll");
            setTimeout(() => {
                consentPopup.classList.remove("hidden");
            }, 500);
            break;
    }

    // This doesn't work aiouhzaiudhzaiohu
    try {
      document.getElementById("image-popup-pageblock").addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
          closePageBlock("image-popup-pageblock");
        }
      });
    } catch { }
}

function themeSettings() {
    const theme = document.getElementById("themeToggler").value;

    switch(theme) {
        case "light":
            changeTheme("light");
            saveToStorage(2);
            break;
        case "dark":
            changeTheme("dark");
            saveToStorage(3);
            break;
        case "auto":
        default:
            changeTheme("auto");
            saveToStorage(1);
            break;
    }
}
function changeTheme(theme) {
  const body = document.body;
  body.setAttribute("data-theme", theme);
  // if (!(theme == "light" && document.getElementById("redbuilding1"))) 
  changeIndexBackground(theme);
  if (window.REMARK42) {
    if (theme == "light" || theme == "auto") {
      window.REMARK42.changeTheme("light");
    } else {
      window.REMARK42.changeTheme("dark");
    }
  }
  return;
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
  let elm = document.getElementById(id);
  elm.classList.add("hidden");
  setTimeout(() => {
    elm.style.display = "none";
  }, 520);
  document.documentElement.classList.remove("noScroll");
}

const openPageBlock = id => {
  let elm = document.getElementById(id);
  elm.style.display = "block";
  elm.classList.remove("hidden");
  document.documentElement.classList.remove("noScroll");
}

function customAlert(text) {
  const customAlert = document.getElementById("customAlert");
  customAlert.innerHTML = text;
  customAlert.style.display = "inline-block";
  customAlert.classList.add("slideIn");

  setTimeout(() => {
    customAlert.classList.add("slideOut");
    setTimeout(() => {
      customAlert.style.display = "none";
      customAlert.classList.remove("slideOut");
      customAlert.classList.remove("slideIn");
    }, 520);
  }, 3000);
}

// Image popup
function imagePopup(figure) {
  document.documentElement.classList.add("noScroll");
  if (figure.nodeName.toLowerCase() == "figure") {
    let image = figure.querySelector("img");
    imagePopupAddInfo(image);
  } else {
    imagePopupAddInfo(figure);
  }
  try {
    document.getElementById("image-popup__text").innerHTML = figure.querySelector("figcaption").innerHTML;
  } catch { }

  openPageBlock("image-popup-pageblock");
}

function imagePopupAddInfo(image) {
  document.getElementById("image-popup__image").src = image.getAttribute("src");
  document.getElementById("image-popup__download").href = image.getAttribute("src");
  document.getElementById("image-popup__download").title = "Download (" + image.getAttribute("src").split("/").pop() + ")";
  document.getElementById("image-popup__image").alt = image.getAttribute("alt");
}

// Nav bar hamburger icon for mobile devices
function showNavBar() {
  let topNav = document.querySelector(".top-nav");
  let topNavStyles = window.getComputedStyle(topNav);
  if (topNavStyles.display == "none") {
    topNav.setAttribute("opened", "true");
  } else {
    topNav.removeAttribute("opened");
  }
}