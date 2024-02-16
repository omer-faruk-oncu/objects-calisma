// 
// const kisiler = {
//     ahmet: {
//       soyİsim: "Yılmaz",
//       kimlikNo: "123123341112",
//       maas: 70000,
//     },
//     mehmet: {
//       soyİsim: "Ozturk",
//       kimlikNo: "1696571112",
//       maas: 50000,
//     },
//   }

//   console.log(kisiler.ahmet.kimlikNo);
//   console.log(kisiler['mehmet']['maas']);

//   const isim = 'ahmet'
//   console.log(kisiler[isim]);

// const people = [
//     {
//       isim: "Ahmet",
//       soyİsim: "Yılmaz",
//       kimlikNo: "123123341112",
//       maas: 70000,
//       job: "developer",
//     },
//     {
//       isim: "Mehmet",
//       soyİsim: "Ozturk",
//       kimlikNo: "1696571112",
//       maas: 50000,
//       job: "developer",
//     },
//     {
//       isim: "Canan",
//       soyİsim: "Can",
//       kimlikNo: "33344571112",
//       maas: 90000,
//       job: "tester",
//     },
//   ]
// console.log(people[1]); 

// people.forEach((p)=>console.log(p.maas))
// people.forEach((p)=>console.log(p.isim))

// console.log(people.reduce((t,p)=> t + p.maas,0));

// const toplamMaas = people.reduce((t, p) => t + p.maas, 0)
// console.log(toplamMaas)

// const job = people
//     .filter((p)=>p.job === 'developer')     
//     .map((p)=>`${p.isim}${p.soyİsim}`)
// console.log(job);
// const product = {
//     id: "12345",
//     brand: "Apple",
//     type: "smart phone",
//     price: 3000,
//   }
  
//   const product1 = {
//     id: "12346",
//     brand: "Samsung",
//     type: "smart phone",
//     price: 2500,
//   }

//   console.log(product.price);
//   product.price += 500
//   console.log(product.price);
//   console.log(product1['id']);

//   const {brand, price,} = product
//   console.log(brand,);
  
//   const {brand:brand1, price:price1,} = product1
//   console.log(brand1);
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

//   console.log(insanlar.kisi1.kimlikNo);
//   console.log(insanlar['kisi2']['meslek']);

//   const {kisi1,kisi2} = insanlar
//   console.log(kisi1, kisi2);

//   const {adi,meslek} = kisi1
//   console.log(adi);
  
//   const {adi:kisi2Adi, meslek:kisi2Meslek} = kisi2
//   console.log(kisi2Adi, kisi2Meslek);

// const team = [
//     {
//       name: "Josh",
//       surname: "Barry",
//       job: "developer",
//       age: 30,
//     },
//     {
//       name: "John",
//       surname: "Barry",
//       job: "tester",
//       age: 45,
//     },
//     {
//       name: "Hazel",
//       surname: "Nut",
//       job: "team lead",
//       age: 40,
//     },
//   ]

//   team.forEach((person)=>{
//     console.log(person.name), 
//     console.log(person.age), 
//     console.log(person.job)})
//     console.log('**********');
    
//     team.forEach((person)=>{
//         const {name, job} = person
//         console.log(name,job)
//     })
    
//     console.log('**********');
// team.forEach(({name, job})=>{
//   console.log(name,job)
// })
// const objGoster = function () {
//     return {
//       name: "Hazel",
//       surname: "Nut",
//       job: "team lead",
//       age: 40,
//     }
//   }

//   let {name,surname,job, age} = objGoster()
//   console.log(name);

// const data = {
//     id: "123",
//     desc: "This is top secret information",
//     createdTime: "1900",
//   }

// const prinData = (data) => {console.log(`${data.id}-${data.desc}-${data.createdTime}`)
// }

// const prinDataDes = (data) =>{
//     const {id, desc, createdTime} = data 
//     console.log(`${id}-${desc}-${createdTime}`)
// }

// const prinDataDesHava = ({id, desc, createdTime}) =>{
//     console.log(`${id}-${desc}-${createdTime}`)
// }




// prinData(data)
// prinDataDes(data)
// prinDataDesHava(data)
  
// const people = ["Ali", "Veli", "Canan", "Can"]
// console.log(people[1]);

// const [kisi1,kisi2] = people
// console.log(kisi1, kisi2);

const araclar = ["Kamyon", "Tır", "Kamyonet", "Araba", "ATV", "Minübüs"]

const [arac1,arac2,...geriArac] = araclar 

console.log(arac1,arac2);
console.log(arac2);
console.log(geriArac);

const person = {
    ad: "Hazel",
    soyad: "Nut",
    is: "team lead",
    yas: 40,
  }

const {ad,soyad,...diger} = person

console.log(ad,soyad);
console.log(diger);

const topla = (a,b) => a+b

console.log(topla(1,5,2,7,9));

const toplam = (...sayilar) => {
    return sayilar.reduce((a,b)=> a+b)
}

console.log(toplam(1,5,2,7,9));

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAracları = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar, karaAracları]
console.log(tasitlar);

const flatTasitlar = [...ucanAraclar, ...karaAracları]
console.log(flatTasitlar);

const cumle = "Uzun ince bir yoldayim"
const cumleDizi = [...cumle]
console.log(cumleDizi);

const numbers = [1, 3, 4, 5]
console.log(...numbers);
console.log(Math.max(...numbers));

const sahislar = {
    sahis1: {
      name: "Can",
      surname: "Canan",
      dob: "1990",
      job: "developer",
      salary: "140000",
      drivingLicense: true,
    },
    sahis2: {
      name: "John",
      surname: "Sweet",
      dob: "1990",
      job: "tester",
      salary: "110000",
      drivingLicense: false,
    },
    sahis3: {
      name: "Steve",
      surname: "Job",
      dob: "2000",
      job: "developer",
      salary: "90000",
      drivingLicense: true,
    },
  }

//   console.log(sahislar);

//   const {sahis1,sahis2,sahis3} = sahislar
//   console.log(sahis1);

//   const {salary} = sahis1
//   console.log(salary);

for (let s in sahislar) {
    // console.log(s);
    console.log(sahislar[s].job);
}

console.log(Object.keys(sahislar.sahis3));
console.log(Object.values(sahislar));
console.log(Object.entries(sahislar.sahis3));

for (let key of Object.keys(sahislar)) {
    // console.log(key);
    console.log(sahislar[key].job);
}
for (let value of Object.values(sahislar)) {
    // console.log(value);
    console.log(value.name);
 }