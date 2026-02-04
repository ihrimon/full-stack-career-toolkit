// filter list
function filterList() {
  const inputElement = document.getElementById('searchInput');
  const input = inputElement.value;
  const items = document.querySelectorAll('ul#itemList li');

  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? 'block'
      : 'none';
  });
}
