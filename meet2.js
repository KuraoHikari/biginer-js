// let namaKampus = "Primakara";

// console.log(namaKampus, "<--- ini di lane 2");

// namaKampus = "PrimeU";

// // const namaUkm = "Primakara Developers";
// // // namaUkm = "futsal";

// console.log(namaKampus, "<--- ini di lane 10 setelah re assign");
// // console.log(namaUkm);

// let namaKucing;

// let umurKucing = 10;

// console.log(typeof namaKucing);

// namaKucing = "ucel";
// console.log(typeof namaKucing);
// console.log(typeof umurKucing);

// let diaAdalah_Ucing = true;
// let diaAdalahTikus = false;
// console.log(diaAdalah_Ucing);
// console.log(diaAdalahTikus);
// console.log(typeof diaAdalah_Ucing);
// console.log(typeof diaAdalahTikus);

// let nilaiAkhir = 4 + 10 - 10; //4
// nilaiAkhir = nilaiAkhir * 2; // 4 * 2 = 8

// console.log(nilaiAkhir);

// ===
// console.log(5 === "5");
// console.log("aku mandi di jepang" === "aku mandi di jepang");
// ==
// console.log(5 == "5");
// !==
// console.log(5 !== "5");
// // !=
// console.log(5 != "5");
//>
// console.log(7 > 6);
// //<
// console.log(5 < 6);
// >=
// console.log(5 >= 5);
// //<=
// console.log(5 <= 5);

//AND &&
// console.log(5 === 5 && 5 < 2);
// //||
// console.log(5 === 6 || 5 < 2);
//!
// console.log(!false);

// pengkondisian
// if (5 === 5 && 5 > 2) {
//  console.log("iya benar masuk ke if");
// } else {
//  console.log("jadi masuk ke else");
// }

// for (let i = 0; i < 5; i = i + 1) {
//  //0
//  console.log(i);
// }

function menghitungLuasPersegiPanjang(panjang, lebar) {
 return panjang * lebar;
}

console.log(menghitungLuasPersegiPanjang(10, 2));

const arrowMenghitungLuasPersegiPanjang = (p, l) => {
 return p * l;
};

console.log(arrowMenghitungLuasPersegiPanjang(5, 8));
