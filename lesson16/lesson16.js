let a = []
let a1 = [1, 2, 3, 4, 5]
console.log(a1.length);
console.log(a1[0]);
console.log(a1[2]);
console.log(a1[4]);
//////
let mixedDataTypes = [5, "Anar", true, 120, "pc", 200]
console.log(mixedDataTypes.length);
////
let ItCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
console.log(ItCompanies);
console.log(ItCompanies.length);
console.log(ItCompanies[0]);
let centre = parseInt(ItCompanies.length / 2)
console.log(ItCompanies[centre]);
console.log(ItCompanies[ItCompanies.length - 1]);
console.log(ItCompanies.join());
console.log(ItCompanies.join().toUpperCase());
console.log(`${ItCompanies.slice(0, ItCompanies.length - 1)} and ${ItCompanies[ItCompanies.length - 1]} are IT companies.`);
if (ItCompanies.indexOf('Apple') !== -1) {
    console.log('Apple');
} else {
    console.log('not found');
}
console.log(ItCompanies.sort());
// console.log(ItCompanies.reverse());
// console.log(ItCompanies.slice(0, 3));
console.log(ItCompanies.slice(ItCompanies.length - 3, ItCompanies.length));
console.log(ItCompanies.slice(ItCompanies.length / 2, ItCompanies.length));
console.log(ItCompanies.shift());
console.log(ItCompanies.splice(ItCompanies.length / 2, 1));
console.log(ItCompanies.pop());
console.log(ItCompanies.splice(0));
console.log(ItCompanies);
//////////////////////////////////////////////////////////
let text =

    'I like teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let text2 = text.replace(/[.,]/g, " ")
console.log(text2);
let words = text.split(' ')
console.log(words);
console.log(words.length);
//////////////////
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart);
console.log(shoppingCart.push('Sugar'));
console.log(shoppingCart.pop());
console.log(shoppingCart.indexOf('Tea'));
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart);
///////
let countries = ['dagestan', 'azerbaijan', 'filippin', 'ethiopia']
if (countries.indexOf('ethiopia')) {
    console.log('ETHIOPIA');
}
///////////
let webTechs = ['css', 'html', 'js', 'react', 'redux', 'node']  
if (webTechs.indexOf('Sass') == -1) {
    webTechs.push('Sass')
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);
///////////////////
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
console.log(ages[0]);
console.log(ages[ages.length - 1]);

const midyanIndex = Math.floor(ages.length / 2)
if (ages.length % 2 === 0) {
    console.log(midyan = (ages[midyanIndex - 1] + ages[midyanIndex]) / 2);
} else {
    console.log(midyan = ages[midyanIndex]);
}
///////////////
let total = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]
console.log(total / ages.length);
////////////
console.log(ages[ages.length - 1] - ages[0]);
//////////////////////
console.log(Math.abs(ages[0] - total / ages.length));
console.log(Math.abs(ages[ages.length - 1] - total / ages.length));
///////////////
const olkeler = ['Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras'
]

console.log(olkeler.slice(0, 10));
////////////////
let ortadakiUlkeler;
if (olkeler.length % 2 !== 0) {
    let ortaIndex = Math.floor(olkeler.length / 2)
    console.log(ortadakiUlkeler = olkeler[ortaIndex]);
} else {
    let ortaIndex = olkeler.length / 2
    console.log(
        ortadakiUlkeler = [olkeler[ortaIndex], olkeler[ortaIndex - 1]]
    );

}
///////////////
if(olkeler.length % 2 !==0){
    let ortaIndex = Math.floor(olkeler.length / 2)
    let olkeler1 = olkeler.slice(0, ortaIndex)
    let olkeler2 = olkeler.slice(ortaIndex, olkeler.length-1)
    console.log(olkeler1);
    console.log(olkeler2);
}else{
    let ortaIndex = olkeler.length / 2
    let olkeler1 = olkeler.slice(0, ortaIndex)
    let olkeler2 = olkeler.slice(ortaIndex, olkeler.length-1)
    console.log(olkeler1);
    console.log(olkeler2);   
}

/*
LOOPS
*/

let i =0
 while(i<=10){
    console.log(i);
    i++
 }

 let j = 0

 do{
    console.log(j);
    j++
 }while(j<=10)
//////////////////

let n = 12
for(let i = 0; i<=n; i++){
    console.log(i);    
}
///////////////
for (let i=0; i<=10; i++){
    console.log(`${i}*${i} = ${i*i}`);
}
///////////////////
console.log('i    i^2   i^3');
for (let i = 0; i <=10; i++) {
    let kvadrat = i*i
    let kub = i*i*i
    console.log(`${i}    ${kvadrat}    ${kub}`);  
}
///////////////////
for(i=0; i<=100; i++){
    if(i%2 ===0){
        console.log(i);
    }
}
///////////////////
for(i=0; i<=100; i++){
    if(i%2 !==0){
        console.log(i);
    }
}
/////////////////
let cem = 0
for(i=0; i<=100; i++){
    cem+=i;
}
console.log(cem);
///////////////
let toplam = 0
for(i=0; i<=100; i++){
    if(i%2 !==0){
        toplam+=i
    }
}
console.log(toplam);
///////////////
let toplam2 = 0
for(i=0; i<=100; i++){
    if(i%2 ===0){
        toplam2+=i
    }
}
console.log(toplam2);
////////////////////
let toplam3 = 0
for(i=0; i<=100; i++){
    toplam3+=i
} 
console.log(toplam3);
//////////////////////////////
let arr = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let arr1=[]
for(let i=0; i<arr.length;i++){
   arr1.push(arr[i].length);   
}
console.log(arr1);
////////////////////
let arr2 = []
for(let i=0; i<arr.length;i++){
    let country = arr[i].charAt()+arr[i].slice(1).toLowerCase()
    let firstThree = arr[i].slice(0,3).toUpperCase()
    let length = arr[i].length
    arr2.push([country, firstThree,length])
}
console.log(arr2);
//////////////////////////
let arr3 = []
for(let i=0; i<arr.length;i++){
    if(arr[i].toLowerCase().includes('land')){
        arr3.push(arr[i])
    }
}
console.log(arr3);
/////////////////////////
let arr4 = []
for(let i=0; i<arr.length;i++){
    if(arr[i].toLowerCase().includes('ia')){
        arr4.push(arr[i])
    }
}
console.log(arr4);
////////////////////
let countryLongest = arr[0]
for(let i=0; i<arr.length;i++){
    if(arr[i].length>countryLongest.length){
        countryLongest=arr[i]
    }
}
console.log(countryLongest);
///////////////////////
let arr5=[]
for(let i=0; i<arr.length; i++){
    if(arr[i].length==5){
        arr5.push(arr[i])
    }
}
console.log(arr5);
//////////////////////
let sortedCountries = [];
sortedCountries=olkeler.slice();
sortedCountries.sort()
console.log(sortedCountries);
///////////////////
webTechs.sort();
console.log(webTechs);
//////////////////////
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
mernStack.sort();
console.log(mernStack);
////////////////////
let arr6 = []
for(let i=0; i<olkeler.length; i++){
    if(olkeler[i].includes('land')){
        arr6.push(olkeler[i])
    }
}
console.log(arr6);
/////////////////////
let longestCountry = olkeler[0]
for (let i = 0; i < olkeler.length; i++) {
    if(olkeler[i].length>longestCountry.length){
        longestCountry = olkeler[i]
    }    
}
console.log(longestCountry);
////////////////////////////////////
let arr7 = []
for (let i = 0; i < olkeler.length; i++) {
        if (olkeler[i].length == 4) {
            arr7.push(olkeler[i])
        }
}
console.log(arr7);
///////////////////////////
let arr8 = []
for(let i=0; i<olkeler.length;i++){
    if(olkeler[i].includes(' ')){
        arr8.push(olkeler[i])
    }
}
console.log(arr8);
/////////////////////
let arr9 = []
for (let i = olkeler.length-1; i >= 0; i--) {
    arr9.push(olkeler[i].toUpperCase())
}
console.log(arr9);
    