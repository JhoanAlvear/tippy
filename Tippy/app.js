const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberofpeople = document.getElementById('numberofpeople');
const perpersontotal = document.getElementById('perpersontotal');

let numberOfPeople = Number(numberofpeople.innerText);

const calculateBill = () => {
	const bill = Number(billTotalInput.value);
	const tipPercentage = Number(tipInput.value) / 100;
	const tip = bill * tipPercentage;
	const total = bill + tip;
	const perPersonBill = Math.floor((total / numberOfPeople)*100)/100;
	perpersontotal.innerText = `$${perPersonBill}`;
};

const increasepeople = () => {
	numberOfPeople++;
	calculateBill();
	numberofpeople.innerText = numberOfPeople;
	new Audio('https://cdn.pixabay.com/audio/2021/08/09/audio_9659856a03.mp3').play();
};
const decreasepeople = () => {
	if (numberOfPeople > 1) {
		numberOfPeople--;
		calculateBill();
		numberofpeople.innerText = numberOfPeople;
		new Audio('https://cdn.pixabay.com/audio/2021/08/09/audio_9659856a03.mp3').play();
	}
};

const preventAlphabets = e => {
	const key = e.keyCode;

	if (key >= 65 && key <= 90) e.preventDefault();
};

billTotalInput.addEventListener('keydown', preventAlphabets);
tipInput.addEventListener('keydown', preventAlphabets);
