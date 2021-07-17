const thead = document.querySelector('thead')

// находим кликнутый эл
const searchEl = (evt) => {
	evt.preventDefault()
	let th = evt.target
	th.nodeName !== 'TH' ? th = th.parentNode : th
	let index = th.cellIndex

	filterTable(index)
}
// длб обработчик событий
thead.addEventListener('click', searchEl)

// фильтруем таблицу
const filterTable = (index) => {
	const table = document.querySelector('table')
	const tbody = document.querySelector('tbody')

	
	const row = [].slice.call(tbody.rows)

	const filterRow = (rowA, rowB) => {
	return	+rowA.cells[index].innerHTML - +rowB.cells[index].innerHTML	
	}
	row.sort(filterRow)

	for( let i of row){
		tbody.appendChild(i)
	}
}

