// OOP : Nesne Tabanlı Programlama
// Object 

// let soru1 = {
//     soruMetni: "Hangisi js paket yönetim uygulamasıdır ?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "TaypeScript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevapKontrol : function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }
// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır ?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevapKontrol : function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }
// console.log(soru1.soruMetni);
// console.log(soru1.cevapKontrol("a"));
// console.log(soru2.soruMetni);
// console.log(soru2.cevapKontrol("b"));

// Sınıf, Constructor => nesne * 30 ;
//ES5, ES6, ES7

/*  ****************************************************************************************************   */
// Nesne Oluşturma : Constructor 

// function Soru(soruMetni,cevapSecenekleri, dogruCevap){
//     this.soruMetni = soruMetni,
//     this.cevapSecenekleri = cevapSecenekleri,
//     this.dogruCevap = dogruCevap,
//     this.cevabiKontrolEt = function(cevap){
//         return cevap === this.dogruCevap;
//     }
// }

// let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?",{ a: "Node.js",b: "TaypeScript",c: "Npm" },"c",);
// let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?",{a: "Node.js",b: "Nuget",c: "Npm"},"b",);

// console.log(soru1.soruMetni);
// console.log(soru1.dogruCevap);

// console.log(soru1.cevabiKontrolEt("c"));
// console.log(soru2.cevabiKontrolEt("a"));

// console.log(soru2.soruMetni);
// console.log(soru2.dogruCevap);

// let sorular =[
//     new Soru("Hangisi js paket yönetim uygulamasıdır ?",{ a: "Node.js",b: "TaypeScript",c: "Npm" },"c",),
//     new Soru("Hangisi .net paket yönetim uygulamasıdır ?",{a: "Node.js",b: "Nuget",c: "Npm"},"c",)
// ]

// console.log(sorular[0].soruMetni);
// console.log(sorular[0].dogruCevap);

// for(let s of sorular){
//     console.log(s.soruMetni);
// }


