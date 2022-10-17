let books = new Set();

books.add("dssd");
books.add("fdfddfdf");
books.add("fg  grgr gr").add("oliver");
books.delete("oliver");

books.forEach(function(item){
console.log(item);

})

console.log("has fdffgg", books.has("oliver"));