const cookieStorage={getItem:e=>{const t=document.cookie.split(";").map(e=>e.split("=")).reduce((e,[t,n])=>({...e,[t.trim()]:n}),{});return t[e]},setItem:(e,t)=>{document.cookie=`${e}=${t};Expires=${new Date((new Date).getTime()+15768e6).toGMTString()};Path=/`}},consentPropName="xxlsteve",shouldShowPopup=()=>cookieStorage.getItem(consentPropName),saveToStorage=e=>{shouldShowPopup()!="-1"&&cookieStorage.setItem(consentPropName,e)};function cookieAgreementFn(e){saveToStorage(e);const t=document.getElementById("page-blur");t.classList.add("hidden"),document.documentElement.classList.remove("noScroll"),setTimeout(()=>{t.style.display="none"},820)}window.onload=()=>{const e=document.getElementById("page-blur");switch(shouldShowPopup()){case"-1":changeTheme("auto");break;case"3":changeTheme("dark");break;case"2":changeTheme("light");break;case"1":changeTheme("auto");break;default:e.style.display="block",document.documentElement.classList.add("noScroll"),setTimeout(()=>{e.classList.remove("hidden")},500);break}try{document.getElementById("image-popup-pageblock").addEventListener("keydown",e=>{e.keyCode==27&&closePageBlock("image-popup-pageblock")})}catch{}};function themeSettings(){const e=document.getElementById("themeToggler").value;switch(e){case"light":changeTheme("light"),saveToStorage(2);break;case"dark":changeTheme("dark"),saveToStorage(3);break;case"auto":default:changeTheme("auto"),saveToStorage(1);break}}function changeTheme(e){const t=document.body;t.setAttribute("data-theme",e),changeIndexBackground(e),window.REMARK42&&(e=="light"||e=="auto"?window.REMARK42.changeTheme("light"):window.REMARK42.changeTheme("dark"))}const setInnerHTML=(e,t)=>{e.innerHTML=t,Array.from(e.querySelectorAll("script")).forEach(e=>{const t=document.createElement("script");Array.from(e.attributes).forEach(e=>t.setAttribute(e.name,e.value)),t.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(t,e)})};function changeIndexBackground(e){let t=document.getElementById("parallax");if(!t)return;switch(e){case"light":let e=`<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('ug')">About this background</button>
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
            <\/script>`;setInnerHTML(t,e);break;case"dark":let n=`<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('nc')">About this background</button>
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
            <\/script>`;setInnerHTML(t,n);break;case"auto":default:if(!window.matchMedia)return!1;window.matchMedia("(prefers-color-scheme: dark)").matches?setInnerHTML(t,n):setInnerHTML(t,e);break}}const closePageBlock=e=>{let t=document.getElementById(e);t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},520),document.documentElement.classList.remove("noScroll")},openPageBlock=e=>{let t=document.getElementById(e);t.style.display="block",t.classList.remove("hidden"),document.documentElement.classList.remove("noScroll")};function customAlert(e){const t=document.getElementById("customAlert");t.innerHTML=e,t.style.display="inline-block",t.classList.add("slideIn"),setTimeout(()=>{t.classList.add("slideOut"),setTimeout(()=>{t.style.display="none",t.classList.remove("slideOut"),t.classList.remove("slideIn")},520)},3e3)}function imagePopup(e){if(document.documentElement.classList.add("noScroll"),e.nodeName.toLowerCase()=="figure"){let t=e.querySelector("img");imagePopupAddInfo(t)}else imagePopupAddInfo(e);try{document.getElementById("image-popup__text").innerHTML=e.querySelector("figcaption").innerHTML}catch{}openPageBlock("image-popup-pageblock")}function imagePopupAddInfo(e){document.getElementById("image-popup__image").src=e.getAttribute("src"),document.getElementById("image-popup__download").href=e.getAttribute("src"),document.getElementById("image-popup__download").title="Download ("+e.getAttribute("src").split("/").pop()+")",document.getElementById("image-popup__image").alt=e.getAttribute("alt")}function showNavBar(){let e=document.querySelector(".top-nav"),t=window.getComputedStyle(e);t.display=="none"?e.setAttribute("opened","true"):e.removeAttribute("opened")}