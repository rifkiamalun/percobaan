class FooterBar extends HTMLElement {
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
        /* REMOVE THIS, USE YOUR OWN  */
        html,body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, Sans-serif;
          background-color: #070617;
        }
        .dummy_page {
          height: 200px;
          width: 100%;
          background-color: #f0f0f0;
          text-align: center;
          box-sizing: border-box;
          padding: 60px 0px;
        }
        /* STYLES SPECIFIC TO FOOTER  */
        .footer {
          width: 100%;
          position: relative;
          height: auto;
          background-color: #070617;
        }
        .footer .col {
          width: 190px;
          height: auto;
          float: left;
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          padding: 0px 20px 20px 20px;
        }
        .footer .col h1 {
          margin: 0;
          padding: 0;
          font-family: inherit;
          font-size: 12px;
          line-height: 17px;
          padding: 20px 0px 5px 0px;
          color: rgba(255,255,255,0.2);
          font-weight: normal;
          text-transform: uppercase;
          letter-spacing: 0.250em;
        }
        .footer .col ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .footer .col ul li {
          color: #999999;
          font-size: 14px;
          font-family: inherit;
          font-weight: bold;
          padding: 5px 0px 5px 0px;
          cursor: pointer;
          transition: .2s;
          -webkit-transition: .2s;
          -moz-transition: .2s;
        }
        .social ul li {
          display: inline-block;
          padding-right: 5px !important;
        }
        
        .footer .col ul li:hover {
          color: #ffffff;
          transition: .1s;
          -webkit-transition: .1s;
          -moz-transition: .1s;
        }
        .clearfix {
          clear: both;
        }
        .meja-use {
            
            margin: 0 auto;
            padding: 20px;
            
        }
        .img-flex {
            display: flex;
            margin-left: -48px;
        }
        
        .img-flex2nd {
            display: flex;
            margin-left: -50px;

        }
        #ab, #ac, #ad, #ae, #af, #ag, #ah, #ai {
            width: 50px;
            cursor: pointer;
            margin: 5px;
            transition: transform .2s;
        
        }
        #ab:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        #ac:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        #ad:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        #ae:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        
        /*second image-flex2nd */
        
        #af:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        #ag:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        #ah:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        #ai:hover {
            -ms-transform: scale(1.5); 
            -webkit-transform: scale(1.5); 
            transform: scale(1.5); 
        }
        .ftrftr2 p {
            margin: 0;
            background-color: dodgerblue;
            padding: 20px;
            text-align: center;
            color: white;
        }
        @media only screen and (min-width: 1280px) {
          .contain {
            width: 1200px;
            margin: 0 auto;
          }
         
        }
        @media only screen and (max-width: 1139px) {
          .contain .social {
            width: 1000px;
            display: block;
          }
          .social h1 {
            margin: 0px;
          }
        }
        @media only screen and (max-width: 950px) {
          .footer .col {
            width: 33%;
          }
          .footer .col h1 {
            font-size: 14px;
          }
          .footer .col ul li {
            font-size: 13px;
          }

          #ab, #ac, #ad, #ae, #af, #ag, #ah, #ai {
            width: 20%;
            cursor: pointer;
            margin: 1px;
            transition: transform .2s;
        
        }
       
        }
        @media only screen and (max-width: 500px) {
            .footer .col {
              width: 50%;
            }
            .footer .col h1 {
              font-size: 14px;
            }
            .footer .col ul li {
              font-size: 13px;
            }
            .img-flex {
              display: flex;
              margin-left: -35px;
          }
          
          .img-flex2nd {
              display: flex;
              margin-left: -35px;
  
          }
        }
        @media only screen and (max-width: 340px) {
          .footer .col {
            width: 100%;
          }
        }
        </style>

      
<!-- FOOTER START -->
<div class="footer">
  <div class="contain">
  <div class="col">
    <h1>Company</h1>
    <ul>
      <li>About</li>
      <li>Mission</li>
      <li>Services</li>
      <li>Cegah Covid19</li>
      <li>Get in touch</li>
    </ul>
  </div>
  <div class="col">
    <h1>FOODS</h1>
    <ul>
      <li>Gado Gado</li>
      <li>Karedok</li>
      <li>Ayam Goreng</li>
      <li>Burung Puyuh</li>
      <li>Sate</li>
    </ul>
  </div>
  <div class="col">
    <h1>Drinks</h1>
    <ul>
      <li>Wine</li>
      <li>Tequila</li>
      <li>Brandy</li>
      <li>Jagermeister</li>
      <li>Jamaican RUM</li>
      <li>Orang Tua</li>
      <li>CIU Bekonang</li>
      <li>Arak Balik</li>
    </ul>
  </div>
  <div class="col">
    <h1>Resources</h1>
    <ul>
      <li>Dicoding Indonesia</li>
      <li>Fudanmetal Front End Developer</li>
      <li>Stack Overflow</li>
      <li>Latihan</li>
      <li>Github</li>
      <li>Reddit</li>
    </ul>
  </div>
  <div class="col">
    <h1>Support</h1>
    <ul>
      <li>Contact us</li>
      <li>Web chat</li>
      <li>Open ticket</li>
    </ul>
  </div>
  <div class="col social">
    <h1>Cegah Covid 19</h1>
    <div id="container">
    <section id="border-use">
    <div class="nickname">
    </div>
    <div class="meja-use">
        <div class="img-flex">
        <img id="ab"  src="${'../src/img/batuk.png'}">          
        <img id="ac"  src="${`../src/img/cairan.png`}">
        <img id="ad"  src="${`../src/img/panci.png`}">
        <img id="ae"  src="${`../src/img/tangan.png`}">
        </div>
        <div class="img-flex2nd">
          <img id="af"  src="${`../src/img/cairan.png`}">
          <img id="ag"  src="${`../src/img/batuk.png`}">
          <img id="ah"  src="${`../src/img/jaga-jarak.png`}">
          <img id="ah"  src="${`../src/img/tidur.png`}">
        </div>        
        </div>
      </div>
    </div>
  </div>
  
<div class="clearfix"></div>
</div>
<div class="ftrftr2">
    <p>Dicoding indonesia &copy;2020 Fundanmetal Frontend Web Developer</p>
</div>

</div>
<!-- END OF FOOTER -->
        `;
    }
}

customElements.define("footer-bar", FooterBar);