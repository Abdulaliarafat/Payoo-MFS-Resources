document.getElementById('add-money').addEventListener('click',function(event){
   event.preventDefault();
   const amount=document.getElementById('amount').value;
   const convertAmount=parseFloat(amount);
   const pin = document.getElementById('pin').value;
   const convertPin = parseInt(pin);
   const mainBalnce = document.getElementById('main-balence').innerText;
   const convertMainBalance =parseFloat(mainBalnce);
   
   if(convertPin === 1234){
   const sum=convertAmount+convertMainBalance;
    document.getElementById('main-balence').innerText=sum;
   }
   else{
    console.log('Invalid Pin Number')
   }
})