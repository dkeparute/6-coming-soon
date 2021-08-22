class ProgressBars {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }
    init() {
        if (!this.isValidSelector() || !this.isValidData()) {
            return false;
        }
        if (!this.findTargetElement()) {
            console.error('ERROR: pagal pateikta this.selector nepavyko rasti norimo elemento');
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
    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        return this.DOM ? true: false;
        // cia yra lygiai tas pats kas vienoje eiluteje parasyta:
        // if (this.DOM) {
        //     return true;
        // } else {
        //     return false;
        // }
        
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