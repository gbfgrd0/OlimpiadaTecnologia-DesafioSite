function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  searchItems = document.getElementById("blocos");
  items = searchItems.getElementsByClassName("search");
  console.log(items);

  // loop entre todos os elementos para pesquisar
  for (i = 0; i < items.length; i++) {
    txtValue = items[i].getAttribute("value");
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
