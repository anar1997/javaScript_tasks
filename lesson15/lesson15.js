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
let tarih = new Date();
let year2 = tarih.getFullYear();
let month = tarih.getMonth()+1;
let day = tarih.getDate();
let hour = tarih.getHours();
let minutes = tarih.getMinutes();

hour < 10 ? '0'+hour : hour
minutes < 10 ? '0'+minutes : minutes

console.log(`${year2}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${year2} ${hour}:${minutes}`);
console.log(`${day}/${month}/${year2} ${hour}:${minutes}`);
//////////////////