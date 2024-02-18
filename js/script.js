//vriables
let totalPrice = document.getElementById('totalPrice').innerHTML;
let grandTotal = document.getElementById('grandTotal').innerHTML;
totalPrice = parseInt(totalPrice);
grandTotal = parseInt(grandTotal);
// Bus Seat Select 
let seatLeft = document.getElementById('seatLeft').innerHTML;
let selectedSeatCounter = document.getElementById('selectedSeatCount').innerHTML;
const seatContainer = document.getElementById('bus-seat-container');

const seatId = seatContainer.querySelectorAll('li');

let maxSeatCnt = 1;

for(let i=0; i<seatId.length; i++){
    const seats = seatId[i];
    let flag = false ;
    
    seats.addEventListener('click', function(){
        if(maxSeatCnt <=4){
            seats.style.backgroundColor = '#1DD100';
       
        if(flag){
            seatLeft = seatLeft;
            selectedSeatCounter = selectedSeatCounter;
        }
        else{
                selectedSeatCounter++;
                seatLeft--;
                document.getElementById('seatLeft').innerHTML = seatLeft; 
                document.getElementById('selectedSeatCount').innerHTML = selectedSeatCounter;

                totalPrice = maxSeatCnt*550 ;
                document.getElementById('totalPrice').innerHTML = totalPrice;
                grandTotal = totalPrice;
                document.getElementById('grandTotal').innerHTML = grandTotal;

                flag = true;
                maxSeatCnt++;

                const  selectedSeatList = document.getElementById('selectedSeatList');

                var newDiv = document.createElement('div');
                newDiv.classList.add('flex', 'justify-between', 'py-2');

                for (var i = 1; i <= 3; i++) {
                    var p = document.createElement('p');
                    if(i == 1)
                         p.textContent = seats.innerText;
                    else if (i ==2)
                        p.textContent = 'Economy';
                    else
                        p.textContent = '550';

                    p.classList.add('text-gray-950', 'text-opacity-60');
                    newDiv.appendChild(p);
                }
                selectedSeatList.appendChild(newDiv);
            }
        }
        else{
            alert('You cannot buy more than 4 tickets!');
        }
    })
}




// Coupon Applu
function couponCheck(){
    var coupon = document.getElementById('coupon').value;
    if(totalPrice > 0){
        if(coupon == 'NEW15'){
            document.getElementById('grandTotal').innerHTML  = totalPrice - (parseInt(totalPrice)*15) / 100 ;
            document.getElementById('couponForm').classList.add("hidden");
            document.getElementById('discountInfo').classList.remove("hidden");
            document.getElementById('discountInfo').classList.add("flex");
            document.getElementById('discount').innerText = (parseInt(totalPrice)*15) / 100;

        }
        else if(coupon == 'Couple 20'){
            document.getElementById('grandTotal').innerHTML  = totalPrice - (parseInt(totalPrice)*20) / 100 ;
            document.getElementById('couponForm').classList.add("hidden");
            document.getElementById('discountInfo').classList.remove("hidden");
            document.getElementById('discountInfo').classList.add("flex");
            document.getElementById('discount').innerText = (parseInt(totalPrice)*20) / 100;
        }
        else{
            document.getElementById('coupon').value = ' ';
            alert('Your Coupon is not valid!');
        }
    }
    else{
        alert('You need to select ticket before applying coupon!');
    }
   
}

// Ticket Bought Sucess
function sucess(){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    if(name != '' && phone !='' && email !='')
        window.location.href = 'sucess.html';
    else
        alert('You need to fill all the information!')
}

function gotoHome(){
    window.location.href = 'index.html';
}