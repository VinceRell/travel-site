import $ from "jquery";
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealScroll {
  constructor(elm, offsetPerc) {
    this.itemsToReveal = elm;
    this.offsetPercentage = offsetPerc;
    this.hideInitially();
    this.revealItems(this.offsetPercentage );
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  revealItems(propReff){
    this.itemsToReveal.each(function(){
        let currentItem = this;
        new Waypoint({
          element: currentItem,
          handler: function(){
            $(currentItem).addClass("reveal-item--visible");
          },
          offset: propReff
        });
    });
  }
}


export default RevealScroll;
