import './tail-item.js';

class TailList extends HTMLElement {

    set tails(tails) {
        this._tails = tails;
        this.render();
    }

    render() {
        const cardDeckElement = document.createElement("div");
        cardDeckElement.setAttribute("class", "card-deck row");

        this._tails.forEach(tail => {
            const tailItemElement = document.createElement("tail-item");
            tailItemElement.setAttribute("class", "col-lg-3 col-md-6 col-sm-12")
            tailItemElement.tail = tail;
            cardDeckElement.appendChild(tailItemElement);
        })

        this.appendChild(cardDeckElement);

    }

    renderError(message) {
        this.innerHTML = `
        <style>
             .placeholder {
                 margin-left: 35%;
                   font-weight: lighter;
                   color: rgba(255,255,255);
                   background-color: black;
                   padding: 10px;
                   width: 30%;
                   border-radius: 5px;
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("tail-list", TailList);