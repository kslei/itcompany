const button = document.querySelector('.menuicon')
const menu = document.querySelector('.menu')
const items = document.querySelectorAll('.item')
const product = document.querySelector('.product')
const paginations = document.querySelectorAll('.number')
const list = document.querySelector('.list')

let visible = true;

function init() {
  if(window.innerWidth >=1024) {
    visible = true;
    menu.style.display = 'block';
  } else {
    visible = false;
    menu.style.display = 'none';
  }
}

window.addEventListener('resize', init);
init()

setTimeout(()=>{
  product.style.transform = "translateX(0)";
}, 50)

const isVisible = () => {
  if (visible === true) {
    visible = false;
    menu.style.display = 'none';
  } else {
    visible = true;
    menu.style.display = 'block';
  }
  console.log(visible)
}

button.addEventListener('click', () => {
  isVisible()
})
items.forEach(item => {
  //visible menu
  item.addEventListener('click', e => {
    if(window.innerWidth<1200) {
      isVisible()
    }
  })
  //translate div product
  item.addEventListener('mousedown', e => {
    product.style.transition = "50ms"
    product.style.opacity = "0"
    product.style.transform = "translateX(-100%)"
  })
  item.addEventListener('mouseup', e => {
    product.style.opacity = "1"
    product.style.transition = "1s"
    product.style.transform = "translateX(0)";
  })
})
paginations.forEach(item => {
  item.addEventListener('mousedown', e => {
    list.style.transition = "500ms";
    list.style.transform = "rotate(270deg)";
    list.style.scale = "0.1"
  })
  item.addEventListener('mouseup', e => {
    setTimeout(()=>{
    list.style.transition = "1s";
    list.style.transform = "rotate(0)";
    list.style.scale = "1"
    }, 500)
  })
})