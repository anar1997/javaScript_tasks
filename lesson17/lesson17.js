function fullName(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(fullName('Anar', 'Quliyev'));

function addNumber(num1, num2) {
    let sum = num1 + num2
    return sum
}
console.log(addNumber(1, 5));


function areaOfRectangle(length, width){
    let area = length*width
    return area
}
console.log(areaOfRectangle(5,6));

function perimeterOfRectangle(length, width){
    let perimeter= 2*(length + width)
    return perimeter
}
console.log(perimeterOfRectangle(7,10));

function volumeOfRectPrism(length, width, height){
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(2,3,5));

function areaOfCircle(r){
    let π = 3.14
    let area = π * r * r
    return area
}
console.log(areaOfCircle(10));

function circumOfCircle(r){
    let π = 3.14
    let circumference = 2*π*r
    return circumference
}
console.log(4);

function density(mass, volume){
    let density= mass/volume
    return density
}
console.log(density(40,5));

function findSpeed(distance, j){
    let speed = distance/j
}
console.log(findSpeed(50, 10));

function weight(mass, gravity){
    let weight = mass * gravity
    return weight
}
console.log(weight(5,7));

function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32
    return oF
}
console.log(convertCelsiusToFahrenheit(20));

function BMI(weight, height){
    let bmi = weight  / (height * height)
    return bmi
}

console.log(BMI(60, 170));
if(BMI<18.5){
    console.log('less');
}else if(BMI>18.5 && BMI<24.9){
    console.log('normal');
}else if(BMI>25 && BMI<29.9){
    console.log('overweight');  
}else if(BMI>30){
    console.log('obese');
}
/////////////////////////
// function checkSeason(month){
//     let season
//     if(month == 'sentyabr' || month == 'oktyabr' || month == 'noyabr'){
//         return season = 'autumn'        
//     }else if(month == 'dekabr' || month == 'yanvar' || month =='fevral'){
//         return season = 'winter'
//     }else if(month == 'mart' || month =='aprel' || month =='may'){
//         return season = 'spring'
//     }else if(month == 'iyun' || month =='iyul' || month =='avqust'){
//         return season = 'summer'
//     }
// }
// let month = prompt('ayi daxil edin')
// console.log(checkSeason(month));
///////////////////
function findMax(p1,p2,p3){
    let maxP
    if(p1>p2&&p3){
        return maxP = p1
    }else if(p2>p1&&p3){
        return maxP = p2
    }else if(p3>p1&&p2){
        return maxP = p3
    }
}
console.log(findMax(1,3,4));
////////////////////
function solveLinEquation(a,b,x,c){
    let y = -(a*x+c)/b
    return y
}
console.log(solveLinEquation(1,2,3,4));
/////////////////////
function solveQuadEquation(a=1, b=0, c=0){
    discrimant=b*b-4*a*c
    let root1 = (-b + Math.sqrt(discrimant))/(2*a)
    let root2 = (-b - Math.sqrt(discrimant))/(2*a)
    return {root1, root2}
}
console.log(1,2,2);
/////////////////////
function printArray(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
printArray([1,2,3,4])
////////////////
function showDateTime(){
    let tarix = new Date()
    let month = tarix.getMonth()+1;
    let year = tarix.getFullYear();
    let day = tarix.getDate();
    let hours = tarix.getHours();
    let minutes = tarix.getMinutes();

    let formatedMonth = (month < 10 ? '0' : '') + month;
    let formatedDay = (day < 10 ? '0' : '') + day;
    let formatedHours = (hours<10 ? '0' : '') + hours
    let formatedMinutes = (minutes<10 ? '0' : '') + minutes
    let formatedTarix = `${formatedDay}/${formatedMonth}/${year} ${formatedHours}:${formatedMinutes}`
    console.log(formatedTarix);
}
showDateTime()
/////////////////////////////
function swapValues(x, y){
    let z = x
    x = y
    y = z
    console.log(x , y);
}
swapValues(3,4);
/////////////////////////////
function reverseArray(arr){
    return arr.reverse()
}
console.log(reverseArray([1,2,3,4,5]));
//////////////////
function capitalizeArray(arr){
    let capitalizedarray = []
    for (let i = 0; i < arr.length; i++) {
        capitalizedarray.push(arr[i])   
    }
    return capitalizedarray
}
console.log(capitalizeArray(['apple', 'banana', 'cherry']))
//////////////////////////
function addItem(item){
    let arr1 = []
    arr1.push(item)
    return arr1
}
console.log(addItem(2));
//////////////////////
function removeItem(index){
    let arr2 = [2,3,4,5,6,7,8,9,11,12,13]
    arr2.splice(index, 1)
}   
console.log(removeItem(5));
////////////////////////
function sumOfNumbers(n){
    let sum = 0
    for(let i=0; i<=n; i++){
        sum+=i
    }
    return sum
}
console.log(sumOfNumbers(5));
//////
function sumOfOdds(n){
    let sum = 0
    for(let i=0; i<=n; i++){
        if(i%2!==0){
            sum+=i
        }
    }
    return sum
}
console.log(sumOfOdds(5));
////////////////////
function evensAndOdds(n){
   let evenNumbers = []
   let oddNumbers = []
   for(let i=0; i<=n; i++){
    if(i%2!==0){
        oddNumbers.push(i)
    }else if(i%2==0){
        evenNumbers.push(i)
    }
}
return {evenCount: evenNumbers.length, oddCount: oddNumbers.length}
}
console.log(evensAndOdds(5));
////////////////////
function sum1(...args){
    let sum = 0
    for(let num of args){
        sum+=num
    }
    return sum
}
console.log(sum1(1,2,3,4,5));
///////////////////////
function rgbColorGenerator(){
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const rgbColor = `rgb ${r}, ${g}, ${b}`
    return rgbColor
}
console.log(rgbColorGenerator());
/////////////////////////////
function factorial(n){
    if(n<0){
        return undefined;
    }
    let result = 1
    for(let i = 1; i<=n; i++){
        result*=i
    }
    return result
}
console.log(factorial(5));
///////////////////////////
function isEmpty(p){
    if(p=='' || p==undefined||p==null|| (Array.isArray(p) && p.length===0)){
        return 'empty'
    }else{
        return 'not empty';
    }
}
console.log(isEmpty(''));
console.log(isEmpty('aaa'));
/////////////////
function sum(...args){
    let sum1 = 0
    for(let num of args){
        sum1+=num
    }
    return sum1
}
console.log(sum(1,2,3,4,5));
//////////////////////
function sumOfArrayItems(arr){
    if(!Array.isArray(arr)){
        return 'array olmalidir';
    }
    let sum = 0
    for(let i = 0; i<arr.length;i++){
        if(typeof arr[i]!=='number'){
            return `index ${i}deki element say deyil: ${arr[i]}`
        }
        sum+=arr[i]
    }
    return sum
}
console.log(sumOfArrayItems([1,2,3,'4',5]));
///////////////////////
function average(arr){
    if(!Array.isArray(arr)){
        return 'array olmalidir';
    }
    let sum = 0
    for(let i = 0; i<arr.length;i++){
        if(typeof arr[i]!=='number'){
            return `index ${i}deki element say deyil: ${arr[i]}`
        }
        sum+=arr[i]
    }
    const avg = sum/arr.length
    return avg
}
console.log(average([1,2,3,4,5]));
////////////////////////
function modifyArray(arr){
    if(arr.length<5){
        return 'item not found'
    }
    arr[4] = arr[4].toString().toUpperCase()
    return arr
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
///////////////////////
function areItemsUnique(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                return false
            }
        }
    }
    return true
}
console.log(areItemsUnique([1, 2, 3, 4]));
///////////////
function checkAllItemsType(arr){
    const firstItem = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] !== typeof firstItem){
            return false
        }
    }
    return true
}
console.log(checkAllItemsType([1, 2, 3, 4]));
console.log(checkAllItemsType([1, '2', 3, 4]));
//////////////////////////////
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
function reverseCountries(olkeler){
    let reverseCountires = olkeler.slice()
    reverseCountires.reverse()
    return reverseCountires
}
console.log(reverseCountries(olkeler));
