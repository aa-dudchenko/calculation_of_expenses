const inputs = document.querySelectorAll('input');
const nameInput = document.querySelector('.input-name');
const dateInput = document.querySelector('.input-date');
const numberInput = document.querySelector('.input-number');
const button = document.querySelector('.button');
const table = document.querySelector('.body-row');
const removeBtn = document.querySelectorAll('.remove-button');
const errorText = document.querySelector('h5');

let total = document.querySelector('.sum');

let costs = [];//Массив расходов

// Повесим клик на кнопку
button.addEventListener('click', addItems);

function addItems() {
  if (validationInputs()) {
    const cost = {
      id: Math.floor(Math.random() * 9999999),
      name: nameInput.value,
      date: dateInput.value,
      amount: +(numberInput.value)
    };

    costs.push(cost);

    console.log(costs)
    renderTable()
    calculationAmount()
  }
}

function removeCost(id) {
  costs = costs.filter(cost => cost.id !== id)

  renderTable()
  calculationAmount()
}

function renderTable() {
  table.innerHTML = ``;

  return costs.map((cost) => {
    table.innerHTML += `
      <div class="cost-row">
        <div>
          ${cost.name}
        </div>
        <div>
          ${cost.date}
        </div>
        <div>
          ${cost.amount}
        </div>
        <div class="remove-button">
          <h4 onclick="removeCost(${cost.id})">Удалить</h4>
        </div>
      </div>
    `;
  })
};

function calculationAmount() {
  let initialValue = 0
  console.log(costs.reduce((sum, cost) => console.log(typeof cost.amount)))

  total.innerHTML = costs.reduce((sum, cost) => sum + cost.amount, initialValue)
}

function validationInputs() {
  if (nameInput.value.trim() && dateInput.value && numberInput.value) {
    errorText.style.display = 'none';
    return true
  }

  errorText.style.display = 'block';
  return false
}






















// const costs = [];

// function addItems() {
//   document.querySelector('h5').style.display = 'none';//сообщение 'заполните все поля!'
//   let removingItem = document.createElement('p');//для удаления строки
//   removingItem.innerText = 'убрать';

//   removingItem.addEventListener('click', removeItem => {
//     nameItem.remove();
//     dateItem.remove();
//     numItem.remove();
//     removingItem.remove();
//   });

//   let nameItem = document.createElement('p');
//   let dateItem = document.createElement('p');
//   let numItem = document.createElement('p');
//   if (nameInput.value.trim() && dateInput.value && numberInput.value) {
//     nameItem.innerText = nameInput.value;
//     dateItem.innerText = dateInput.value;
//     numItem.innerText = numberInput.value;// + '₽'
//     nameTable.appendChild(nameItem);
//     dateTable.appendChild(dateItem);
//     numberTable.appendChild(numItem);
//     removingTable.appendChild(removingItem);
//     // Очистить поля после клика
//     inputs.forEach(input => {
//       input.value = null;
//     })
//   } else {
//     document.querySelector('h5').style.display = 'block ';
//   }
// }

// // Повесим смену фокуса на инпуты, при нажатии Enter
// inputs.forEach(input => {
//   input.addEventListener('keypress', changeFocus)
// });

// function changeFocus (event) {
//   if (event.key === 'Enter') {
//     if (event.target == nameInput) {
//       dateInput.focus();
//     }
//     if (event.target == dateInput) {
//       numberInput.focus();
//     }
//     if (event.target == numberInput) {
//       button.focus();
//     }
//   }
// }


// let divNum = document.querySelector('.item-number');
// let numbers = divNum.children;
// function strToNum () {
//   for (item of numbers) {
//   let a = +item.innerText; 
//   console.log(a)
// }}




// // Сделаем функцию суммы всех цен
// let sumSpan = document.querySelector('.sum');
// let numArray = document.querySelectorAll('.item-number p');
// const arr = Array.from(numArray);
// function sum (x){
//   var s = 0;
//   for (i = 0; i < x.length; i++){
//      s += x[i]
//   }
//   return s
// }
// console.log(Array.from(numArray))













