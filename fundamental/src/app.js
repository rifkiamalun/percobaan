import webpackLogo from './img/beer.jpg';
import imgPath from './img/batuk.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "regenerator-runtime";
import "./styles/style.css";
import "./script/components/footer-bar.js";
import "./script/components/app-bar.js";
import "./script/components/header.js";
import main from "./script/view/main.js";
import 'bootstrap';
import 'jquery'; //jika mendeklarasikan jquery secara global
import 'popper.js';

document.querySelector("banner-image").src = webpackLogo;
document.querySelector("footer-bar") .src = imgPath;


document.addEventListener("DOMContentLoaded", main);