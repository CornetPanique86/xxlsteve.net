var useIconName = "",
    useIconColor = "#000000",
    useCopyiText = `<i class="pxico-"></i>`,
    useCopyimgText = `<img src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/res/svg/optimized/.svg"></img>`;

window.addEventListener("load", () => {
    const iconsDiv = document.getElementById("icons");
    iconsDiv.innerHTML = fetchIcons();

    iconsDiv.querySelectorAll("button.copyIconBtn").forEach(elm => {
        elm.addEventListener("click", elm => {
            elm.preventDefault();
            copyToClipboard(elm.target.previousElementSibling.outerHTML);
            const clipboard = elm.target.innerHTML;
            elm.target.innerHTML = "  ✓";
            setTimeout(() => {
                elm.target.innerHTML = clipboard;
            }, 1000)
        })
    });

    const iconsSearch = document.getElementById("searchIcons__input");
    iconsSearch.addEventListener("input", () => {
        const input = iconsSearch.value.toLowerCase();
        if (/\S/.test(input)) {
            searchIcons(input, iconsDiv)
        } else {
            for (let i = 0; i < iconsDiv.children.length; i++) {
                iconsDiv.children[i].style.display = "list-item";
            }
        }
    });
    document.getElementById("searchIcons__btn").addEventListener("click", () => {
        if (/\S/.test(iconsSearch.value)) searchIcons(iconsSearch.value.toLowerCase(), iconsDiv)
    });

    const iconPreview = document.getElementById("iconPreview");
    iconsDiv.querySelectorAll("li").forEach(elm => {
        elm.addEventListener("click", elm => {
            changePreview(elm.target.querySelector("svg").outerHTML, iconPreview);
            useIconName = elm.target.getAttribute("data-icon");
            updateUseText();
        })
    });

    const iconScaleRange = document.getElementById("iconScaleRange");
    iconScaleRange.addEventListener("input", elm => {
        changeIconScale(elm.target.value);
    });

    const iconColorInput = document.getElementById("iconColor");
    iconColorInput.addEventListener("input", elm => {
        changeIconColor(elm.target.value);
    });

    const iBtn = document.getElementById("useiElmBtn"),
          imgBtn = document.getElementById("useimgElmBtn");
    iBtn.addEventListener("click", elm => {
        copyToClipboard(useCopyiText);
        const clipboard = elm.target.innerHTML;
        elm.target.innerHTML = "  ✓";
        setTimeout(() => {
            elm.target.innerHTML = clipboard;
        }, 1000)
    });
    imgBtn.addEventListener("click", elm => {
        copyToClipboard(useCopyimgText);
        const clipboard = elm.target.innerHTML;
        elm.target.innerHTML = "  ✓";
        setTimeout(() => {
            elm.target.innerHTML = clipboard;
        }, 1000)
    });

    iconPreview.addEventListener("wheel", changeIconScaleWheel, { passive: false });
});

function updateUseText() {
    const iText = document.getElementById("useiText"),
          imgText = document.getElementById("useimgText");
    if (useIconColor != "#000000") {
        iText.innerHTML = `&lt;i class="pxico-${useIconName}" style="color: ${useIconColor};"&gt;&lt;/i&gt;`;
        useCopyiText = `<i class="pxico-${useIconName}" style="color: ${useIconColor};"></i>`;
    } else {
        iText.innerHTML = `&lt;i class="pxico-${useIconName}"&gt;&lt;/i&gt;`;
        useCopyiText = `<i class="pxico-${useIconName}"></i>`;
    }
    if (/\w+_anim\b/.test(useIconName)) {
        const iconNameAnim = useIconName.replace(/\b(\w+)_anim/, "$1");
        imgText.innerHTML = `&lt;img src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/res/svg/optimized/anim/${iconNameAnim}.svg"&gt;`;
        useCopyimgText = `<img src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/res/svg/optimized/anim/${iconNameAnim}.svg"></img>`;
    } else {
        imgText.innerHTML = `&lt;img src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/res/svg/optimized/${useIconName}.svg"&gt;`;
        useCopyimgText = `<img src="https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/res/svg/optimized/${useIconName}.svg"></img>`;
    }
}

function changePreview(icon, previewDiv) {
    previewDiv.innerHTML = icon;
    const iconSVG = previewDiv.querySelector("svg");
    iconSVG.style.width = document.getElementById("iconScaleRange").value;
    iconSVG.style.color = document.getElementById("iconColor").value;
}

function changeIconScale(value) {
    const iconSVG = document.querySelector("#iconPreview > svg");
    iconSVG.style.width = value + "px";
    document.getElementById("iconScaleRangeLabel").innerHTML = "Scale: " + value + "px";
}

function changeIconScaleWheel(event) {
    event.preventDefault();
    if (document.querySelector("#iconPreview > svg")) {
        const iconSVG = document.querySelector("#iconPreview > svg");
        let scale = 50;
        scale = parseFloat(iconSVG.style.width.replace("px", ""));
        scale += event.deltaY * -0.1;
        console.log(scale);
        scale = Math.min(Math.max(1, scale), 500);
        iconSVG.style.width = scale + "px";
        document.getElementById("iconScaleRangeLabel").innerHTML = "Scale: " + scale + "px";
        iconScaleRange.value = scale;
    }
}

function changeIconColor(value) {
    document.querySelector("#iconPreview > svg").style.color = value;
    useIconColor = value;
    updateUseText();
}

function searchIcons(term, container) {
    for (let i = 0; i < container.children.length; i++) {
        const icon = container.children[i].getAttribute('data-icon').toLowerCase();
        if (icon.includes(term)) {
            container.children[i].style.display = "list-item";
        } else {
            container.children[i].style.display = "none";
        }
    }
}

function fetchIcons() {
    let output = "";
    pxicoIconMap.forEach((value, key) => {
        const svgClass = value.replace("<svg ", `<svg class="pxico-${key}" `);
        output += `<li data-icon="${key}">
                    ${svgClass}
                    <button type="button" class="copyIconBtn hovertip" data-info="Copy SVG">
                      <i class="pxico-clipboard"></i>
                    </button>`;
        if (/\w+_anim\b/.test(key)) output += `<dfn data-info="This icon can be animated." class="iconAnimated">*</dfn>`
        if (/\w+color\b/.test(key)) output += `<dfn data-info="This icon's color cannot be changed." class="iconColored">*</dfn>`;
        output += `<span>${key}</span></li>`;
    });
    return output;
}