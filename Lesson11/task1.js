function saySmth(phrase, delay) {
    setTimeout(() => {
      console.log(phrase);
    }, delay);
  }
  
  saySmth('Have a nice day!', 1000);