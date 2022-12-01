const container = document.querySelector('.container');  //seçtiğimiz eleman container classına sahip
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculatorTotal();

container.addEventListener('click',function(e){
    //console.log(e) // tıklandığında hangi bilgiyi veriyor?
    //console.log(e.target); //hangi elemana tıklarsak o elemanın bilgileri bize gelir.
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){// seat class ına sahip olup , reserved classı olmayan elemanları filtreliyoruz.
        //console.log(e.target); // seat classına sahip olan eleman geliyor.
        e.target.classList.toggle('selected');// true ise false , false ise true yapıyor. seçilen elemana selected classı koyuyor veya kaldırıyor.
        calculatorTotal();
    } 
});

select.addEventListener('change', function(e){
    calculatorTotal();
} );
function calculatorTotal(){
        const selectedSeats = container.querySelectorAll('.seat.selected');
        const selectedSeatsArr = [];
        const seatsArr = [];

        selectedSeats.forEach(function(seat){
            selectedSeatsArr.push(seat);
        });

        //spread 
        seats.forEach(function(seat){
            seatsArr.push(seat);
        })
        //[1,3,5]
        let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
            return seatsArr.indexOf(seat);
        })
        //console.log(selectedSeatIndexs);
        //console.log(seats);
        //console.log(selectedSeats);
        let selectedSeatCound = container.querySelectorAll('.seat.selected').length;// seçilen elemanların sayısını alıyoruz.
        //console.log(selectedSeatCound); 
        count.innerText = selectedSeatCound; // seçilen element sayısını yazdır.
        amount.innerText = selectedSeatCound * select.value; // seçilen eleman sayılarını fiyatlarını hesapla.
        
        saveToLocalStorage(selectedSeatIndexs);
    }

    function getFromLocalStorage(){
        const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

        if (selectedSeats !=null && selectedSeats.length > 0 ){
            seats.forEach(function(seat, index) {
                if (selectedSeats.indexOf(index) > -1) {
                    seat.classList.add('selected');
                }
            })
        }

        const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

        if (selectedMovieIndex != null){
            select.selectedIndex = selectedMovieIndex;
        }
    }
    function saveToLocalStorage(indexs){
        localStorage.setItem('selectedSeats',JSON.stringify(indexs));
        localStorage.setItem('selectedMovieIndex',select.selectedIndex);
    }