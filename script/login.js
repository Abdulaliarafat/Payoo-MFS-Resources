document.getElementById('login-btn').addEventListener('click',function(event){
      event.preventDefault();
      const accountNumber = document.getElementById('account-number').value;
      const pin = document.getElementById('pin').value;
    //   console.log(typeof pin)
    //   option(2)...
    //   const convertPin = parseInt(pin);
      if(accountNumber.length===11){
        if(pin==="1234"){
            window.location.href="main.html"
        }
        else{
            alert('Invalid PIN');
        }
      }
      else{
        alert('Need valid number');
      }
})