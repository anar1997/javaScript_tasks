let myAge = '27'
let yourAge = prompt('enter your age:')

if (yourAge > myAge) {
    console.log(`benden ${yourAge - myAge} yas buyuksunuz`);
} else if (yourAge < myAge) {
    console.log(`benden ${myAge - yourAge} yas kucuksunuz`);
} else {
    console.log('...');
}
//////////////////
let a = 4
let b = 3
if (a > b) {
    console.log('a b-den buyukdur');
} else {
    console.log('a b-den kucukdur');
}
///////////
let rakam = prompt('sayi giriniz')
console.log(rakam % 2 == 0 ? `${rakam} is even number` : `${rakam} is odd number`);
///////////////
let puan = prompt('puaninizi yazin')
// puan = Number(puan)
if(puan >= 80 && puan <= 100){
    console.log('A');
}else if(puan >= 70 && puan <= 79){
    console.log('B');
}else if(puan >= 60 && puan <= 69){
    console.log('C');
}else if(puan >= 50 && puan <= 59){
    console.log('D');
}else if(puan >= 0 && puan <= 49){
    console.log('F');
}else{
    console.log('...');
}
///////////////////
let month = prompt('hansi aydasiniz?').toLowerCase()
if(month==='Eylül'||month==='Ekim'||month==='Kasim'){
    console.log('mevsim sonbahardır.');
}else if(month==='Aralık'||month==='Ocak'||month==='Şubat'){
    console.log('mevsim kıştır.');
}else if(month==='Mart'||month==='Nisan'||month==='Mayıs'){
    console.log('mevsimi bahardır');
}else if(month==='Haziran'||month==='Temmuz'||month==='Ağustos'){
    console.log('mevsim yazdır');
}
else{
    console.log('ayın adını doğru qeyd edin');
}
//////////////////////
let day = prompt('What is the day  today?').toLowerCase()
if(day==='saturday'||day==='sunday'){
    console.log(`${day} is a weekend.`);
}else if(day==='monday'||day==='tuesday'||day==='Wednesday'||day==='Thursday'||day==='Friday'){
    console.log(`${day} is a working day.`);
}else{
    console.log('...');
}
///////////////
let whichMonth = prompt('hansi ay?').toLowerCase()
if(whichMonth==='january'){
    console.log('January has 31 days.');
}else if(whichMonth==='february'){
    console.log('February has 28 days.');
}else{console.log('...');
}