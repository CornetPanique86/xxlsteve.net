const elmTemplates = {
    label: elementFromHtml(`
        <div class="elmLabel formElm" data-label="Label: ">
            <input type="text" placeholder="Label text" required>
            <button class="elmDelete"><i class="pxico-cross"></i></button>
        </div>
    `),
    dropdown: elementFromHtml(`
        <div class="elmDropdown formElm" data-label="Dropdown: ">
            <input type="text" placeholder="Dropdown description" required>
            <button class="elmDelete"><i class="pxico-cross"></i></button>
            <div class="elmDropdownContent">
                <input type="text" required>
                <button class="addFormElmBtn addDropdownContent">+</button>
            </div>
        </div>
    `),
    input: elementFromHtml(`
        <div class="elmInput formElm" data-label="Input: ">
            <input type="text" placeholder="Description" required>
            <input type="text" placeholder="Placeholder">
            <input type="text" placeholder="Content">
            <button class="elmDelete"><i class="pxico-cross"></i></button>
        </div>
    `),
    slider: elementFromHtml(`
        <div class="elmSlider formElm" data-label="Slider: ">
            <select>
                <option value="normal">Slider</option>
                <option value="step">Step Slider</option>
            </select>
            <input type="text" name="desc" placeholder="Slider description" required>
            <input type="text" name="min" size="2" step="1" required>
            <input type="text" name="max" size="2" step="1" required>
            <input type="text" name="step" size="2" step="1">
            <input type="text" name="default" size="2" step="1">
            <button class="elmDelete"><i class="pxico-cross"></i></button>
        </div>
    `),
    sliderNormal: elementFromHtml(`
            <input type="text" name="desc" placeholder="Slider description" required>
            <input type="text" name="min" size="2" step="1" required>
            <input type="text" name="max" size="2" step="1" required>
            <input type="text" name="step" size="2" step="1">
            <input type="text" name="default" size="2" step="1">
    `),
    sliderStep: elementFromHtml(`
            <input type="text" name="desc" placeholder="Slider description" required>
            <div class="elmDropdownContent">
                <input type="text" required>
                <button class="addFormElmBtn addSliderStepContent">+</button>
            </div>
            <input type="text" name="default" size="2" step="1">
    `),
    switch: elementFromHtml(`
        <div class="elmSwitch formElm" data-label="Switch: ">
            <input type="text" placeholder="Description" required>
            <input type="checkbox" value="default">
            <button class="elmDelete"><i class="pxico-cross"></i></button>
        </div>
    `)
}

class Form {
    constructor(initialForm, elm, templates) {
        this.content = initialForm;
        this.elm = elm;
        this.template = templates;
    }

    reload() {
        if (this.content.type == "modal") {
            this.elm.addFormElmBtnModal.parentNode.style.display = "block";
            this.elm.addFormElmBtnAction.parentNode.style.display = "none";
        } else if (this.content.type == "action") {
            this.elm.addFormElmBtnModal.parentNode.style.display = "none";
            this.elm.addFormElmBtnAction.parentNode.style.display = "block";
        } else {
            this.elm.addFormElmBtnModal.parentNode.style.display = "none";
            this.elm.addFormElmBtnAction.parentNode.style.display = "none";
        }

        this.elm.type.querySelector(`option[value=${this.content.type}]`).setAttribute("selected", "true");
        this.elm.title.setAttribute("value", this.content.title);
        this.elm.formElements = document.getElementsByClassName("formElm")
        // if (this.elm.formElements.length > 0) {
        //     for (let i=0; i < this.elm.formElements.length; i++) {
        //         this.elm.form.removeChild(this.elm.formElements[i]);
        //     }
        // }
        for (let i=0; i < this.content.data.length; i++) {
            this.addElm(this.content.data[i].type);
        }
    }

    clearAll() {
        this.content.data = [];
        this.elm.formElements = document.getElementsByClassName("formElm")
        for (let i=0; i < this.elm.formElements.length; i++) {
            this.elm.form.removeChild(this.elm.formElements[i]);
        }
    }

    changeFormType(type) {
        if (confirm("Changing the form type will clear its current data!")) {
            this.clearAll();
            this.content.type = type;
            if (type == "modal") {
                this.elm.addFormElmBtnModal.parentNode.style.display = "block";
                this.elm.addFormElmBtnAction.parentNode.style.display = "none";
            } else if (type == "action") {
                this.elm.addFormElmBtnModal.parentNode.style.display = "none";
                this.elm.addFormElmBtnAction.parentNode.style.display = "block";
            } else {
                this.elm.addFormElmBtnModal.parentNode.style.display = "none";
                this.elm.addFormElmBtnAction.parentNode.style.display = "none";
            }
        }
    }

    addElm(type) {
        this.elm.formElements.appendChild(this.returnElmTemplate(type));
    }

    returnElmTemplate(type) {
        switch (type) {
            case "label":
                return this.template.label;
            case "dropdown":
                return this.template.dropdown;
            case "input":
                return this.template.input;
            case "slider":
                return this.template.slider;
            case "switch":
                return this.template.switch;
        }
    }
}

window.addEventListener("load", () => {
    const elements = {
        type: document.getElementById("formType"),
        title: document.getElementById("formTitle"),
        clear: document.getElementById("formClear"),
        addFormElmBtnAction: document.getElementById("addFormElmBtnAction"),
        addFormElmBtnModal: document.getElementById("addFormElmBtnModal"),
        addFormElmListModal: document.getElementById("addFormElmListModal"),
        formElements: document.getElementById("formElms"),
        form: document.getElementsByClassName("formElm")
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
    }, elements, elmTemplates);

    // Form type change
    elements.type.addEventListener("change", e => {
        form.changeFormType(e.target.value);
    })

    // Clear All
    elements.clear.addEventListener("click", () => {
        if (confirm("This will clear the form's contents!")) {
            form.clearAll();
            customAlert("Cleared form elements");
        }
    });

    

    // Add an element to the form and show the list of elements to add
    document.addEventListener("click", e => {
        const elm = e.target;
        if (elm.classList.contains("addFormElmListModalLi")) {
            elements.addFormElmListModal.classList.add("hidden");
            form.addElm(elm.value);
        } else if (elm.id == elements.addFormElmBtnModal.id) {
            elements.addFormElmListModal.classList.toggle("hidden");
        } else if (elm.id == elements.addFormElmBtnAction.id) {
            form.addElm("button");
        } else {
            if (!(elements.addFormElmListModal.classList.contains("hidden"))) elements.addFormElmListModal.classList.add("hidden");
        }
    });

    form.reload();
});  
