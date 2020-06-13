class BannerImage extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open",
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            
            .main {
                position: relative;
                background-image: url('../jancok/img/beer.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                padding: 200px;
                opacity: .9;
                background-color: #000;
                border-bottom: 5px solid white;
            }

            .main h2 {
                margin: 0;
                padding: 0;
                font-size: 56px;
                color: #fff;
                font-weight: 600;
                text-shadow: 5px 0px 20px #000;

            }

            .text2nd p {
                position: relative;
                left: 10%;
                margin: -5%;
                padding: 0;
                font-size: 35px;
                color: #fff;
                font-weight: 600;
                text-shadow: 5px 0 10px #000;
                cursor: pointer;
            }
            .text2nd p:hover {
                color: red;
                transition: 0.5s;
            }

            .button {
                text-decoration: none;
                background-color: #007bff;
                color: #fff;
                font-weight: 600;
                display: inline-block;
                padding: 6px;
                margin: 10px auto;
                width: 90px;
                text-align: center;
                border-radius: 4px;
            }

            .button:hover {
                background-color: #1c8aff;
                transition: 1s ease;
                color: #fff;
            }

            img, .google, .spotify, .twitter, .facebook {
                width: 50px;
                
            
             }
            
             /*side-bar*/
            
             .side-bar {
                 position: fixed;
                 background: #fff;
                 background-color: #fff;
                 width: 50px;
                 height: 23%;
                 top: 50%;
                 left:0;
                 transform: translateY(-50%);
                 z-index: 1;
                 border-radius: 20px;
             }
            
            
             
             
             .side-bar img{
                display: block;
                width: 25px;
                margin: 0 auto 8px;
                cursor: pointer;
            }
            
            .side-bar img:hover{
                background:dodgerblue;
                cursor: pointer;
            }
        
    
            @media (max-width: 550px) {

                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: bordex-box;
                }

                .main {
                    padding: 200px 0;
                    opacity: 0.9;
                    background-color: #000;
                }

                .main h2  {
                    font-size: 37px;
                    text-align: center;
                }
                .text2nd p  {
                    width: 100%;
                    font-size: 22px;
                    margin-left: -50px;
                    text-align: center;
                    align-items: center;
                }
               

                

                .button {
                    display: flex;
                    justify-content: center;
                }

                .btn-click {
                    background-color: 2px;
                }
                
            }
            </style>
            
            <section class="main">
            <div class="text2nd">
            <p>Temukan Minuman Mu , Hanya Di Coocktail ID<br>
                Kualitas Nomor 1 Di dunia, Siap Antar Kerumah Anda 
            </p> 
            </div>
             </div>
             <div class="side-bar">
             <img src="../src/img/facebook.png">
             <img src="${`../src/img/instagram.png`}">
             <img src="${`../src/img/twitter.png`}">
             <img src="${`../src/img/linkedin.png`}">

         </div>
                </section>`;
    }
}
customElements.define("banner-image", BannerImage);