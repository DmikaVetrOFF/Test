// let answers = [],
// 	questions = [
// 	"Как ваше имя?",
// 	"Как ваша фамилия?",
// 	"Сколько вам лет?"
// 	];

// for (let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }

// document.write(answers)

// let age = prompt("Сколько вам лет?");

// if (age > 18) {
// 	alert("Вы можете войті!")
// } else {
// 	alert ("Рановато еще!")
// }

// function calc(a,b) {
// 	console.log(a+b)
// };

// calc(4,5);
// calc(5,5);
// calc(4,15);

function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

function showSkills() {
	let skills = ["html", "css", "photoshop"];

	for(let i = 0; i < skills.length; i++) {
		document.write("Я владею: " + skills[i] + "<br>")
		}		
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			document.write("<br>" + "Поздарвляю у тебя есть шанс стать Веб-разработчиком" + "<br>")
		} else {
			document.write("<br>" + "Печалька, нужно немного подрости" + "<br>")
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num*num)
	}
	calcPow(4);

}

myFirstApp("Dima", 25)