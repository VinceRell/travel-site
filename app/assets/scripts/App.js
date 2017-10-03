import Modal from "./modules/Modal";
import MobileMenu from "./modules/MobileMenu";
import RevealScroll from "./modules/RevealScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";

const mobileMenu = new MobileMenu();
new RevealScroll($(".feature-item"), "85%");
new RevealScroll($(".testimonial"), "60%");
const stickyHeader = new StickyHeader();
const modal = new Modal();
