
class ButtonListComponent extends HTMLElement {
    constructor() {
        super();
        this.values = [0.1, 0.2, 0.3, 0.33, 0.5, 1, 1.5];
    }

    connectedCallback() {
        let htmlString = [];
        this.values.forEach((value) => {
            htmlString.push(
                `<button class="btn btn-primary clickable-btn" type="submit" value="${value}">
                    ${value}
                </button>`
            )
        });
        this.innerHTML = htmlString.join("");

        this.addListeners();
    }

    addListeners() {
        document.querySelectorAll(".clickable-btn").forEach((element) => {
            element.addEventListener("click", () => this.updateTotalEvent(element));
        });
    }

    updateTotalEvent(element) {
        const customEvent = new CustomEvent("updateTotal", { detail: element.value, bubbles: true });
        element.dispatchEvent(customEvent);
    }
 

}

window.customElements.define('button-list', ButtonListComponent);