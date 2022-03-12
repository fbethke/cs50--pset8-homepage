
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

function removeDummy() {
  var elem = document.getElementById("table");
  elem.parentNode.removeChild(elem);
  return false;
}

function compare( a, b ) {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}

function add_sorted_list (input) {
  var elem = document.getElementById("table");
  for (let i = 0, len = input.length; i < len; i++) {
    var s = compare(elem[i], elem[i+1]);
    if (s == 1){
      var smaller = input[i];
      input[i] = input[i+1];
      input[i+1] = smaller;
    }
  }
  for (let i = 0, len = input.length; i < len; i++){
    elem.appendChild(input[i]);
  }
}

function sort_list() {
  var items = document.getElementsByClassName("list-group-horizontal");
  add_sorted_list(items);  
  }
  
  
  /* 
  find all elements
  put in array
  delete old ones
  put in new ones
  */