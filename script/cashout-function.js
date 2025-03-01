document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber=document.getElementById('account-number-cashout').value;
    const cashoutAmount=getInputValueByID('cashout-amount');
    const cashOutPin=getInputValueByID('cashout-pin');
    const mainBalnace = getInnerTextByID('main-balence');
    if(cashoutAmount>mainBalnace){
        alert('Insufficient balance');
        return;
    }
    if(accountNumber.length===11){
        if(cashOutPin===1234){
            const substrac=mainBalnace-cashoutAmount;
            setInnerTextByIdAndValue('main-balence',substrac);
            const container = document.getElementById('tansection-container')
            const date = new Date().toLocaleString(); 
            const div= document.createElement('div');
            div.classList.add('bg-yellow-400','mx-5','p-5','rounded-2xl','mb-4')
            div.innerHTML=`
            <h1 class ="font-bold text-lg">Cashout money</h1>
            <h2>${cashoutAmount}</h2>
            <p>Account from :${accountNumber}</p>
            <p>Time: ${date}</p>
            `
            container.appendChild(div)
        }
        else{
            alert('Invalid PIN Number')
        }
    }
    else{
        alert('Invalid Account Number')
    }
})