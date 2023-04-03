class ResetButtonComponent extends HTMLButtonElement {
    constructor() {
        super();

        this.addEventListener("click", () => {
            this.style.display = 'none';
            this.triggerResetTotalEvent();
        });

        addEventListener('updateTotal', _ => this.style.display = 'block');
    }

    connectedCallback() {
        const total = localStorage.getItem('total');
        if (total == null) this.style.display = 'none';
        this.textContent = "Resetten";
    }

    triggerResetTotalEvent() {
        const evt = new CustomEvent('reset-total', { bubbles: true });
        this.dispatchEvent(evt);
    }
}

customElements.define('reset-btn', ResetButtonComponent, { extends: 'button' });
