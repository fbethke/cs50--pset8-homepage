
// Initialize popover components with popper library and tooltip plugin.
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

var check = 0;
var hide = 0;

function turn_around() { 
  if (check == 0){
    document.getElementsByClassName("timeline")[0].style.flexDirection = "column-reverse";
    check = 1;
  }
  else {
    document.getElementsByClassName("timeline")[0].style.flexDirection = "column";
    check = 0;
  }
}

function removeDummy() {
  var elem = document.getElementById("table");
  elem.parentNode.removeChild(elem);
  return false;
}

function hide_show() {
  if (hide == 0){
    var items = document.getElementsByClassName("list-group-horizontal");
    for (let item in items){
      items[item].hidden = true;  
    }
    hide = 1;
  }
  else {
    var items = document.getElementsByClassName("list-group-horizontal");
    for (let item in items){
      items[item].hidden = false;
    }
    hide = 0;
  }
}
