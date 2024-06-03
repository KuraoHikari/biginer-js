let books = [
 {
  id: 1,
  bookName: "The Lord of the Rings",
  bookPage: 1178,
  author: "J.R.R. Tolkien",
  releaseYear: 1954,
  stock: 10,
 },
 {
  id: 2,
  bookName: "Harry Potter and the Philosopher's Stone",
  bookPage: 223,
  author: "J.K. Rowling",
  releaseYear: 1997,
  stock: 15,
 },
 {
  id: 3,
  bookName: "The Hunger Games",
  bookPage: 374,
  author: "Suzanne Collins",
  releaseYear: 2008,
  stock: 12,
 },
];

// buatlah function untuk mengubah stock dari buku tersebut
// stok akan berkurang 1 setiap function di jalankan,
// dan user perlu memasukan nama dari buku yang akan diubah di parameter functionnya

function reduceStock(bookName) {
 let findBook = false;
 for (let i = 0; i < books.length; i++) {
  if (books[i].bookName === bookName) {
   stok = books[i].stock - 1;
   books[i].stock = stok;
   findBook = true;
   return;
  }
 }
 if (findBook === false) {
  console.log("buku tidak ditemukan");
 }
}

console.log(books);

console.log("===========");
reduceStock("The Hunger Games");
reduceStock("the Hunger"); // tidak mengurangi stok dan memberi return console "buku tidak ditemukan"
reduceStock("The Lord of the Rings");

console.log(books);
