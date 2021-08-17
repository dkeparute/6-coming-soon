class ProgressBars {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
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
        const DOM = document.querySelector(this.selector);
        DOM.innerHTML += HTML;
    }
}

export { ProgressBars }