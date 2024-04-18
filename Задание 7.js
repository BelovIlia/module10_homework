let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, undefined, ''];
let even = [];
let odd = [];
let zero = [];

for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && !isNaN(numbers[i])) {
        if (numbers[i] === 0) {
            zero.push(numbers[i]);
        } else if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        } else {
            odd.push(numbers[i]);
        }
    }
}

console.log("Отдельный вывод " + zero);
console.log("Количество чётных элементов: " + even.length);
console.log("Количество нечётных элементов: " + odd.length);