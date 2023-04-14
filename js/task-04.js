// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;


decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});


incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});
console.log(addEventListener);