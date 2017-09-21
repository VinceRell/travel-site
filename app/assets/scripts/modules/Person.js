var Person = function(name){
  this.name = name;
  this.greet = function(){
    console.log("Hello my name is " + this.name);
  }
}
