/*
* План занятия
*
* - Методы массивов:
* - sort
* - Чейниг методов
* - [Библиотека lodash](https://github.com/lodash/lodash)
*/

/*
* Array.prototype.soft(callback(currentEl, nextEl()))
* - Сортирует и ИЗМЕНЯЕТ оригинальный массив
* - По умолчинию:
* - сортирует по возростанию
* - приводит элементы к строке и сортирует по Unicode(https://unicode-table.com/en/)
*/

const numbers = [1, 9, 6, 2, 3]
// numbers.sort()
// console.log(numbers)

const letters = ['b', 'B', 'a', 'A']
// letters.sort()
// console.log(letters)

// Мы работаем с массивом обьектов и sort без callback не очень полезный

/*
* compareFunction - функция сравнения (callback)
* Элементы массива сортируются в соответствии с ее возращаемым значением
* - элементы compareFunction(A, B) меньше 0, сортировка поставит A перед B
* - элементы compareFunction(A, B) больше 0, сортировка поставит B перед A
* - элементы compareFunction(A, B) вернет 0, сортировка оставит A перед B на
* неизменными по отношению друг к другу, но отсортирует их по отношению к ко всем другим элементам
*/

// Сортирует по возростанию
// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });

// console.log(numbers);

// А если нужно сзелать по убыванию?
// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl
// })

// console.log(numbers)
// Мы сортировали оригинальный массив

/*
* Как сделать копию массива чтобы не сортировать оригинальный
* Array.prototype.slice()
* - Операция spread
*/

// const copy = [...numbers]
// copy.sort()
// console.log(copy)
// console.log(numbers)

// По убыванию
const descSortedNumbers = [...numbers].sort((a, b) => b - a)
console.log(descSortedNumbers)

// Сортировка по возростанию
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(ascSortedNumbers);

// sort() - он сортирует он ничего не выкидывает он меняет положение элементов в массиве
// если тебе нужно отфильтровать и оставить только какие-то то для этого есть filtr()

// Как сортировать сложные типы (обьекты)?

/*
* Кастомная сортировка сложных типов
*/

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// По игровому времени
const sorteByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
)
console.table(sorteByBestPlayers)

const sorteByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed -nextPlayer.timePlayed 
);
console.table(sorteByWorstPlayers);

// Сортировка по именни первой буквы по алфавиту
const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0]

    if (result) {
        return 1
    }

    if (!result) {
        return -1
    }
})
console.table(byName)

// в 99% случаев вам нужно будет сортировать по числам. У вас будет какой-то массив обьектов
// и в этих обьектах вам необходимо будет по какому-то свойству сортировать вниз или верх

