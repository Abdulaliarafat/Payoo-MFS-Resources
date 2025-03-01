document.getElementById('cashout').style.display = 'none';
document.getElementById('tarnsaction-history').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click',function(){
    handleToggle('addmoney','block');
    handleToggle('cashout','none');
    handleToggle('tarnsaction-history','none');
})
document.getElementById('cash-out-box').addEventListener('click',function(){
    handleToggle('addmoney','none');
    handleToggle('cashout','block');
    handleToggle('tarnsaction-history','none');
})

