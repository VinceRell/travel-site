import $ from "jquery";
import waypoint from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.headerTriggerElement = $(".large-hero__title");
    this.headerWaypoint();
    this.pageSectionWaypoint();
    this.smoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImages.on("load", function(){
      Waypoint.refreshAll();
    });
  }

  smoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  headerWaypoint(){
    let that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction){
        if(direction == "down"){
          that.siteHeader.addClass("site-header--dark");
        }else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  pageSectionWaypoint(){
    let that = this;
    this.pageSections.each(function(){
      let currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction){
          if(direction == "down"){
            let matchingHeaderLink = currentSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("current-link");
            $(matchingHeaderLink).addClass("current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentSection,
        handler: function(direction){
          if(direction == "up"){
            let matchingHeaderLink = currentSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("current-link");
            $(matchingHeaderLink).addClass("current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
