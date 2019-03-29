function meleeRangedGrouping(str) {
  //your code here
  var i = 0;
  var arr2 = [];
  var kata = "";
  var a = '-'
  var b = ','
  while (i < str.length) {
 
    if (!(str[i] == a || str[i] == b)) {
      kata += str[i];
    }
    if (str[i] == "-" || str[i] == ",") {
      arr2.push(kata);
      var kata = "";
    } 
    else if (i == str.length - 1) {
      arr2.push(kata);
    }

    i++;
  }

  
  var arr3 = [];
  var arr4 = [];
  var arr5 = [];
  var i = 0
  while (i < arr2.length){
      if (arr2[i] == 'Ranged'){
        arr3.push(arr2[i-1])
      }
      else if (arr2[i] == 'Melee'){
        arr4.push(arr2[i-1])
      }

      i++
}
    if (arr3.length != 0){
    arr5.push(arr3)
    arr5.push(arr4)
    }
  return arr5;
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
