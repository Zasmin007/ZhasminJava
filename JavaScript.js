document.getElementById('checkButton').addEventListener('click',function() {
const inputValue=document.getElementById('inputValue').value;
const outputValue=document.getElementById('outputValue');
if (isNaN(inputValue) || inputValue.trim()==='') {
alert("Введите числовое значение.");
} else {
const doubledValue=Number(inputValue)*2;
outputValue.value=doubledValue;
}
});

