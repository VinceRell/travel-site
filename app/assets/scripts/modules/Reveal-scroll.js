import $ from "jquery";

class RevealScroll {
  constructor() {
    this.revealItem = $(".feature-item");
    this.hide();
  }

  hide(){
    this.revealItem.addClass("reveal");
  }
}


export default RevealScroll;
