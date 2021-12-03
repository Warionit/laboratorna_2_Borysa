function randomInteger(min, max) {
  // випадкове число від min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand); /*округлення до меншого*/
}

function fLoveScore () {
let love_score = randomInteger(1, 100);/*визначення випадкового проценту*/

let name1 = prompt("Введіть своє ім'я"); /*ввведеня імен*/
let name2 = prompt("Введіть ім'я своєї половинки");

alert(name1 + ", ваша сумісність з " + name2 + " = " + love_score + "%"); /*результат*/
}

function calculatorBMI (mass, height) { /*калькулятор відношення росту до ваги*/
	let result = mass / height**2; /*загуглив формулу і приблизно визначив нормальні межі результату*/
	if (result <= 30 && result >= 20) {
		console.log("Ваш індекс ваги до росту в нормі та = " + result); /*виведення в консоль*/
	} else if (result <= 20 && result >= 15) {
		console.log("Вашої ваги трішки недостатньо відносно вашого росту, а індекс = " + result);
	} else if (result <= 15) {
		console.log("Вашої ваги критично невистачає відносно вашого росту, а індекс = " + result);
	} else if (result <= 35 && result >= 30) {
		console.log("Вашої ваги трішки забагато відносно вашого росту, а індекс = " + result);
	} else if (result <= 50 && result >= 35) {
		console.log("Ваша вага занадто велика відносно вашого росту, а індекс = " + result);
	} else console.log("Введено недопустимі дані")
}


function leapYear (year) { /*визначення чи є рік високосним*/
	if (year % 400 == 0 ) { /*визначення чи залишається остача при діленні*/
	 	console.log(year + " є високосним роком");
	} else if (year % 100 == 0) {
		console.log(year + " не є високосним роком");
	} else if(year % 4 == 0) {
				console.log(year + " є високосним роком");
	} else {
		console.log(year + " не є високосним роком");
	}
}


function randBuy (arr) { /*рандомно вибирає того хто заплатить за каву*/
	num = randomInteger(0, arr.length - 1);
	console.log("Сьогодні за каву платить: " + arr[num]); /*пропонуємо користувачеві ввести цілий масив, заради того що б не обмежувати його в кількості введених імен*/
}

	let num = 100;
	let name = "Borys";
	let surname = "Solonynchyk";
	let nameSurname = "Borys Solonynchyk";

function giveNum1 () {
	
	if (num >= 1) {
		if (num % 3 == 0 && num % 5 == 0) {
			console.log(nameSurname);
			num--;
			giveNum ()
		} else if (num % 5 == 0) { 
			console.log(surname);
			num--;
			giveNum ()
		} else if ( num % 3 == 0) {
			console.log(name);
			num--;
			giveNum ()
		} else {
			console.log(num--);
			giveNum ()
		}
	}
}

function giveNum2 () {
	while (num >= 1) {
		if (num % 3 == 0 && num % 5 == 0) {
			console.log(nameSurname);
		} else if (num % 5 == 0) {
			console.log(surname);
		} else if ( num % 3 == 0) {
			console.log(name);
		} else {
			console.log(num);
		}
	num--
	}
}

function giveNum3 () {
	for (; num >= 1; num--) {
		if (num % 3 == 0 && num % 5 == 0) {
			console.log(nameSurname);
		} else if (num % 5 == 0) {
			console.log(surname);
		} else if ( num % 3 == 0) {
			console.log(name);
		} else {
			console.log(num);
		}
	}
}
function botles () {
	let n = 99;
	while ( n >= 1 ) {
		if (n != 1) {
			console.log( n + " bottles of beer on the wall," );
			console.log( n + " bottles of beer." );
			console.log( " Take one down and pass it around," );
			console.log( --n + " bottles of beer on the wall." )
		} else {
			console.log( n + " bottles of beer on the wall," );
			console.log( n-- + " bottles of beer." );
			console.log( " Take one down and pass it around," );
			console.log(  "no more bottles of beer on the wall." )
			console.log( "No more bottles of beer on the wall," );
			console.log( "no more bottles of beer." );
			console.log( "Go to the store and buy some more," );
			console.log( "99 bottles of beer on the wall." );
		}
	}

}
function fibonacci(number) {
	let arr = [];
	
	for(let num = 0; num < number; num++) {
		arr.push(num);
	}
			console.log(arr);
}
/*Об'яснення як користуватися функціями*/
console.log("fLoveScore()")
/*fLoveScore();*/

console.log("calculatorBMI(mass, height)");
/*calculatorBMI(mass, height);*/

console.log("leapYear(year)");
/*leapYear(2000);*/

console.log("RandBuy([name1, name2, ... , name n])");
/*randBuy(["bodya", "borys", "Sasha", "Sophia"]);*/

console.log("giveNum1()")
/*giveNum2();*/

console.log("botles()")
/*botles()*/

console.log("fibonacci(number)")
/*fibonaci(5);*/

let value1 = randomInteger(1, 6); /*що випало першму гравцю*/

let value2 = randomInteger(1, 6); /*другому*/
/*одержання елементів в змінні за допомогю id*/
let acube1 = document.getElementById("a1");
let acube2 = document.getElementById("a2");
let acube3 = document.getElementById("a3");
let acube4 = document.getElementById("a4");
let acube5 = document.getElementById("a5");
let acube6 = document.getElementById("a6");

let bcube1 = document.getElementById("b1");
let bcube2 = document.getElementById("b2");
let bcube3 = document.getElementById("b3");
let bcube4 = document.getElementById("b4");
let bcube5 = document.getElementById("b5");
let bcube6 = document.getElementById("b6");

let win1 = document.getElementById("win1")
let win2 = document.getElementById("win2")
let draw = document.getElementById("draw")
/*Присвоєння стилю дисплей значення, в залежності від того яке з визначень правильне*/
draw.style.display = (value1 == value2) ? "block" : "none";
win1.style.display = (value1 > value2) ? "block" : "none";
win2.style.display = (value2 > value1) ? "block" : "none";
/*вирішує який з кубиків має бути показаним в залежності що випало в рандомі першог куба*/
if (value1 == 1) {
	acube1.style.display = "block";
} else if (value1 == 2) {
	acube2.style.display = "block";
} else if (value1 == 3) {
	acube3.style.display = "block";
} else if (value1 == 4) {
	acube4.style.display = "block";
} else if (value1 == 5) {
	acube5.style.display = "block";
} else if (value1 == 6) {
	acube6.style.display = "block";
}
/*другого*/
if (value2 == 1) {
	bcube1.style.display = "block";
} else if (value2 == 2) {
	bcube2.style.display = "block";
} else if (value2 == 3) {
	bcube3.style.display = "block";
} else if (value2 == 4) {
	bcube4.style.display = "block";
} else if (value2 == 5) {
	bcube5.style.display = "block";
} else if (value2 == 6) {
	bcube6.style.display = "block";
}