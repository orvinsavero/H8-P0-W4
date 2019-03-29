function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angka2 = angka.toString()
    if (angka2.length == 1){
        return Number(angka)
    }
    else {
        var jumlah = 1;
        for (var i = 0; i < angka2.length; i++) {
          jumlah = jumlah * Number(angka2[i]);
        }
        return kaliTerusRekursif(jumlah);
      }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6