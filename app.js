let display = document.querySelector('.display');

// console.log(display);

// let buttons = Array.from(document.getElementsByClassName('button'));
let buttons = Array.from(document.querySelector('.buttons').children);

// buttons.map( button => {
// 	button.addEventListener(('click'), (e) => {
// 		console.log('clicked')
// 		console.log(e);
// 		console.log(e.target);
// 	})
// })

// console.log(buttons)

buttons.forEach((button) => {
	button.addEventListener(('click'),(e) => {
		// console.log('clicked')
		// console.log(e);
		// console.log(e.target);
		switch(e.target.textContent) {
			case 'C':
			display.innerText = '';
			break;

			case '←':
			display.innerText = display.innerText.slice(0,-1);
			break;

			case '=':
			try {
				display.innerText = eval(display.innerText);
			} catch {
				alert('Not a valid operation');
			}
			break;
			
			default:
			display.textContent += e.target.textContent;
			break;
		}	
	})
})