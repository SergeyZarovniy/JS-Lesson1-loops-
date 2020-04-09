// // // // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// // let user = {
// //     name: "Serghei",
// //     age: 28,
// //     status: true,
// //     car: true
// // }

// // let car = {
// //     year: 1998,
// //     color: 'red',
// //     ingine: 2.5,
// //     doors:5
// // }

// // let pc ={
// //     harddrive: 500,
// //     ozu: 8,
// //     oc: 'windows',
// //     licenze: true
// // }

// // let phone = {
// //     displey : 5.1,
// //     wifi: true,
// //     stilus: false,
// //     pods:true
// // }


// // let flat = {
// //     rooms: 4,
// //     fridge: false,
// //     local: 'wroclaw',
// //     balcon: true
// // }
// // // // // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// // let girl = {
// //     man: true,
// //     heir: 'brown',
// //     skills:['poker','tv','sex'],
// //     animal:{
// //         type:'cat',
// //         eyes: 2,
// //         legs:4
// //     }
// // }
// // let bike = {
// //     brakes: true,
// //     koleso:[2,true,'black'],
// //     owner:{
// //         sirname:'Skripa',
// //         sex: false
// //     }
// // }

// // let student = {
// //     kilkistpar: 5,
// //     study:['html','js','css'],
// //     years: 5,
// //     friend:{
// //         kilkist: 8,
// //         names:'Kristina',
// //         mista:'Kiev'
// //     }
// // }
// // // // - При помощи for in вывести все ключи всех объектов из задания 1 и 2+
// // for (const keys in user) {
// //     console.log(keys)
// // };
// // for (const keys in car) {
// //     console.log(keys)
// // };
// // for (const keys in pc) {
// // console.log(keys)
// // };
// // for (const keys in phone) {
// //     console.log(keys)
// // };
// // for (const keys in flat) {
// //     console.log( keys)
// // };
// // //For task 2 
// // console.log('________________________-');

// // for (const keys in girl) {
// //     console.log(keys)
// // };
// // for (const keys in bike) {
// //     console.log (keys)
// // };
// // for ( const keys in student) {
// //     console.log(keys)
// // };

// // // // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2+
// // let userKeys = Object.keys(user)
// // console.log(userKeys);

// // let carKeys = Object.keys(car)
// // console.log(carKeys);

// // let pcKeys = Object.keys(pc)
// // console.log(pcKeys);

// // let phoneKeys = Object.keys(phone)
// // console.log(phoneKeys);

// // let flatKeys = Object.keys(flat)
// // console.log(flatKeys);

// // //For second part
// // console.log('________________________');

// // let girlKeys = Object.keys(girl)
// // console.log(girlKeys);

// // let bikeKeys = Object.keys(bike)
// // console.log(bikeKeys);

// // let studentKeys = Object.keys(student)
// // console.log(studentKeys)


// // // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let carsArr = [
//     {car:'Audi',model:'R8', year: 2020, ingine:3.0,color:'red'},
//     {car:'Toyota',model:'Rav4',year:2018,ingine:2.5,color:'white'},
//     {car:'Mazda',model:6,year:2002,ingine:2.0,color:'grey'},
//     {car:'Honda',model:'Civic',year:1998,ingine:1.6,color:'green'},
//     {car:'Lada',model:15,year:2007,ingine:1.6,color:'black'},
//     {car:'Jeep',model:'Jeeper',year:2019,ingine:5.0,color:'orange'},
//     {car:'Range Rover',model:'Discovery',year:2005,ingine:3.5,color:'Silver'},
//     {car:'Volvo', model:'VXC-3600',year:2001,ingine:1.9,color:'yellow'},
//     {car:'Fiat', model:'Doblo',year:2004,ingine:2.5,color:'ivory'},
//     {car:'Moskvich',model:'goodModel',year:1975,ingine:1.2,color:'purpure'}
//     ]
// //  Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name:'NewYork', population: 150000000,contry:'US',state:'New York'},
//     {name:'Paris', population: 250000000,contry:'France',state:'Il de France'},
//     {name:'Prague', population: 350000000,contry:'Czech Republic',region:'Czech'},
//     {name:'Kiev', population: 1780000000,contry:'Ukraine',region:'Kiev'},
//     {name:'Wroclaw', population: 1505780000,contry:'Poland',region:'Dolnoshlenskie'},
//     {name:'Milan', population: 89040000,contry:'Italy',region:'Lambardia'},
//     {name:'Brazil', population: 999900000,contry:'Brazil',region:'Brazil'},
//     {name:'Vilnius', population: 834200000,contry:'Litva',region:'Litva'},
// ]
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let carsArr2 = [
//     {car:'Audi',model:'R8', year: 2020, ingine:3.0,color:'red',
//     driver:{name:'Viktor', age: 23, sex:'maile',expirience: 20}},
//     {car:'Toyota',model:'Rav4',year:2018,ingine:2.5,color:'white',
//     driver:{name:'Ivan', age: 55, sex:'maile',expirience: 10}},
//     {car:'Mazda',model:6,year:2002,ingine:2.0,color:'grey',
//     driver:{name:'Serghei', age: 28, sex:'maile',expirience: 9}},
//     {car:'Honda',model:'Civic',year:1998,ingine:1.6,color:'green',
//     driver:{name:'Sasha', age: 18, sex:'maile',expirience: 1}},
//     {car:'Lada',model:15,year:2007,ingine:1.6,color:'black',
//     driver:{name:'Roma', age: 26, sex:'maile',expirience: 11}},
//     {car:'Jeep',model:'Jeeper',year:2019,ingine:5.0,color:'orange',
//     driver:{name:'Lena', age: 49, sex:'femaile',expirience: 25}},
//     {car:'Range Rover',model:'Discovery',year:2005,ingine:3.5,color:'Silver',
//     driver:{name:'Karina', age: 15, sex:'femaile',expirience: 0}},
//     {car:'Volvo', model:'VXC-3600',year:2001,ingine:1.9,color:'yellow',
//     driver:{name:'Yana', age: 25, sex:'femaile',expirience: 5}},
//     {car:'Fiat', model:'Doblo',year:2004,ingine:2.5,color:'ivory',
//     driver:{name:'Lesia', age: 46, sex:'femaile',expirience: 5}},
//     {car:'Moskvich',model:'goodModel',year:1975,ingine:1.2,color:'purpure',
//     driver:{name:'Andrey', age: 23, sex:'maile',expirience: 2}}
//     ]
// // // - проитерировать каждый массив из задания 5,6,7 при помощи while.
// // array from task 5
// // let i = 0;
// // while ( i < carsArr.length) {
// //     console.log(carsArr[i])
// //     i++;
// // }
// // array form task 6
// // let i = 0;
// // while (i < cities.length) {
// //     console.log(cities[i])
// //     i++;
// // }
// // array from task 7
// // let i = 0;
// // while (i < carsArr2.length) {
// //     console.log(carsArr2[i])
// //     i++;
// // }
// // // - проитерировать каждый массив из задания 5,6,7 при помощи for .
// // Iter by for array from task 5
// // for (let i = 0; i < carsArr.length;i++) {
// //     console.log(carsArr[i])
// // };
// // Iter by for array from task 6
// // for ( let i = 0; i < cities.length; i++) {
// //     console.log(cities[i])
// // };
// // Iter by for array from task 7
// // for ( let i =0; i < carsArr2.length; i++) {
// //     console.log(carsArr2[i])
// // };
// // // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// //Iter array by for of task 5
// // for (const obj of carsArr){
// //     console.log(obj)
// // };
// // //Iter array by for of task 6
// // for (const obj of cities) {
// //     console.log(obj)
// // };
// // //Iter array by for of task 7
// // for ( const obj of carsArr2) {
// //     console.log(obj)
// // };

// // // // - взять объекты из задания 1 и превратить каждый в json.
// // let jsonUser = JSON.stringify(user)
// // console.log(jsonUser);
// // let jsonCar = JSON.stringify(car)
// // console.log(jsonCar);
// // let jsonPc = JSON.stringify(pc)
// // console.log(jsonPc);
// // let jsonPhone = JSON.stringify(phone)
// // console.log(jsonPhone)
// // let jsonFlat = JSON.stringify(flat)
// // console.log(jsonFlat)
// // // // - взять json из задания 11 и превратить их обратно в объекты.
// // let transfUser = JSON.parse(jsonUser)
// // console.log(transfUser)
// // let transfCar = JSON.parse(jsonCar)
// // console.log(transfCar)
// // let transfPc = JSON.parse(jsonPc)
// // console.log(transfPc)
// // let transfPhone = JSON.parse(jsonPhone)
// // console.log(transfPhone)
// // let transfFlat = JSON.parse(jsonFlat)
// // console.log(transfFlat)
// // // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// // for ( obj of carsArr) {
// //    let jsonObj = JSON.stringify(obj)
// //     console.log(jsonObj)
// // };
// // for (let i = 0; i < carsArr.length; i++){
// //     let jsonEl = JSON.stringify(carsArr[i])
// //     console.log(jsonEl)
// // }
// // // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// // Iteration by for of
// // for ( obj of cities) {
// //     let jsonObj = JSON.stringify(obj)
// //     console.log(jsonObj)
// // };
// // Iteration by for 
// // for (let i = 0; i < cities.length; i++) {
// //     let jsonObj = JSON.stringify(cities[i]);
// //     console.log(jsonObj)
// // }

// // // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// // let jsonArr = [];
// // for (obj of carsArr2) {
// //     let jsonObj = JSON.stringify(obj)
// //     jsonArr.push(jsonObj)
// // }
// // console.log(jsonArr)


// // // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// // let usersArr = [
// //     userOne = {name:'Serghei',age:28,car:true,skills:['HTML','CSS','JS']},
// //     userTwo = {name:'Yana',age:26,car:false,skills:['Reading','Learning','Working']},
// //     userthree = {name:'Ivan',age:27,car:true,skills:['Healing people','Massage','Playing Xbox One']}
// // ] 

// // for ( const obj of usersArr) {
// //     console.log(obj)
// //     for (const objSk of  obj.skills) {
// //         console.log(objSk)
// //     }
// // };


// // // - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// // let usersArr = [
// //     userOne = {name:'Serghei',age:28,car:true,skills:['HTML','CSS','JS']},
// //     userTwo = {name:'Yana',age:26,car:false,skills:['Reading','Learning','Working']},
// //     userthree = {name:'Ivan',age:27,car:true,skills:['Healing people','Massage','Playing Xbox One']}
// // ] 
// // let skillsArr = [];
// // for (const user of usersArr) {
// //     console.log(user)
// //      for (skillsUser of user.skills) {
// //          skillsArr.push(skillsUser)
// //      }
// //      console.log(skillsArr);
// // }
// // // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// //  let users = [
// //     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
// //     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
// //     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
// //     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// //     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
    
// //     for (const user of users) {
// //         console.log(user);
// //         for (const userSkills of user.skills ) {
// //             console.log(userSkills);
// //         }
// //     }

// // // - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [
//     {name: 'vasya',age: 31,status: false,address: 
//     {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}}, 
//     {name: 'petya',age: 30,status: true,address: 
//     {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}}, 
//     {name: 'kolya',age: 29,status: true,address: 
//     {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}}, 
//     {name: 'olya',age: 28,status: false,address: 
//     {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}}, 
//     {name: 'max',age: 30,status: true,address: 
//     {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}}, 
//     {name: 'anya',age: 31,status: false,address: 
//     {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}}, 
//     {name: 'oleg',age: 28,status: false,address: 
//     {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}}, 
//     {name: 'andrey',age: 29,status: true,address: 
//     {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}}, 
//     {name: 'masha',age: 30,status: true,address: 
//     {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}}, 
//     {name: 'olya',age: 31,status: false,address: 
//     {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}}, 
//     {name: 'max',age: 31,status: true,address: 
//     {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}}
// ];
// // let adressArr = [];
// //  for ( let i = 0; i < users.length; i++){
// //      adressArr.push(users[i].address)
// //      console.log(adressArr)
// //  } 
