
class TotalComponent extends HTMLElement {
    constructor() {
        super();

        addEventListener("updateTotal", ({ detail }) => {
            this.updateStorageTotal(detail);
            this.update();
        });

        addEventListener("reset-total", () => {
            localStorage.setItem('total', 0);
            this.update();
        })
    }

    connectedCallback() {
        this.innerHTML = `<h1 class="total">${this.storageTotal()} <span>l</span></h1>`;
    }

    update() {
        document.querySelector("h1.total").textContent = this.storageTotal();
    }

    storageTotal() {
        const storageTotal = localStorage.getItem('total');
        if (storageTotal == null) return 0;
        
        parseFloat(storageTotal);
    }

    updateStorageTotal(detail) {
        const currentTotal = this.storageTotal();
 
        localStorage.setItem('total', currentTotal + parseFloat(detail));
    }
}

window.customElements.define('total-amount', TotalComponent);
