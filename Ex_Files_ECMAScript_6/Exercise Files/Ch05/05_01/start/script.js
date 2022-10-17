let yell = "woo!";


let party = yell.repeat(5);

console.log (party);


let cat = {
  meow(times){
    console.log ("meow ".repeat(times));
  },
  purr(times){
    console.log("prr ".repeat(times))
  },
  snore (times){
    console.log("zZzZzZ ".repeat(times));
  }

};

cat.meow(3);
cat.purr(3);
cat.snore(3);


