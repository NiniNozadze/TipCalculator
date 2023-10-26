const inputBill=document.querySelector(".numberInput");
const getTips=document.querySelectorAll(".tip")
const numPeople=document.querySelector(".inputForPeople");
const getButton=document.querySelector(".btn");
const getAmount=document.querySelector(".price");
const getTotal=document.querySelector(".total");
const getCustom=document.querySelector(".custom");
const getError=document.querySelector(".error");
const BUTTONS=document.querySelectorAll(".buttons")

inputBill.addEventListener("input",forBillValue);
numPeople.addEventListener("input", forPeopleValue);
getCustom.addEventListener("input",forCusttom);
getButton.addEventListener("click", resetCalculator);

inputBill.value=0.0;
numPeople.value=1;

let billvalue=0;
let peoplevalue=1;

function forBillValue(e){
   if(e.target.value.length >6){
    e.target.value=e.target.value.slice(0,6)
   }
   if(inputBill.value !=""){
    billvalue=parseFloat(inputBill.value);
   }
   calculateResult()
}

function forPeopleValue() {
   peoplevalue = parseFloat(numPeople.value);
    if (peoplevalue === 0 || isNaN(numPeople.value)) {
      getError.style.display = "block";
      numPeople.style.outline = "2px solid #E17052";
    } else {
      numPeople.style.outline="none"
      getError.style.display = "none";
    }
     calculateResult();
  }
  
function forCusttom(){
  BUTTONS.forEach(buttons => {
    buttons.style.backgroundColor = "#00474B "; 
  });
    if(getCustom.value !== ""){
        eachTips=parseFloat(getCustom.value);
        calculateResult()
    }else{eachTips=0
    }
}

let eachTips=0.0;
getTips.forEach(function(button){
    button.addEventListener("click", function(){
     eachTips=parseFloat(button.textContent) / 100;
     calculateResult()    
    })
});

function calculateResult(){
    if(billvalue !==0 && peoplevalue !==0 && !isNaN(peoplevalue) && eachTips !==0.0 ){
        getAmount.innerHTML="$"+((billvalue * (eachTips/100))/peoplevalue).toFixed(2);
        getTotal.innerHTML="$" + ((billvalue/peoplevalue* eachTips)).toFixed(2);
    }else{
        getAmount.innerHTML="$"+(0.0).toFixed(2);
        getTotal.innerHTML="$"+(0.0).toFixed(2);
    } 
}

BUTTONS.forEach(button => {
    button.addEventListener("click", function() {
        BUTTONS.forEach(buttons => {
        buttons.style.backgroundColor = "#00474B "; 
      });
      button.style.backgroundColor = "#26C2AE"
    });
  });
getButton.addEventListener("click",function(){
    getButton.style.background="#0D686D";
})

function resetCalculator() {
    inputBill.value = "0.0";
    numPeople.value = "1";
    getCustom.value = "";
    getError.style.display = "none";
    billvalue=0;
    peoplevalue=1;
    eachTips=0.0
    getButton.style.backgroundColor="#0D686D;"
    numPeople.style.outline= "initial";
    getAmount.innerHTML = "$" + (0.0).toFixed(2);
    getTotal.innerHTML = "$" + (0.0).toFixed(2);
    BUTTONS.forEach(button => {
      button.style.backgroundColor = "#00474B";
    });
  }
  
  