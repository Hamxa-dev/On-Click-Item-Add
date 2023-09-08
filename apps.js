
const div = document.querySelector('div');
const ol = document.querySelector('ol');
const colorName = ['Carrot', '	Tomato', 'Chili', 'Garlic', 'Cauliflower ', 'Lime ', 'Bottle gourd ','Bitter gourd ','Onion','Kidney beans ','Soybeans ','Amaranth ','Black beans',];

for (let i = 0; i < colorName.length; i++) {
    ol.innerHTML += `<button onclick='changeColor(colorName[${i}])'>${colorName[i]}</button>`;

}

function changeColor(i) {
  ol.innerHTML += `<li>${[i]}</li>`
}