import css from "bootstrap/dist/css/bootstrap.min.css";

class TailItem extends HTMLElement {

    set tail(tail) {
        this._tail = tail;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        ${css}
        * {
            margin: 0;
            padding: 0;
        }
        h5 {
            font-weight: 600;
            font-family: "Quicksand", sans-serif;
            font-size: 18px;
        }

        .card-img-top {
            transition: 1s;
        }

        .card-img-top:hover {
            cursor: pointer;
            opacity: 0.7;
        }

        .card a {
            text-decoration: none;
            color: #000;
        }

        .card-body {
            padding: 0;
            background: black;
            color: white;
            border: 2px solid white;
        }

        .btn btn-primary {
            border: none;
            padding: 10px;
            background-color: #007bff;
            font-weight: 600;
            font-family: "Quicksand", sans-serif;
            font-size: 16px;
            color: #fff;
            text-decoration: none;
        }

        .btn btn-primary:hover {
            background-color: #1c8aff;
            transition: 1s ease;
        }
        </style>

        <div class="card my-3 mr-0">
                    <img src="${this._tail.strDrinkThumb}" class="card-img-top" alt="${this._tail.strAlcoholic}">
            <div class="card-body">
                <h5 class="card-title p-2">${this._tail.strAlcoholic} (${this._tail.strCategory})</h5>
            </div>
            <a class="btn btn-warning" href="https://wa.me/1XXXXXXXXX" role="button">Pesan Lewat WA</a>
           </div>`;
    }
}

customElements.define("tail-item", TailItem);