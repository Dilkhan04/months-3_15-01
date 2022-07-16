// const block = document.querySelector(".block");

// let position = 0;
// let topPosition = 0;

// const move = () => {
// 	if (position <= 360 && topPosition == 0) {
// 		position += 16;
// 		block.style.left = `${position}px`;
// 		setTimeout(move, 360);
// 	}
// 	else if (position >= 360 && topPosition <= 360) {
// 		topPosition += 16;
// 		block.style.top = `${topPosition}px`;
// 		setTimeout(move, 360);
// 	} else if (topPosition >= 360 && position != 0) {
// 		position -= 16;
// 		block.style.left = `${position}px`;
// 		setTimeout(move, 360);
// 	} else if (position == 0 && topPosition != 0) {
// 		topPosition -= 16;
// 		block.style.top = `${topPosition}px`;
// 		setTimeout(move, 360);
// 	}
// };
// move();
// // const move = () => {
// // 	if (xPos  < 360 && yPos > 0 ) {
// // 		xPos += 16;
// // 		yPos -= 16;
// // 		block.style.left = `${xPos}px`;
// // 		block.style.bottom = `${xPos}px`;
// // 		setTimeout(move,300)
// // 			}
// // 		}



let i = 0;
function any() {
	i++;
	console.log(i + " сек.");
}

id = setInterval(any, 1000);



// LESSON 2
// ASYNK
// SET TIMEOUT

// console.log("ok");
//
// const hi = () => {
//   console.log("hi");
// };
// setTimeout(hi, 2000);

// () => {} анонимная функция

// setTimeout(() => {
//   console.log("he-he");
// }, 3000);

// 1000 = 1 секунда

// SET INTERVAL

// setInterval(() => {
//   console.log("interval");
// }, 2000);

// const sayHi = () => {
//   console.log("hi, dude");
// };
//
// const interval = setInterval(sayHi, 1000);
// // clearInterval(interval);
//
// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// ========

// const init = () => {
//   let name = "OK";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// };
// init();

const func = (num) => {
	const culk = () => {
		console.log(1000 * num);
	};
	culk();
};

func(24);

const funk = (n) => {
	return function (num) {
		return n + num;
	};
};

const addOne = funk(1);
const addTen = funk(10);

console.log(addOne(10));
console.log(addTen(3));

const block = document.querySelector(".block");

let positionX = 0;
let PositionY = 0;

const move = function () {
	let rad = {
		radius: 180,
		speed: 25
	}
	let f = 0;
	let s = 2 * Math.PI / 180
	setInterval(function () {
		f += s;
		block.style.left = 180 + rad.radius * Math.sin(f) + 'px';
		block.style.top = 180 + rad.radius * Math.cos(f) + 'px';
	}, rad.speed)
}

let counter = 0
requestAnimationFrame(move)