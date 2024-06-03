//promise and fecth

fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then((res) => {
  //   console.log("sukses", res);
  return res.json();
 })
 .then((data) => {
  console.log("sukses convert ke data json", data);
 })
 .catch((err) => {
  console.log("Masuk ke error", err);
 });
