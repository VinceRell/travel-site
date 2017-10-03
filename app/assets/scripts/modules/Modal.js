import $ from "jquery";

class Modal {
  constructor() {
    this.modalBtn = $(".open-modal");
    this.modal = $(".modal");
    this.closeBtn = $(".modal__close");
    this.events();
  }

  events(){
    // clicking the open modal button
     this.modalBtn.click(this.openModal.bind(this));
    // clicking the x close modal button
     this.closeBtn.click(this.closeModal.bind(this));
    // pushes the escape key
     $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if(e.keyCode == 27){
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--visible");
    return false;
  }

  closeModal(){
    this.modal.removeClass("modal--visible");
  }
}

export default Modal;
