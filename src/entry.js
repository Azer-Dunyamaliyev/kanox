import "./assets/sass-css/style.scss"
import logo from "./assets/image/logo.png"
import banner from "./assets/image/home_img.png"
import overlay_left from "./assets/image/banner_overlay_1.png"
import overlay_right from "./assets/image/banner_overlay_2.png"
import about_main_img from "./assets/image/about_img.png"
import about_main_img_2 from "./assets/image/about_img_2.png"
import about_bg from "./assets/image/col-3_img.png"


const mylogo = document.querySelector(".home_logo");
mylogo.src = logo;

const home_img = document.querySelector(".home-img");
home_img.src = banner;

const left = document.querySelector(".left");
left.src = overlay_left;

const right = document.querySelector(".right");
right.src = overlay_right;

const about_img = document.querySelector(".about_img");
about_img.src = about_main_img;

const about_img_2 = document.querySelector(".about_img_2");
about_img_2.src = about_main_img_2;

const col_3 = document.querySelector(".col_3_img");
col_3.src = about_bg

document.querySelector(".col_3").style.backgroundImage = "url('about_img_2.png')"

document.querySelector(".burger_icon").addEventListener("click",()=>{
    document.querySelector(".burger_menu").classList.toggle("active")
})

window.addEventListener("scroll",()=> {
    const links = document.querySelector(".head").getElementsByTagName('.one');
    if (window.scrollY > 0) {
        document.querySelector(".head").style.backgroundColor = "#e614ff"
        for(let link of links) {
            link.style.color = "#fff"
        }
    } else {
        document.querySelector(".head").style.backgroundColor = "transparent"
        for(let link of links) {
            link.style.color = "#112e41"
        }
    }
})
