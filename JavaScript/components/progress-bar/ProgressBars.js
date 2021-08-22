class ProgressBars {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }
    init() {
        if (!this.isValidSelector() || !this.isValidData() || !this.findTargetEelement()) {
            return false;
        }
        this.render();
    }
    isValidSelector() {
        if (typeof this.selector !== "string" || this.selector === "") {
            console.error('ERROR: selector turi buti ne tuscias tekstas');
            return false;
        }

        return true;
    }
    isValidData() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            console.error('ERROR: this.data turi buti ne tuscias array');
            return false;
        }
        return true;
    }
    findTargetEelement() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: pagal pateikta this.selector nepavyko rasti norimo elemento');
            return false;
        }
        return true;
    }
    render() {

        let HTML = '';

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];

            HTML += `<div class="progress-bar">
                        <div class="top">
                            <div class="label">${item.label}</div>
                            <div class="value">${item.value}%</div>
                        </div>
                        <div class="bottom">
                            <div class="progress" style="width: ${item.value}%;"></div>
                        </div>
                    </div>`;
        }
        this.DOM.innerHTML += HTML;
    }
}

export { ProgressBars }