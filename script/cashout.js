document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumberCashout = document.getElementById('account-number-cashout').value;
    const cashOutPin = document.getElementById('cashout-pin').value;
    const convertCashoutPin = parseInt(cashOutPin);
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertCashoutAmount = parseFloat(cashoutAmount);
    const mainBalance = document.getElementById('main-balence').innerText;
    const convertMainBalence = parseFloat(mainBalance);
    
    if(accountNumberCashout.length===11){
       if(convertCashoutPin===1234){
        const substrac=convertMainBalence-convertCashoutAmount;
        document.getElementById('main-balence').innerText=substrac;
       }
       else{
        alert('Invalid PIN Number');
       }
    }
    else{
        alert('Invalid Account number');
    }
    
})