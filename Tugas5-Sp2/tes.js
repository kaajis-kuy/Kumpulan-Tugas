

dataHandling2 = ["Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
dataHandling2.splice(1, 0, "Elsharawy, Provinsi");



dataHandling2.splice(4, 3, "Pria", "SMA Internasional Metro");
console.log(dataHandling2.join(' '));






//* Mei
//* ["1989", "21", "05"]
//* 21-05-1989
//* Roman Alamsyah */





//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]