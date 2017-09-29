import $ from "jquery";
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealScroll {
  constructor(elm, offsetPerc) {
    this.itemsToReveal = elm;
    this.offsetPercentage = offsetPerc;
    this.hideInitially();
    this.revealItems();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  revealItems(){
    let that = this;
    this.itemsToReveal.each(function(){
        let currentItem = this;
        new Waypoint({
          element: currentItem,
          handler: function(){
            $(currentItem).addClass("reveal-item--visible");
          },
          offset: that.offsetPercentage
        });
    });
  }
}


export default RevealScroll;
