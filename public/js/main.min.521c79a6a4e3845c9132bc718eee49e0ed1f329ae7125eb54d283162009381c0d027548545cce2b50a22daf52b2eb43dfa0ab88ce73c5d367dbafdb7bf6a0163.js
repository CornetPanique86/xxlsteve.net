const cookieStorage={getItem:e=>{const t=document.cookie.split(";").map(e=>e.split("=")).reduce((e,[t,n])=>({...e,[t.trim()]:n}),{});return t[e]},setItem:(e,t)=>{document.cookie=`${e}=${t};Expires=${new Date((new Date).getTime()+15768e6).toGMTString()};Path=/`}},consentPropertyName="xxlsteve",shouldShowPopup=()=>cookieStorage.getItem(consentPropertyName),saveToStorage=e=>{shouldShowPopup()!="-1"&&cookieStorage.setItem(consentPropertyName,e)};function cookieAgreementFn(e){saveToStorage(e);const t=document.getElementById("page-blur");t.classList.add("hidden"),document.documentElement.classList.remove("noScroll"),setTimeout(()=>{t.style.display="none"},820)}window.onload=()=>{const e=document.getElementById("page-blur"),t=document.getElementById("themeToggler"),n=document.createAttribute("selected");switch(shouldShowPopup()){case"-1":changeTheme("auto");break;case"3":changeTheme("dark"),t.querySelectorAll('[value="dark"]')[0].setAttributeNode(n);break;case"2":changeTheme("light"),t.querySelectorAll('[value="light"]')[0].setAttributeNode(n);break;case"1":changeTheme("auto");break;default:e.style.display="block",document.documentElement.classList.add("noScroll"),setTimeout(()=>{e.classList.remove("hidden")},500);break}};function themeSettings(){const e=document.getElementById("themeToggler").value;switch(e){case"light":changeTheme("light"),saveToStorage(2);break;case"dark":changeTheme("dark"),saveToStorage(3);break;case"auto":default:changeTheme("auto"),saveToStorage(1);break}}function changeTheme(e){const t=document.body;t.setAttribute("data-theme",e),changeIndexBackground(e),window.REMARK42&&(e=="light"||e=="auto"?window.REMARK42.changeTheme("light"):window.REMARK42.changeTheme("dark"))}const setInnerHTML=(e,t)=>{e.innerHTML=t,Array.from(e.querySelectorAll("script")).forEach(e=>{const t=document.createElement("script");Array.from(e.attributes).forEach(e=>t.setAttribute(e.name,e.value)),t.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(t,e)})};function changeIndexBackground(e){let t=document.getElementById("parallax");if(!t)return;switch(e){case"light":let e=`<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('ug')">About this background</button>
            <img src="/index/redbuilding01.png" id="redbuilding1" style="z-index: 5">
            <img src="/index/uglogo02.png" id="uglogo2" style="z-index: 4">
            <img src="/index/platform03.png" id="platform3" style="z-index: 3">
            <img src="/index/bgbuilds04.png" id="bgbuilds4" style="z-index: 2">
            <img src="/index/clouds05.png" id="clouds5" style="z-index: 1">
            <script>
              // Only put parallax effect when no vestibular issues
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
            <\/script>`;setInnerHTML(t,e);break;case"dark":let n=`<button type="button" id="parallax__aboutbg" class="mcbutton" onclick="aboutbgOpenPopup('nc')">About this background</button>
            <img src="/index/ncwhitestarline01.png" id="redbuilding1" style="z-index: 3">
            <img src="/index/ncbuilding02.png" id="uglogo2" style="z-index: 2">
            <img src="/index/ncbg03.png" id="clouds5" style="z-index: 1">
            <script>
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
            <\/script>`;setInnerHTML(t,n);break;case"auto":default:if(!window.matchMedia)return!1;window.matchMedia("(prefers-color-scheme: dark)").matches?setInnerHTML(t,n):setInnerHTML(t,e);break}}const closePageBlock=e=>{const t=document.getElementById(e);t.classList.add("hidden"),setTimeout(()=>{t.style.display="none"},520),document.documentElement.classList.remove("noScroll")},openPageBlock=e=>{const t=document.getElementById(e);t.style.display="block",t.classList.remove("hidden"),document.documentElement.classList.add("noScroll")};function customAlert(e){const t=document.getElementById("customAlert");t.innerHTML=e,t.style.display="inline-block",t.classList.add("slideIn"),setTimeout(()=>{t.classList.add("slideOut"),setTimeout(()=>{t.style.display="none",t.classList.remove("slideOut"),t.classList.remove("slideIn")},520)},3e3)}function imagePopup(e){if(console.log("imagePopup"),e.nodeName.toLowerCase()=="figure"){let t=e.querySelector("img");imagePopupAddInfo(t)}else imagePopupAddInfo(e);try{document.getElementById("image-popup__text").innerHTML=e.querySelector("figcaption").innerHTML}catch{}openPageBlock("image-popup-pageblock")}function imagePopupAddInfo(e){document.getElementById("image-popup__image").src=e.getAttribute("src"),document.getElementById("image-popup__download").href=e.getAttribute("src"),document.getElementById("image-popup__download").title="Download ("+e.getAttribute("src").split("/").pop()+")",document.getElementById("image-popup__image").alt=e.getAttribute("alt")}function showNavBar(){const e=document.querySelector(".top-nav"),n=window.getComputedStyle(e),t=document.querySelector(".nav-burger"),s=`<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h10v2H0zm0 4h10v2H0zm0 4h10v2H0z"/></svg>`,o=`<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
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
</svg>`,i=`<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
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
      </svg>`;n.display=="none"?(t.innerHTML=o,e.setAttribute("opened","true")):(t.innerHTML=i,e.removeAttribute("opened"),setTimeout(()=>{t.innerHTML=s},500))}