function Soru(soruMetni,cevapSecenekleri, dogruCevap){
        this.soruMetni = soruMetni,
        this.cevapSecenekleri = cevapSecenekleri,
        this.dogruCevap = dogruCevap,
        
        console.log(this);
    }
    
    Soru.prototype.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCevap;
    }

    let soru1 = new Soru("Hangisi js paket yönetim uygulamasıdır ?",{ a: "Node.js",b: "TaypeScript",c: "Npm" },"c",);
    let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır ?",{a: "Node.js",b: "Nuget",c: "Npm"},"b",);
   
    
    let sorular =[
        new Soru("Hangisi js paket yönetim uygulamasıdır ?",{ a: "Node.js",b: "TaypeScript",c: "Npm" },"c",),
        new Soru("Hangisi .net paket yönetim uygulamasıdır ?",{a: "Node.js",b: "Nuget",c: "Npm"},"c",),
        new Soru("Hangisi js paket yönetim uygulamasıdır ?",{ a: "Node.js",b: "TaypeScript",c: "Npm" },"c",),
        new Soru("Hangisi .net paket yönetim uygulamasıdır ?",{a: "Node.js",b: "Nuget",c: "Npm"},"c",)
    ]
    
    function Quiz(sorular){
        this.sorular = sorular;
        this.soruIndex = 0;

    }

    Quiz.prototype.soruGetir = function(){
        return this.sorular[this.soruIndex];
    }

    const quiz = new Quiz(sorular);



    console.log(quiz.soruGetir());