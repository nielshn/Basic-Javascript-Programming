/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Tulis kode di bawah ini
const minimal = (a, b) => {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(minimal(1, 4))

// 2.
const findIndex = (array, number) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) { // jika element array ==== number parameter
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 3)); // output: 2
console.log(findIndex([1, 2, 3, 4, 5], 6)); // output: -1
console.log(findIndex([1, 2, 3, 4, 5], 5)); // output: 4

function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);
function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));