class Form {
    constructor(initialForm, elm) {
        this.content = initialForm;
        this.elm = elm;
    }

    reload() {
        this.elm.type.querySelector(`option[value=${this.content.type}]`).setAttribute("selected", "true");
        this.elm.title.setAttribute("value", this.content.title);
        this.elm.formElements = document.getElementsByClassName("formElm")
        if (this.elm.formElements.length > 0) {
            this.elm.formElements.forEach(ele => {
                this.elm.form.removeChild(ele);
            });
        }
        for (let i=0; i < this.content.data.length; i++) {
            this.addElm(this.content.data[i].type);
        }
    }

    clearAll() {
        this.content.data = [];
        this.elm.formElements.forEach(ele => {
            this.elm.form.removeChild(ele);
        });
    }

    changeFormType(type) {
        if (confirm("Changing the form type will clear its current data!")) {
            this.clearAll();
            this.content.type = type;
        }
    }

    allowedElmToAdd() {
        this.elm.addFormElmList.querySelectorAll("option").forEach(ele => {
            ele.classList.remove("formElmUnsupported");
        });
        switch (this.content.type) {
            case "modal":
                this.elm.addFormElmList.getElementsByClassName("action").forEach(ele => {
                    ele.classList.add("formElmUnsupported");
                });
            case "message":
                this.elm.addFormElmList.getElementsByClassName("modal").forEach(ele => {
                    ele.classList.add("formElmUnsupported");
                });
                break;
            case "action":
                this.elm.addFormElmList.getElementsByClassName("modal").forEach(ele => {
                    ele.classList.add("formElmUnsupported");
                });
                break;
        }
    }

}

window.addEventListener("load", () => {
    const elements = {
        type: document.getElementById("formType"),
        title: document.getElementById("formTitle"),
        clear: document.getElementById("formClear"),
        addFormElmBtn: document.getElementById("addFormElmBtn"),
        addFormElmList: document.getElementById("addFormElmBtn").nextElementSibling,
        form: document.getElementById("form"),
        formElements: document.getElementsByClassName("formElm")
    };
    const form = new Form({
        type: "modal",
        title: "This is the form's title",
        data: [
            {
                type: "label",
                text: "This is a label..."
            },
            {
                type: "input",
                text: "...and this is an input",
                placeholder: "Placeholder",
                default: "Press 'Clear All' to remove this mess!"
            }
        ]
    }, elements);

    // Form type change
    elements.type.addEventListener("change", elm => {
        form.changeFormType(elm.value);
    })

    // Clear All
    elements.clear.addEventListener("click", () => {
        if (confirm("This will clear the form's contents!")) {
            form.clearAll();
            customAlert("Cleared form elements");
        }
    });

    // Show the list of elements to add
    elements.addFormElmBtn.addEventListener("click", () => {
        if (elements.addFormElmList.classList.contains("hidden")) form.allowedElmToAdd();
        elements.addFormElmList.classList.toggle("hidden");
    });

    // Add an element to the form
    elements.addFormElmList.querySelectorAll("li").forEach(elm => {
        elm.addEventListener("click", elm => {
            elements.addFormElmList.classList.add("hidden");
            form.addElm(elm.value);
        });
    });

    form.reload();
});  
