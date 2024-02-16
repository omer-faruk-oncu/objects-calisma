// const x = [4,3,2,1]

// const y = x.reduce((a,b)=>a+b)

// console.log(y);

// const salary = [40000,30000,20000,100000]

// const sum = salary.reduce((t,m) => t + m,0)
// console.log(sum);

// const sayilar = [4,5,3,2]

// const carp = sayilar.reduce((t,m) => t * m, 1)
// console.log(carp);

// const toplmaZamliMaas = salary
//     .filter((m)=> m < 40000)
//     .map((m)=> m*1.5)
//     .reduce((t,m)=>t+m, 0)
// console.log(toplmaZamliMaas);


// const ogrİsim =["ahmet","ismet","saffet"]
//  const ogrSoyisim=["yılmaz","can","baki"]
//  let ogrAdres = ["kadıköy","şeebinkarahisar","seferihisar"]

//  console.log(`${ogrİsim[0]}-${ogrSoyisim[0]}-${ogrAdres[0]}`);

// const kisi = {
//     isim: 'Ahmet',
//     ogrSoyisim:'Yılmaz',
//     kimlikNo:'01/01/1975',
//     maas1: 70000,
//     ehliyet: true,
//     diller: ['english', 'arabic', 'german'],
//     notlar: {mat101:'AA', tur101:'BB'},
//     dogumTarihi: 1990,
//     yasHesapla: function (){
//         return new Date().getFullYear() - this.dogumTarihi
//     }
//  }

//  console.log(kisi.isim);
//  console.log(kisi.diller[2]);
//  console.log(kisi.notlar.mat101);
//  console.log(kisi.yasHesapla());
// //  console.log(new Date().getDate());

// console.log(kisi['kimlikNo']);
// console.log(kisi['notlar']['tur101']);

// kisi.dogumTarihi = 2000
// kisi.diller = 'türkçe-ing'
// kisi.kilo = 80

// kisi['ehliyet']=false
// console.log(kisi);

// const kisiler = {

//     ahmet:{
//         Soyisim:'Yılmaz',
//         kimlikNo:'19751235468',
//         maas1: 70000
//     },

//     mehmet: {
//         Soyisim:'Ozturk',
//         kimlikNo:'1975486936',
//         maas1: 50000
//     }
//  }

//  console.log(kisiler.ahmet.kimlikNo);
//  console.log(kisiler['mehmet']['maas1']);

//  const isim = 'ahmet'
//  console.log(kisiler[isim]);


//  const people = [
//      {
//         isim: 'ahmet', 
//         soyIsim:'Yılmaz',
//          kimlikNo:'19751235468',
//          maas1: 70000,
//      },
//      {
//          isim :'mehmet',
//          soyIsim:'Ozturk',
//          kimlikNo:'1975486936',
//          maas1: 50000,
//      }
//  ]

//  people.forEach((p)=> console.log(p.isim))
//  people.forEach((p)=> console.log(p['kimlikNo']))
//  people.forEach((p)=> console.log(p.isim))

//  const ages = [18,22,78,44,78,89,25,15]

//  const check = ages.every((age)=>age>=18)
//  console.log(check);
//  const check1 = ages.some((age)=>age>=18)
//  console.log(check1);
//  const check2 = ages.find((age)=>age>=18)
//  console.log(check2);
//  const check3 = ages.findLast((age)=>age>=30)
//  console.log(check3);
//  const check4= ages.findIndex((age)=>age>18)
//  console.log(check4);


//  const product ={
//     id:"12345",
//     brand:"Apple",
//     type:"smart phone",
//     price:3000,
//  }
//  const product1 ={
//     id:"12346",
//     brand:"Apple1",
//     type:"smart phone1",
//     price:4000,
//  }

//  console.log(product.price);
//  const proId = product["id"]
//  console.log(proId);


//  const {id,price} = product 
//  console.log(id);
//  console.log(price);

//  const {type} = product


// const insanlar = {
//     kisi1: {
//       kimlikNo: "1234567890",
//       adi: "Ahmet",
//       soyadi: "Can",
//       meslek: "Mimar",
//       maas: 30000,
//     },
//     kisi2: {
//       kimlikNo: "44234567890",
//       adi: "Canan",
//       soyadi: "Can",
//       meslek: "Sosyal Gelişim Uzmanı",
//       maas: 25000,
//     },
//   }

//   console.log(insanlar.kisi2.meslek);

// //   const {kisi1, kisi2} = insanlar
// //   console.log(kisi1);

// //   const {adi, maas } = kisi1
// //   console.log(adi, maas);

//   const {
//     kisi1:{adi,meslek},
//     kisi2:{adi:kisi2Ad, meslek:kisi2Meslek},
// } = insanlar
//   console.log(adi,meslek);
//   console.log(kisi2Ad,kisi2Meslek);


// const team = [
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "John",
//     surname: "Barry",
//     job: "tester",
//     age: 45,
//   },
//   {
//     name: "Hazel",
//     surname: "Nut",
//     job: "team lead",
//     age: 40,
//   },
// ]
// team.forEach((person)=>{
//     console.log(person.name)
//     console.log(person.surname)
//     console.log(person["job"])
//     console.log(person["age"])
//     console.log("************")    
// })
// team.forEach((person)=>{
//     const {name, surname, job, age} = person
//     console.log(name)
//     console.log(surname)
//     console.log(job)
//     console.log(age)
//     console.log("************")    

//  team.forEach(({name, surname, job, age}) => {
//     console.log(name)
//     console.log(surname)
//     console.log(job)
//     console.log(age)
// })

// const objGoster = function () {
//     return {
//         name: "Hazel",
//         surname: "Nut",
//         job: "team lead",
//         age: 40,
//     }
// }
// console.log(objGoster());

// let {name, surname, job , age} = objGoster()
// console.log(name, surname);
// console.log(++age);

// const data = {
//     id:"123",
//     desc: "top secret",
//     createdTime: "1900"
// }

// const printData = (data) => {
//     console.log(`${data.id} -${data.desc} - ${data.createdTime} `);
// } 

// const printDataDestr = (data) => {
//     const {id,desc,createdTime}
//     console.log(`${data.id} -${data.desc} - ${data.createdTime} `);
// }

// const people = ["Ali", "Veli", "Canan", "Can"]

// const [kisi1, kisi2] = people
// console.log(kisi1, kisi2);
 
// const araclar = ["Kamyon", "Tır", "Kamyonet","Araba","Minübüs"]

// const [arac1,arac2,arac3,...binekAraclar] = araclar
// console.log(arac1,arac2,arac3);
// console.log(binekAraclar);

// const person = {
//     ad: "Hazel",
//     soyd: "Nut",
//     is: "team lead",
//     yas: 40,
// }

// const {soyd,yas,...geriKalanlar} = person

// console.log(geriKalanlar);

// const topla = (a,b) => a+b

// console.log(topla(1,5,2,7,9));

// const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
// const karaAracları = ["araba", "bisiklet", "marti"]

// const tasitlar = [ucanAraclar, karaAracları]
// console.log(tasitlar);

// const flatTasitlar = [...ucanAraclar, ...karaAracları]

// console.log(flatTasitlar);

// const cumle = "Uzun ince bir yoldayim" 

// const cumleDizisi = [...cumle]
// console.log(cumleDizisi);
// console.log(cumle.split(" "));

// const numbers = [1,3,4,5]

// console.log(Math.max(...numbers));

// const sahislar = {
//     sahis1: {
//       name: "Can",
//       surname: "Canan",
//       dob: "1990",
//       job: "developer",
//       salary: "140000",
//       drivingLicense: true,
//     },
//     sahis2: {
//       name: "John",
//       surname: "Sweet",
//       dob: "1990",
//       job: "tester",
//       salary: "110000",
//       drivingLicense: false,
//     },
//     sahis3: {
//       name: "Steve",
//       surname: "Job",
//       dob: "2000",
//       job: "developer",
//       salary: "90000",
//       drivingLicense: true,
//     },
//   }

//   for (let s in sahislar){
//     console.log(s);
//     console.log(sahislar[s]);
//     console.log(sahislar[s].salary);
//   }

//   console.log(Object.keys(sahislar));
//   console.log(Object.values(sahislar.sahis2));
//   console.log(Object.entries(sahislar));
//   console.log(Object.entries(sahislar.sahis2));

//   for (let key of Object.keys(sahislar)){
//     console.log(key);
//     console.log(sahislar[key].salary);
//   }

//   function multiply (factor, ...numbers){
//     return numbers.map(num=> num*factor)
//   }

//   const result = multiply(2,3,4,5)
//   console.log(result);


// let object = {'myName': 'Ant', 'myAge':30}
// let objectTwo = {'myAge':675}
// let newObject = {...object, ...objectTwo}
// console.log(newObject);

