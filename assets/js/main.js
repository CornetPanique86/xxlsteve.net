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

const consentPropertyName = "xxlsteve";

const shouldShowPopup = () => { return cookieStorage.getItem(consentPropertyName) }
const saveToStorage = (value) => { if (shouldShowPopup() != "-1") cookieStorage.setItem(consentPropertyName, value) }

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
    const theme = document.getElementById("themeToggler");
    const themeAttr = document.createAttribute("selected");

    switch (shouldShowPopup()) {
        case "-1":
            changeTheme("auto");
            break;
        case "3":
            changeTheme("dark");
            theme.querySelectorAll('[value="dark"]')[0].setAttributeNode(themeAttr);
            break;
        case "2":
            changeTheme("light");
            theme.querySelectorAll('[value="light"]')[0].setAttributeNode(themeAttr);
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

    document.querySelectorAll(".highlight").forEach((highlightDiv) => createCopyButton(highlightDiv));

    // This doesn't work aiouhzaiudhzaiohu
    // window.addEventListener('keydown', (event) => {
    //   if (event.code === 'Escape' && document.getElementById("image-popup-pageblock").style.display != "none") {
    //     closePageBlock("image-popup-pageblock");
    //   }
    // });
    // window.addEventListener('keydown', (event) => {
    //   if (event.key === 'Escape') {
    //     console.log("pressed escape");
    //     // console.log(closePageBlock("image-popup-pageblock"));
    //   }
    // });
    // try {
    //   document.getElementById("image-popup-pageblock").addEventListener('keydown', (e) => {
    //     if (e.keyCode == 27) {
    //       closePageBlock("image-popup-pageblock");
    //     }
    //   });
    // } catch { }
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
    if (theme === "light" || theme === "auto") {
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
    const parallaxLightInnerHTML = 
    `<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('ug')">About this background</button>
    <a href="#postparallax" id="parallax__scrollDown"><i class="pxico-caret"></i></a>
    <img src="/index/redbuilding01.png" id="redbuilding1" style="z-index: 5">
    <img src="/index/uglogo02.png" id="uglogo2" style="z-index: 4">
    <img src="/index/platform03.png" id="platform3" style="z-index: 3">
    <img src="/index/bgbuilds04.png" id="bgbuilds4" style="z-index: 2">
    <img src="/index/clouds05.png" id="clouds5" style="z-index: 1">
    <script>
      // Only put parallax effect when no vestibular issues
      pxicoReplaceToSVG();
      if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      }
    </script>`;
    const parallaxDarkInnerHTML = 
        `<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('nc')">About this background</button>
        <a href="#postparallax" id="parallax__scrollDown"><i class="pxico-caret"></i></a>
        <img src="/index/ncwhitestarline01.png" id="redbuilding1" style="z-index: 3">
        <img src="/index/ncbuilding02.png" id="uglogo2" style="z-index: 2">
        <img src="/index/ncbg03.png" id="clouds5" style="z-index: 1">
        <script>
        pxicoReplaceToSVG();
        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
        }
        </script>`;
    switch (theme) {
        case "light":
            setInnerHTML(parallax, parallaxLightInnerHTML);
            break;
        case "dark":
            setInnerHTML(parallax, parallaxDarkInnerHTML);
            break;
        case "auto":
        default:
            if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setInnerHTML(parallax, parallaxDarkInnerHTML);
            } else {
                setInnerHTML(parallax, parallaxLightInnerHTML);
            }
            break;
    }
}

const closePageBlock = id => {
  const elm = document.getElementById(id);
  elm.classList.add("hidden");
  setTimeout(() => {
    elm.style.display = "none";
  }, 520);
  document.documentElement.classList.remove("noScroll");
}

const openPageBlock = id => {
  const elm = document.getElementById(id);
  elm.style.display = "block";
  elm.classList.remove("hidden");
  document.documentElement.classList.add("noScroll");
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

function createCopyButton(highlightDiv) {
  const buttonI = document.createElement("i");
  buttonI.className = "pxico-clipboard";
  const button = document.createElement("button");
  button.className = "copy-code-button";
  button.type = "button";
  button.appendChild(buttonI);
  button.addEventListener("click", () => copyCodeToClipboard(button, highlightDiv));
  highlightDiv.insertBefore(button, highlightDiv.firstChild);
}

function copyCodeToClipboard(button, highlightDiv) {
  const codeToCopy = highlightDiv.querySelector(':last-child code[class^="language-"]').innerText;
  navigator.clipboard.writeText(codeToCopy).then(() => {
    button.blur();
    const copyIcon = button.innerHTML;
    button.innerHTML = "✓";
    setTimeout(() => {
      button.innerHTML = copyIcon;
    }, 2000);
  }, error => {
    button.innerHTML = "Error";
  });
}

// Image popup
function imagePopup(figure) {
  console.log("imagePopup");
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
  const topNav = document.querySelector(".top-nav");
  const topNavStyles = window.getComputedStyle(topNav);
  const burger = document.querySelector(".nav-burger");

  const burgerSVG = `<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h10v2H0zm0 4h10v2H0zm0 4h10v2H0z"/></svg>`,
        burgerOpenSVG = `<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect width="2" height="2" x="0" y="0"/>
        <rect width="2" height="2" x="2" y="2">
                <animate attributeName="y" to="2" from="0" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>

        <rect width="2" height="2" x="4" y="4">
                <animate attributeName="x" to="4" from="0" dur="0.3s" repeatCount="1" fill="freeze" />
                <animate attributeName="width" to="2" from="10" dur="0.3s" repeatCount="1" fill="freeze" />
        </rect>  
        <rect width="2" height="2" x="4" y="4">
                <animate attributeName="y" to="4" from="0" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="4" y="4">
                <animate attributeName="y" to="4" from="8" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>

        <rect width="2" height="2" x="2" y="6">
                <animate attributeName="y" to="6" from="8" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="0" y="8"/>

        <rect width="2" height="2" x="6" y="6">
                <animate attributeName="y" to="6" from="8" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="8" y="8"/>

        <rect width="2" height="2" x="6" y="2">
                <animate attributeName="y" to="2" from="0" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="8" y="0"/>
</svg>`,
        burgerCloseSVG = `<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect width="2" height="2" x="0" y="0"/>
        <rect width="2" height="2" x="2" y="2">
          <animate attributeName="y" from="2" to="0" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        
        <rect width="2" height="2" x="4" y="4">
                <animate attributeName="x" from="4" to="0" dur="0.3s" repeatCount="1" fill="freeze" />
                <animate attributeName="width" from="2" to="10" dur="0.3s" repeatCount="1" fill="freeze" />
        </rect>  
        <rect width="2" height="2" x="4" y="4">
                  <animate attributeName="y" from="4" to="0" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="4" y="4">
                  <animate attributeName="y" from="4" to="8" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        
        <rect width="2" height="2" x="2" y="6">
                <animate attributeName="y" from="6" to="8" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="0" y="8"/>
        
        <rect width="2" height="2" x="6" y="6">
                <animate attributeName="y" from="6" to="8" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="8" y="8"/>
      
        <rect width="2" height="2" x="6" y="2">
              <animate attributeName="y" from="2" to="0" dur="0.25s" repeatCount="1" fill="freeze" />
        </rect>
        <rect width="2" height="2" x="8" y="0"/>
      </svg>`;
  if (topNavStyles.display == "none") {
    // Open the burger
    burger.innerHTML = burgerOpenSVG;
    topNav.setAttribute("opened", "true");
  } else {
    // Close the burger
    burger.innerHTML = burgerCloseSVG;
    topNav.removeAttribute("opened");
    setTimeout(() => {
      burger.innerHTML = burgerSVG;
    }, 500);
  }
}
