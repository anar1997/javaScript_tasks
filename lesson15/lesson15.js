let firstName = "Anar";
let lastName = "Quliyev";
let country = "Azerbaijan";
let city = "sumgait";
let age = "27";
let isMarried = "no";
let year = "2024"
console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year));
//////////////
console.log('10'===10);
console.log(parseInt('9.8')==10);
//////////////////
let a = 4>3
let b = 11>4
let c = 30<200
console.log(a, b ,c);
let d = 22<13
let f = 29<20
let g = 30 > 44
console.log(d,f,g);
/////////////
console.log("python".length > "jargon".length);
///////////
console.log(!(false));
///////////////
let tarix = new Date();
console.log(tarix);
let il = tarix.getFullYear()
console.log(il);
console.log(tarix.getMonth()+1);
console.log(tarix.getDate());
console.log(tarix.getDay());
console.log(tarix.getHours());
console.log(tarix.getMinutes());
console.log(tarix.getTime());
/////////////////////
// let taban = prompt('ucbucagin tabanini yazin:')
// let yukseklik = prompt('ucbucagin yukleksiligini yazin:')
// let alan = 0.5 * taban * yukseklik
// console.log(alan);
/////////////////////////
// let aKenari = prompt('ucbucagin a kenarini yazin:')
// let bKenari = prompt('ucbucagin b kenarini yazin:')
// let cKenari = prompt('ucbucagin c kenarini yazin:')
// let perimetr = parseInt(aKenari) + parseInt(bKenari) + parseInt(cKenari)
// console.log(perimetr);
////////////////////////
// let uzunluk = prompt('uzunlugunu yazin:')
// let genislik = prompt('genisliyini yazin:')
// let alanDikdortgen = uzunluk * genislik
// console.log(alanDikdortgen);
/////////////////////
// let r = prompt('radiusu qeyd edin:')
// let alanDaire = 3.14 * r * r
// let cevre = 2 * 3.14 * r
// console.log(alanDaire);
// console.log(cevre);
//////////////////////
// let howHours = prompt('nece saat islediginizi yazin:')
// let howPer = prompt('saatbasina ne qeder oran aldiginizi yazin:')
// let earning = howHours * howPer
// console.log(earning);
///////////////////////
let myName = 'Anar'
if(myName>7){
    console.log('adiniz uzundur');
}else{
    console.log('adiniz qisadir');
}
////////////////////////
let yourName = 'Asabeneh'
let yourlastName = 'Yetayeh'
yourName.length > yourlastName.length ? console.log('Your first name, Asabeneh is longer than your family name, Yetayeh') : console.log('...');
///////////////////////
let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you.`);
///////////////////
let living = prompt('Enter number of years you live')
console.log(living * 365 * 24 * 60 *  60);
/////////////////
// let tarih = new Date();
// let year2 = tarih.getFullYear();
// let month = tarih.getMonth()+1;
// let day = tarih.getDate();
// let hour = tarih.getHours();
// let minutes = tarih.getMinutes();

// hour < 10 ? '0'+hour : hour
// minutes < 10 ? '0'+minutes : minutes

// console.log(`${year2}-${month}-${day} ${hour}:${minutes}`);
// console.log(`${day}-${month}-${year2} ${hour}:${minutes}`);
// console.log(`${day}/${month}/${year2} ${hour}:${minutes}`);
// //////////////////

// let myAge = '27'
// let yourAge = prompt('enter your age:')

// if (yourAge > myAge) {
//     console.log(`benden ${yourAge - myAge} yas buyuksunuz`);
// } else if (yourAge < myAge) {
//     console.log(`benden ${myAge - yourAge} yas kucuksunuz`);
// } else {
//     console.log('...');
// }
// //////////////////
// let a = 4
// let b = 3
// if (a > b) {
//     console.log('a b-den buyukdur');
// } else {
//     console.log('a b-den kucukdur');
// }
// ///////////
// let rakam = prompt('sayi giriniz')
// console.log(rakam % 2 == 0 ? `${rakam} is even number` : `${rakam} is odd number`);
// ///////////////
// let puan = prompt('puaninizi yazin')
// // puan = Number(puan)
// if(puan >= 80 && puan <= 100){
//     console.log('A');
// }else if(puan >= 70 && puan <= 79){
//     console.log('B');
// }else if(puan >= 60 && puan <= 69){
//     console.log('C');
// }else if(puan >= 50 && puan <= 59){
//     console.log('D');
// }else if(puan >= 0 && puan <= 49){
//     console.log('F');
// }else{
//     console.log('...');
// }
// ///////////////////
// let month = prompt('hansi aydasiniz?').toLowerCase()
// if(month==='Eylül'||month==='Ekim'||month==='Kasim'){
//     console.log('mevsim sonbahardır.');
// }else if(month==='Aralık'||month==='Ocak'||month==='Şubat'){
//     console.log('mevsim kıştır.');
// }else if(month==='Mart'||month==='Nisan'||month==='Mayıs'){
//     console.log('mevsimi bahardır');
// }else if(month==='Haziran'||month==='Temmuz'||month==='Ağustos'){
//     console.log('mevsim yazdır');
// }
// else{
//     console.log('ayın adını doğru qeyd edin');
// }
// //////////////////////
// let day = prompt('What is the day  today?').toLowerCase()
// if(day==='saturday'||day==='sunday'){
//     console.log(`${day} is a weekend.`);
// }else if(day==='monday'||day==='tuesday'||day==='Wednesday'||day==='Thursday'||day==='Friday'){
//     console.log(`${day} is a working day.`);
// }else{
//     console.log('...');
// }
// ///////////////
// let whichMonth = prompt('hansi ay?').toLowerCase()
// if(whichMonth==='january'){
//     console.log('January has 31 days.');
// }else if(whichMonth==='february'){
//     console.log('February has 28 days.');
// }else{console.log('...');
// }