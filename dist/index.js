// Output Fields
var txtHolderName = document.getElementById('txtholderName');
var txtCardMonth = document.querySelector('#cardMonth');
var txtCardYear = document.querySelector('#cardYear');
var txtCardNumber = document.getElementById('txtCardNum');
var txtCcvNum = document.querySelector('#txtccvNum');

// Input TextFields
var tbHolderInput = document.querySelector('#holderInput');
var tbCardNumInput = document.querySelector('#cardNumInput');
var tbCardMonthInput = document.querySelector('#monthInput');
var tbCardYearInput = document.querySelector('#yearInput');
var tbCvvInput = document.querySelector('#cvvInput');

// Error Fields
var errorMessage1 = document.querySelector('#errorMessage1')
var errorMessage2 = document.querySelector('#errorMessage2')
var wrongFormat = document.querySelector('#errorFormat')

// Button
var btnConfirm = document.querySelector('#btnConfirm')

const inputHandler = function (e){
    txtHolderName.innerHTML = e.target.value.toUpperCase();
}
const cardNumInput = function(e){
txtCardNumber.innerHTML = e.target.value;
}

const cardMonthInput = function(e){
  if(Number(e.target.value) <= 12){
    txtCardMonth.innerHTML = e.target.value
  }else{
    txtCardMonth.innerHTML = 12;
  }
}

const cardYearInput = function(e){
    txtCardYear.innerHTML = e.target.value
}
const cardCvvInput = function(e){
  txtCcvNum.innerHTML = e.target.value
}

tbHolderInput.addEventListener('input',inputHandler)
tbCardNumInput.addEventListener('input',cardNumInput)
tbCardMonthInput.addEventListener('input',cardMonthInput)
tbCardYearInput.addEventListener('input',cardYearInput)
tbCvvInput.addEventListener('input',cardCvvInput)

btnConfirm.addEventListener('click',(e)=>{
  e.preventDefault();
    var accountNum = tbCardNumInput.value.trim();
    var monthInput = tbCardMonthInput.value.trim();
    var yearInput = tbCardYearInput.value.trim();
    var cvvInput = tbCvvInput.value.trim();
    
    if(accountNum === ''){
      wrongFormat.style.display = 'block';
      wrongFormat.textContent = 'Cant be blank';
    }
     else if(/\D/.test(accountNum)){
      wrongFormat.style.display = 'block';
    }
     else{
      wrongFormat.style.display = 'none';
    }
    if(monthInput === '' || yearInput === '' || cvvInput === ''){
      errorMessage1.style.display = 'block';
      errorMessage2.style.display = 'block';
    } else{
      errorMessage1.style.display = 'none';
      errorMessage2.style.display = 'none';
    }
    
});

