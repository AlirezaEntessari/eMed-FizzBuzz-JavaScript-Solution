for (i = 1; i <= 100; i++){                 // iterates over the numbers from 1 to 100 inclusive
    if((i % 3 == 0) && (i % 5 == 0)){       // console.log's FizzBuzz for numbers that are both multiples of 3 and 5     
        console.log("FizzBuzz");            
    }else if (i % 3 == 0){                  // console.log's Fizz for multiples of 3
        console.log("Fizz");
    }else if (i % 5 == 0){                  // console.log's Buzz for multiples of 5
        console.log("Buzz");
    }else{                                  // console.log's the rest of the numbers from 1 to 100
        console.log(i);
    }
}