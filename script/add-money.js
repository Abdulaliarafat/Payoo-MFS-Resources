
// / commonly we need to show on So get one hide first.....
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
document.getElementById('add-money').addEventListener('click',function(event){
   event.preventDefault();
   const accountNumber = document.getElementById('account-number').value;
   const amount=document.getElementById('amount').value;
   const convertAmount=parseFloat(amount);
   const pin = document.getElementById('pin').value;
   const convertPin = parseInt(pin);
   const mainBalnce = document.getElementById('main-balence').innerText;
   const convertMainBalance =parseFloat(mainBalnce);
   
   if(accountNumber.length===11){
      if(convertPin===1234){
         const sum=convertAmount+convertMainBalance;
         document.getElementById('main-balence').innerText=sum;
      }
      else{
         alert('Invalid PIN number')
      }
   }
   else{
    alert('Invalid Account Number')
   }
})