// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b

function remainderOfTheDivision(a, b) {
    return a % b
}

console.log(remainderOfTheDivision(50, 3))

/*
Даны переменные a и b. Проверьте, что a делится без остатка на b.
    Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком'
    и остаток от деления.   */


function remainderOfTheDivision2(a, b) {
    if (a % b === 0) {
        console.log(`Делится без остатка, результат деления ${a % b}`)
    } else {
        console.log(`Делится с остатком, остаток ${a % b}`)
    }
}

console.log(remainderOfTheDivision2(50, 3))

// Возведите 2 в 10 степень. Результат запишите в переменную st.

function exponentiation(num, pow) {
    return Math.pow(num, pow)
}

console.log(exponentiation(2, 10))

// Найдите квадратный корень из 245.

function squareRoot(num) {
    return Math.sqrt(num)
}

console.log(squareRoot(245))

/*Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

const arr = [4, 2, 5, 19, 13, 0, 10]
const pow = 3

function squareRootOfTheSumOfCubes(arr, pow) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], pow)
    }
    return Math.sqrt(sum)
}

console.log(squareRootOfTheSumOfCubes(arr, pow))

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

function squareRootRoundedOff(num) {
    let arr = []
    arr.push(Math.round((Math.sqrt(num))))
    arr.push(Math.sqrt(num).toPrecision(2))
    arr.push(Math.sqrt(num).toFixed(3))
    return arr
}

console.log(squareRootRoundedOff(379))

/*
Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
    запишите результаты округления в объект с ключами 'floor' и 'ceil'.*/

function squareRootRoundedOff2(num) {
    let arr = []
    arr.push(Math.floor(Math.sqrt(num)))
    arr.push(Math.ceil(Math.sqrt(num)))
    return arr
}

console.log(squareRootRoundedOff2(587))

// Нахождение максимального и минимального числа

const arr1 = [4, -2, 5, 19, -130, 0, 10]

function getMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(getMax(arr1))

function getMin(arr) {
    return Math.min.apply(null, arr);
}

console.log(getMin(arr1))