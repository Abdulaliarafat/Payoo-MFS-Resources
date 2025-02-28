function getInputValueByID(id){
 const value = document.getElementById(id).value;
 const convertedValue =parseFloat(value);
 return convertedValue;  
}

function getInnerTextById(id){
    const textValue = document.getElementById(id).innerText;
    const convertedValue = parseFloat(textValue);
    return convertedValue;
}
function setInnerTextByIdAndValue(id,value){
    document.getElementById(id).innerText=value;
}