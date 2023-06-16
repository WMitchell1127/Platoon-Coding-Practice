// function fullName(firstName, lastName) {   
//      return `${firstName} ${lastName}`
//   }  
  
//   // ---- TESTS - don't change these ---- //
//   console.log(fullName('Michael', 'Jordan') === 'Michael Jordan')
//   console.log(fullName('Tom', 'Prete') === 'Tom Prete')
//   console.log(fullName('Ada', 'Lovelace') === 'Ada Lovelace')


 // $$$$$$$$$$ Total Change Due $$$$$$$$$$$$$$$$
  function multiply(num1, num2) {
    return num1 * num2
  }
  
  // Passing in a function's value as an argument
  // console.log(multiply(7,20)) // 140

  // function subtractNum(num3, num4){
  //   return +(num3 - num4).toFixed(2)
  // }
  // console.log(subtractNum(10,5))
  // console.log(subtractNum(10, 7.28))

  // %%%%%%%%%%%%%%%%%%%%%%%% Convert to Hours(type) $$$$$$$$$$$$$$$$$$$$$$
   function toHours(minutes){
     return (minutes / 60).toFixed(2)
   }

  //  console.log(toHours(600))

  //  console.log(toHours(45)) // => 0.75
  //  console.log(toHours(75)) // => 1.25
  //  console.log(toHours(125)) // => 2.083

   // $$$$$$$$$$$$$$$$$$$$$$$ Mortgage Payment (types) $$$$$$$$$$$$$$$$$$$$

   function mortgagePayment(amountInvested, annualInterest) {
    // write your code here
    return amountInvested * annualInterest
  }
  
  
  // console.log(mortgagePayment(100000,.05)) // => 5000
  // console.log(mortgagePayment(15000,.085)) // => 1275

  // $$$$$$$$$$$$$$$$$$$$$ Converting to Hours and Minutes(type) $$$$$$$$$$$$$$$$

   function hoursMinutes(minutes) {
    // write your code here
    let hours = Math.floor(minutes/60);
    let totalMinutes = minutes % 60;
  
    return (`${hours} hours and ${totalMinutes} minutes`) 
  }
  
  // Tests
  console.log(hoursMinutes(125)) // === '2 hours and 5 minutes');
  // console.log(hoursMinutes(75)) // === '2 hours and 55 minutes');
  // console.log(hoursMinutes(55)) // => '0 hours and 55 minutes'
  // console.log(hoursMinutes(121)) //  => '2 hours and 1 minute'
  
  // ---------- Platoon Code Camp answer --------------
  // function hoursMinutes(minutes) {
  //   let hours = Math.floor(minutes/60)
  //   let remainingMin = minutes-(hours*60)
  //   if (hours === 0) {
  //     return `${hours} hours and ${remainingMin} minutes`
  //   } else if (remainingMin === 1) {
  //     return `${hours} hours and ${remainingMin} minute`
  //   } else if (remainingMin === 0) {
  //     return `${hours} hours and ${remainingMin} minutes`
  //   } else {
  //     return `${hours} hour${hours>1 ? 's' : ''} and ${remainingMin} minutes`
  //   }
  // }

  // console.log(hoursMinutes(130))

  // %%%%%%%%%%%%%%%%%%%%%%% Total area of Right Triangle %%%%%%%%%%%%%%%%%%%
      // **Area Formula**
      // A=(1/2)∗(base)∗(height)

      function totalArea(base, height){
        let area = .5 * base * height
        return `Total area = ${area}`
      }

      console.log(totalArea(2, 2)) // === 2
      console.log(totalArea(1, 1)) // === 0.5

    // $$$$$$$$$$$$$ Coding Platoon Answer $$$$$$$$$$$$$$$$$$$  
      // function rightTriangle(base, height) {
      //   return .5 * base * height
      // }

  // $$$$$$$$$$$$$$$$$$$     


