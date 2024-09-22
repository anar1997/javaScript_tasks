let challange = "30 Days Of JavaScript"
console.log(challange);
console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
console.log(challange.substr(0, 2));
console.log(challange.substring(3,21));
console.log(challange.includes("Script"));
console.log(challange.split(""));
console.log(challange.split(" "));
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(","));
console.log(challange.replace('JavaScript', "Python"));
console.log("JavaScript'in 30 Günü".charAt(15));
console.log("JavaScript'in 30 Günü".charCodeAt("J"));
console.log(challange.indexOf('a'));
console.log(challange.lastIndexOf('a'));
console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.indexOf('çünkü'));
console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.lastIndexOf('çünkü'));
console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.search('çünkü'));
console.log('  30 Days Of JavaScript  '.trim());
console.log('30 Days Of JavaScript'.startsWith('3'));
console.log('30 Days Of JavaScript'.endsWith('t'));
console.log("JavaScript'in 30 Günü".match(/a/g));
console.log("30 Days of".concat(' JavaScript'));
console.log('30 Gün JavaScript'.repeat(2));
/////////////////
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log('10'===10);
console.log(parseInt('10')===10);
console.log(parseFloat('9.8')===10);
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));
console.log('Umarım bu kurs jargonla dolu değildir'.includes('jargon'));
console.log(Math.floor(Math.random() * 51));
console.log(50 + Math.floor(Math.random()*51));
console.log(Math.floor(Math.random()*256));
console.log('JavaScript'[Math.floor(Math.random()*('javascript'.length))]);
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
let sentence = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
let findIndexof = sentence.indexOf('çünkü çünkü');
let findLastIndex = findIndexof + ('çünkü çünkü').length
console.log(sentence.substring(findIndexof, findLastIndex));
//////////////////////////
let sentence2 = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır';
let pattern = /çünkü/g
console.log(sentence2.match(pattern));

let sentence3 ='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence3.replace(/[%$@&;#?!]/g), " ");


let sentence4 = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'
let findIndexMonthSalary = sentence4.indexOf('5000')
let findIndexLastMonthSalary = findIndexMonthSalary + ('5000').length
let findIndexYearSalary = sentence4.indexOf('10000')
let findIndexLastYearSalary = findIndexYearSalary + ('10000').length
let findIndexOnlineSalary = sentence4.indexOf('15000')
let findIndexLastOnlineSalary = findIndexOnlineSalary + ('15000').length
let resultMonthSalary = parseInt(sentence4.substring(findIndexMonthSalary, findIndexLastMonthSalary))
let resultYearSalary = parseInt(sentence4.substring(findIndexYearSalary, findIndexLastYearSalary))
let resultOnlineSalary = parseInt(sentence4.substring(findIndexOnlineSalary, findIndexLastOnlineSalary))
let result = resultMonthSalary + resultYearSalary + resultOnlineSalary
console.log(result);
