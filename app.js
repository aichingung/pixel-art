const backgroundimage = document.querySelector('.div-container')
const canvas = document.querySelectorAll('.pixel')
const paint = document.querySelector('.color')
const resetBtn = document.querySelector('.color-btn')
let colorInput = document.getElementById('selected-color')
let inputColorBox = document.querySelector('.input-color')
let inputColorBtn = document.querySelector('.input-color-btn')
let container = document.querySelector('.div-container')
const turnGreenBtn = document.querySelector('.turn-green');

const previewBackground = document.querySelector('.backgroundbox')
const searchBtn = document.querySelector('.search-btn')
const queryInput = document.querySelector('.query-input')
const form = document.querySelector('form')




for (let i = 0 ; i < canvas.length; i++) {
  canvas[i].addEventListener('click', addPaint)
}

function addPaint(event) {
  event.target.style.backgroundColor = paint.value
}

colorInput.addEventListener('input', (event) => {
  event.preventDefault()
  document.getElementById('colorVal').textContent = colorInput.value;
  });

  inputColorBtn.addEventListener('click', (event) => {
  event.preventDefault()
  colorInput.value = inputColorBox.value;
});


turnGreenBtn.addEventListener('click', (event) => {
  event.preventDefault()
  colorInput.value = '#09dc0d' 
})


form.addEventListener('submit', event => {

  event.preventDefault()

  let url = 'https://omdbapi.com/?apikey=2f6435d9&t=' + queryInput.value

  
  fetch(url).then(res => res.json()).then(res => {
    // console.log(res);
    console.log(res.Poster);
    // let poster = res.Poster
    backgroundimage.style.backgroundImage = `url('${res.Poster}')`
  })
})


// dom - event bubbling 
// dom - event delegation (delagating the handling of the event to the parent)


// container.addEventListener('click', handleclick)

// function handleclick(event) {
//   event.target.style.backgroundColor = 'red'
// }











