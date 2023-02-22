/*
Создадим функцию bound.


*/

let list = ['Kim', 'Anna', 'Jill', 'John', "Alexander", 'Manushak', 'Lilit', "Erjanik"];

let searchText = ''; // тут будут символы которые мы водим, а дальше мы проверим есть ли такой символ в именах людей, если есть, то дайте имена этих людей, т.е. делаем filter.

const root = document.querySelector('#root');
const input = document.querySelector('input');

input.addEventListener('keyup', (event) => {
	searchText = event.target.value; // нажимая на какую-ту кнопку затем отпуская ее, этот символ перезапишется в переменную searchText
	render(); 
})

function render() {
	root.innerHTML = '';

	list.filter((name) => {
		return name.indexOf(searchText) !== -1; // тут говорим, что верни имена тех людей, у которых есть символ searchText
	}).forEach((name) => {
		const div = document.createElement('div');
		div.innerHTML = name;
		root.appendChild(div);
	})
}

render(); // Сразу вызываем эту функцию чтобы, заполучили сразу div-ы, а не после поиска.

// function render() {
// 	root.innerHTML = '';

// 	list.filter((name) => {
// 		return name.indexOf(searchText) !== -1;
// 	}).map((name) => {
// 		const div = document.createElement('div');
// 		div.innerHTML = name;
// 		return div;
// 	}).forEach(el => {
// 		root.appendChild(el);
// 	})
// }








/*
Хотим создать строку поиска, и в поиске искать этих людей по имена, допустим может быть
огромное кол-во людей с именами, и мы хотим отфильтровать.
 */

