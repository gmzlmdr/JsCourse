    
    
    let sonuc1,sonuc2;

    sonuc1 = document.getElementById("asd").id;

    sonuc2 = document.querySelector("li");
    sonuc2 = document.querySelector("li:first-child");
    sonuc2 = document.querySelector("li:nth-child(3)");
    console.log(sonuc1);
    console.log(sonuc2);

       
function  myFunction() {

    document.getElementById("asd").style.backgroundColor = "red";
    document.getElementById("asd").style.color = "white";
    document.getElementById("asd").innerText = "Gamze";

    document.querySelector(".card").innerText = "Alemdar";
    document.querySelector(".card").style.background = "red";
    document.querySelector(".card").style.color = "white";
}
