const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const selected = document.getElementById('movie');

container.addEventListener('click',function(e){
    //console.log(e) // tıklandığında hangi bilgiyi veriyor?
    //console.log(e.target); //hangi elemana tıklarsak o elemanın bilgileri bize gelir.
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){// seat class ına sahip olup , reserved classı olmayan elemanları filtreliyoruz.
        //console.log(e.target); // seat classına sahip olan eleman geliyor.
        e.target.classList.toggle('selected');// true ise false , false ise true yapıyor. seçilen elemana selected classı koyuyor veya kaldırıyor.
        calculatorTotal();

    } 
});

selected.addEventListener('change', function(e){
    calculatorTotal();
} );
function calculatorTotal(){
    let selectedSeatCound = container.querySelectorAll('.seat.selected').length;// seçilen elemanların sayısını alıyoruz.
        //console.log(selectedSeatCound); 
        let price = selected.value ;
        //console.log(price); //fiyat bilgisi
        count.innerText = selectedSeatCound; // seçilen element sayısını yazdır.
        amount.innerText = selectedSeatCound * price; // seçilen eleman sayılarını fiyatlarını hesapla.
}