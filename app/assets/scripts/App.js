import MobileMenu from "./modules/MobileMenu";
import RevealScroll from "./modules/RevealScroll";
import $ from "jquery";

const mobileMenu = new MobileMenu();
new RevealScroll($(".feature-item"), "85%");
new RevealScroll($(".testimonial"), "60%");
