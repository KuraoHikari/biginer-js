//buatlah sebuah fungsi yang bernama ganjilGenap yang menerima parameter n yang merupakan bilangan bulat positif
//dimana fungsi ini akan menampilkan
//"nilai n adalah ganjil" jika nilai n ganjil,
//"nilai n adalah genap" jika nilai n genap,
//fungsi tersebut akan menampilkan pernyataan genap ganjil tersebut sebanyak n
//misalnya
//kita memasukan 3 kedalam parameter ganjilGenap maka output consolnya akan menjadi
//nilai 1 adalah ganjil
//nilai 2 adalah genap
//nilai 3 adalah ganjil

// function ganjilGenap(n) {
//  for (let i = 1; i <= n; i = i + 1) {
//   if (i % 2 === 0) {
//    console.log("nilai " + i + " adalah genap");
//   } else {
//    console.log("nilai " + i + " adalah ganjil");
//   }
//  }
// }

// ganjilGenap(5);

// Buatlah sebuah fungsi bernama cetakSegitiga yang menerima sebuah parameter sisi yang
// merupakan panjang sisi dari sebuah segitiga siku-siku. Fungsi tersebut harus mencetak
// segitiga tersebut ke konsol dengan menggunakan karakter *
// misalnya jika fungsi cetakSegitiga(4) kita running maka hasilnya
// *
// **
// ***
// ****

function cetakSegitiga(n) {
 for (let i = 0; i < n; i++) {
  let tmp = "";
  //  , 1, 2
  for (let j = 0; j < i + 1; j++) {
   tmp = tmp + "*";
  }
  console.log(tmp);
 }
}

cetakSegitiga(5);
