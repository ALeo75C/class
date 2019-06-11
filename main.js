// Хотела делать универсальную функцию, где на каждую кнопку вешалось одно событие по клику, где читался ее второй класс и от этого класса выводилось определенное сообщение, но один onclick на все вешать не хотел, поэтому сделала по отдельности. Как я делала закомментила

// let buttun = document.getElementsByClassName('but')

// buttun.onclick = function() {
//
//   let clas = this.classList.item(1)
//   console.log(clas);
//
// }

// Дальше не делала, ибо это уже не работало Т_Т

const car = document.querySelector('.model')

const start = document.querySelector('.s0')
const stop = document.querySelector('.s1')
const go = document.querySelector('.s2')
const gaze = document.querySelector('.s3')
const color = document.querySelector('.s4')
const model = document.querySelector('.s5')

start.onclick = function() {
  let ul = document.querySelector('ul')
  let newLi = document.createElement('li')
  newLi.innerText = 'Машина заведена'
  ul.appendChild(newLi)
}
stop.onclick = function() {
  let ul = document.querySelector('ul')
  let newLi = document.createElement('li')
  newLi.innerText = 'Машина заглушена'
  ul.appendChild(newLi)
}
go.onclick = function() {
  let ul = document.querySelector('ul')
  let newLi = document.createElement('li')
  newLi.innerText = 'Машина поехала'
  ul.appendChild(newLi)
}
gaze.onclick = function() {
  let ul = document.querySelector('ul')
  let newLi = document.createElement('li')
  newLi.innerText = 'Заправлен полный бак'
  ul.appendChild(newLi)
}
color.onclick = function() {
  let a = Math.floor(Math.random() * 5)
  let ul = document.querySelector('ul')
  let newLi = document.createElement('li')
  if (a === 0) {
    car.setAttribute('style', 'background: rgb(225, 0, 0);')
    newLi.innerText = 'Цвет машины изменен на красный'
  } else if (a === 1) {
    car.setAttribute('style', 'background: rgb(225, 225, 0);')
    newLi.innerText = 'Цвет машины изменен на желый'
  } else if (a === 2) {
    car.setAttribute('style', 'background: rgb(0, 225, 225);')
    newLi.innerText = 'Цвет машины изменен на голубой'
  } else if (a === 3) {
    car.setAttribute('style', 'background: rgb(225, 0, 225);')
    newLi.innerText = 'Цвет машины изменен на фиолетовый'
  } else if (a === 4) {
    car.setAttribute('style', 'background: rgb(225, 225, 225);')
    newLi.innerText = 'Цвет машины изменен на серый'
  } else {
    car.setAttribute('style', 'background: rgb(0, 0, 0); ')
    newLi.innerText = 'Цвет машины изменен на черый (вам очень повезло)'
  }
  ul.appendChild(newLi)
}
model.onclick = function() {
  let a = Math.floor(Math.random() * 5)
  let ul = document.querySelector('ul')
  let newLi = document.createElement('li')
  if (a === 0) {
    car.innerText = 'ВАЗ-2109'
    newLi.innerText = 'Модель машины изменена на ВАЗ-2109'
  } else if (a === 1) {
    car.innerText = 'ВАЗ-2108'
    newLi.innerText = 'Модель машины изменена на ВАЗ-2108'
  } else if (a === 2) {
    car.innerText = 'ВАЗ-2107'
    newLi.innerText = 'Модель машины изменена на ВАЗ-2107'
  } else if (a === 3) {
    car.innerText = 'ВАЗ-2106'
    newLi.innerText = 'Модель машины изменена на ВАЗ-2106'
  } else if (a === 4) {
    car.innerText = 'ВАЗ-2115'
    newLi.innerText = 'Модель машины изменена на ВАЗ-2115'
  } else {
    car.innerText = 'ВАЗ-2329'
    newLi.innerText = 'Модель машины изменена на ВАЗ-2329 (вам очень повезло)'
  }
  ul.appendChild(newLi)
}
