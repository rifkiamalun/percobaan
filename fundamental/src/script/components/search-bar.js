import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>

       ${css}

       .input-group {
           max-width: 75%;
           margin: -60px auto 50px;
           padding: 20px 35px;
           background-color: dodgerblue;
           border-radius: 24px;
       }
  
       .input-menu {
            font-size: 18px;
            font-style: italic;
            padding: 20px 35px;
        }
    
    
        .input-group-text {
            font-weight: 600;
            background-color: #007bff;
            color: #fff;
            border: none;
        }
    
        .input-group-text:hover {
            background-color: #1c8aff;
            transition: 1s ease;
            color: #fff;
        }

       @media screen and (max-width: 550px){
           .input-group {
               width: 95%;
           }

           .input-group > input {
               width: 100%;
               margin-bottom: 12px;

           }

           .input-menu {
               font-size: 16px;
           }

           .input-group > button {
               width: 100%;
               margin: 10px;
           }

           .input-group-text {
               font-size: 16px;
           }

           .text2nd, p {
            margin: -412px auto 456px;

           }
       }
       </style>
       
            <div class="input-group">
            <input type="search" id="searchElement" class="input-menu form-control"
                placeholder="Cari Minuman Mu">
            <div class="input-group-append">
                <button type="submit" class="input-group-text" id="searchButtonElement">GO</button>
            </div>
        </div>
       
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);