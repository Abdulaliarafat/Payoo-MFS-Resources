// commonly we need to show on So get one hide first.....
document.getElementById('cashout').style.display='none';
// add money.........
document.getElementById('add-money-box').addEventListener('click',function(){
    document.getElementById('addmoney').style.display='block';
    document.getElementById('cashout').style.display='none';
})
// cash out.........
document.getElementById('cash-out-box').addEventListener('click',function(){
    document.getElementById('addmoney').style.display='none';
    document.getElementById('cashout').style.display='block';
})