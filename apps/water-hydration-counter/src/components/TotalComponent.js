
class TotalComponent extends HTMLElement {
    get total() {
        return parseFloat(this._total).toFixed(2);
    }

    set total(value) {
        this._total += parseFloat(value);
    }

    constructor() {
        super();

        this._total = 0;
        addEventListener("updateTotal", ({ detail }) => {
            this.total = detail;
            this.update();
        });

        addEventListener("reset-total", () => {
            this._total = 0;
            this.update();
        })
    }

    connectedCallback() {
        this.innerHTML = `<h1 class="total">${this.total} <span>l</span></h1>`;
    }

    update() {
        document.querySelector("h1.total").textContent = this.total;
    }
}

window.customElements.define('total-amount', TotalComponent);