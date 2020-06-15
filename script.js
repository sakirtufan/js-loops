/*  loops

for loop

for(let i=1; i<10; i++){
  if (i===3){
    console.log('en sevdigim rakam:'+i);
    continue;
  }

  if (i===6){
    console.log('en sevmedigim rakam:'+i);
    break;
  }

  console.log(i);
}


for(let i=0; i<10; i++){
  for(let j=0; j<10;j++){
    console.log(`i:${i} j:${j}`);
  }
}



...............................................................................

while loop

let i = 10;
while (i>0) {

   if(i===6){
    console.log('en sevmedigim rakam:'+i)
    break;
  }
  console.log(i);
  i--;
}



let i = 1;
while (i<10) {
  if (i===3){
    console.log('en sevdigim rakam:'+i);
    i++;
    continue;        
  }  
  console.log(i);
  i++;
}

.....................................................................................


do while
let i = 0;

do{
  console.log(i);
  i++;
}while (i<10);


....................................................................................

for each
const langs = ['Python', 'Javascript', 'Java']

langs.forEach(function(e,index){
  console.log(e,index);
});


let cars = ['bmw', 'toyota', 'opel'];
cars.forEach(function(item){
  console.log(item);
});


let people = [
  {firstName : 'sakir', lastName: 'tufan', age:36},
  {firstName : 'fatma', lastName: 'tufan', age:33},
  {firstName : 'ümit', lastName: 'tufan', age:9},
  {firstName : 'hatice', lastName: 'tufan', age:7}
];
people.forEach(function(item){
  console.log(item.firstName);
});
.......................................................................................

map fonksiyonu => geriye bir dizi döndürüp daha sonradan kullanilir

const users = [
  {name: 'mustafa', age:25},
  {name: 'zeynep', age:40},
  {name: 'ali',age:12}
];
const names = users.map(function(user){
  return user.name;
});
const ages = users.map(function(user){
  return user.age;
});
console.log(names);
console.log(ages);


let people = [
  {firstName : 'sakir', lastName: 'tufan', age:36},
  {firstName : 'fatma', lastName: 'tufan', age:33},
  {firstName : 'ümit', lastName: 'tufan', age:9},
  {firstName : 'hatice', lastName: 'tufan', age:7}
];
let val = people.map(function(item){
  return item.firstName + ' ' + item.lastName + ' ' + item.age;
});
console.log(val);


let numbers =[2,3,4,5,6];
let num = numbers.map(function(item){
  return item*item
});
console.log(num);
.........................................................................................

for-in döngüsü

const user = {
  name:'mustafa',
  age:25
};
for (let key in user){
  console.log(key,user[key]);
}


let cars = ['bmw', 'toyota', 'opel'];
for (let i in cars){
  console.log(`index: ${i} value: ${cars[i]}`);
}


let cars = ['bmw', 'toyota', 'opel'];
let people = [
  {firstName : 'sakir', lastName: 'tufan', age:36},
  {firstName : 'fatma', lastName: 'tufan', age:33},
  {firstName : 'ümit', lastName: 'tufan', age:9},
  {firstName : 'hatice', lastName: 'tufan', age:7}
];
for(let i in people){
  console.log(people[i].firstName);
}
...............................................................................................
*/




/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak,can;
var tahmin,sayac=0;
var sayi = Math.floor((Math.random()*10)+1);
can = Number(prompt('kaç kerede bileceksiniz ?'));
hak = can;

console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puan : ${100 - (100/can)*(sayac-1)}`);
        break;
    }else if (sayi > tahmin){
        console.log('yukarı');
    }else{
        console.log('aşağı');
    }

    if(hak==0){
        console.log('hakkınız bitti. sayı :'+sayi);
    }
}
