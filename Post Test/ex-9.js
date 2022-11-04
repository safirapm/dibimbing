function likes(names) { 
  let = names
    switch(names.length){  // menggunakan names.length sbg expression 
    // menggunakan switch statement karena lebih efisien untuk value banyak
    case 0: 
      return 'no one likes this'; 
      /* menggunakan return yang dapat diekseskusi karena function
      tanpa menggunakan break karena sudah ada return yang mengembalikan value */
    case 1: 
      return names[0] + ' likes this';
    case 2: 
      return names[0] + ' and ' + names[1] + ' like this';
    case 3: 
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    default: 
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
      }
    }
    
    console.log(likes([]));
    console.log(likes(["Peter"]));
    console.log(likes(["Jacob", "Alex"]));
    console.log(likes(["Max", "John", "Mark"]));
    console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

