document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const account = document.getElementById('account-number').value;
    const pin = getInputValueByID('pin');
    const amount = getInputValueByID('amount');
    const mainBalnace = getInnerTextById('main-balence');
    console.log(mainBalnace)
    if(account.length===11){
        if(pin===1234){
           const sum = mainBalnace + amount;
         setInnerTextByIdAndValue("main-balence",sum);
        }
        else{
           alert('Invalid PIN number')
        }
     }
     else{
      alert('Invalid Account Number')
     }
})