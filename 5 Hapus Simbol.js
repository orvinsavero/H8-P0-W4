function hapusSimbol(str) {
  // you can only write your code here!
  var alpha = 'abcdefghijklmnopqrstuvwxyz'
  var num = '0123456789'
  var output = ''
  var i = 0
  while (i < str.length){
      var j = 0
      while (j < alpha.length || j < num.length){
          if (str[i] == alpha[j] || str[i] == num[j]){
            output += str[i]
          }
          j++
      }
      i++
  }
  return output
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100