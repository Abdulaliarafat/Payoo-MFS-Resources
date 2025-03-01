document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const account = document.getElementById('account-number').value;
    const pin =  getInputValueByID('pin');
    const amount = getInputValueByID('amount');
    const mainBalnace = getInnerTextByID('main-balence');
    const selectedBank = document.getElementById('allbank').value;
    if(amount<0){
      alert('Currect your amount');
      return;
    }
    if(account.length===11){
        if(pin===1234){
           const sum = mainBalnace + amount;
         setInnerTextByIdAndValue("main-balence",sum);
       const container = document.getElementById('tansection-container')
      const date = new Date().toLocaleString();
       const div = document.createElement('div')
      div.classList.add('bg-red-400','mx-5','p-5','rounded-2xl','mb-4')
       div.innerHTML=`
       <h1 class ="font-bold text-lg">Added money from ${selectedBank}</h1>
       <h2>${amount}</h2>
       <p>Account from :${account}</p>
       <p>Time: ${date}</p>
       `
       container.appendChild(div);

        }
        else{
           alert('Invalid PIN number')
        }
     }
     else{
      alert('Invalid Account Number')
     }
})