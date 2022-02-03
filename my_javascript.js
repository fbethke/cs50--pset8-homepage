
// Initialize popover components with popper library and tooltip plugin.
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

var check = 0;

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