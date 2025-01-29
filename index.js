import { isPalindrom, findFactorial, findFibSeries, findGcd, findInterSection, isAnagram, setDifference, matrixSum, diagonalSum, mySlice, mySplice, isPrime, union } from "./utils.js";

import { union1, mDiagSum, mSum,splice, slice, aB, fGcd, fLcd, anaG, facto, isPri, palin, fib, interS } from "./constant.js";

const calculatorContainer = document.getElementById('calculator__container');
const calculator = document.getElementById('calculator');
const calculator_1 = document.getElementById('general_calculator-1');
const calculator_2 = document.getElementById('general_calculator-2');
const dialogBox = document.getElementById('calculator__dialogbox')
const secCal = document.getElementById('sec-cal');
const secCal1 = document.getElementById('sec-cal-1');
const secCal2 = document.getElementById('sec-cal-2');

calculatorContainer.addEventListener('click', (e)=>{
  const section = e.target.id;
  if(section == 'calculator'){
    dialogBox.innerHTML = " "
    secCal.classList.toggle('invisible');
    secCal1.classList.add('invisible');
    secCal2.classList.add('invisible');
    // model2.classList.add("invisible");
    // model3.classList.add("invisible");
  }

  if(section == 'general_calculator-1'){
    dialogBox.innerHTML = " "
    // const calSec = document.getElementById('sec-cal-1');
    secCal1.classList.toggle('invisible')
    secCal2.classList.add('invisible');
    secCal.classList.add('invisible');
    // model1.classList.add("invisible");
    // model3.classList.add("invisible");
  }

  if(section == 'general_calculator-2'){
    dialogBox.innerHTML = " "
    // const calSec = document.getElementById('sec-cal-2');
    secCal2.classList.toggle('invisible');
    secCal.classList.add('invisible');
    secCal1.classList.add('invisible');
    // model1.classList.add("invisible");
    // model2.classList.add("invisible");
  }

})

secCal.addEventListener('click',(e)=>{
  e.stopPropagation()
  
  dialogBox.innerHTML = ` <div id="dialog" class=" invisible">
       <div class=" dialog__container">
        <div>
        <label for="">Number-1</label>
        <input id="number-1" type="number">
        </div>
        <div>
        <label for="">Number-2</label>
        <input id="number-2" type="number">
      </div>
        <div id="result">Result : <span id="result-val" ></span></div>
        <button class="button" id="button" ></button>
       </div>
    </div>`
 
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const button = document.getElementById('button')
    const result = document.getElementById('result-val');
    const model = document.getElementById('dialog')
    model.classList.remove('invisible')
    result.innerHTML = " "
    button.innerHTML = e.target.id;
    button.addEventListener('click',(e)=>{
      e.stopPropagation();
      if(button.innerHTML == "add"){
        const sum = +number1.value + (+number2.value);
        result.innerHTML = sum;
      }

      if(button.innerHTML == "sub"){
        const sub = +number1.value - (+number2.value);
        result.innerHTML = sub;
      }

      if(button.innerHTML == "mult"){
        const mul = (+number1.value)*(+number2.value);
        result.innerHTML = mul;
      }

      if(button.innerHTML == "div"){
        const div = +number1.value / (+number2.value);
        result.innerHTML = div.toFixed(2);
      }

      if(button.innerHTML == "modu"){
        const modu = (+number1.value)%(+number2.value);
        result.innerHTML = modu;
      }

      if(button.innerHTML == "perce"){
        const result = document.getElementById('result-val');

        const perce = ((+number2.value)/(+number1.value))*100;
        result.innerHTML = perce.toFixed(2) + "%";
      }

    })

  
 
})

secCal1.addEventListener('click',(e)=>{
  e.stopPropagation();
   dialogBox.innerHTML = " "
   if(e.target.id == 'union'){
      dialogBox.innerHTML = "";
      dialogBox.innerHTML = union1;
      const button = document.getElementById('button')
      button.innerHTML = "Union"

   }
// find matrix sum
    if(e.target.id == 'm-sum'){
      dialogBox.innerHTML = "";
      let val;
      let arr = [];
      let matrix = ""
      let val1;
      let coun = -1;
      const form = document.createElement('form');
      const input = document.createElement('input');
      const but = document.createElement('button');
       form.className = "dialog-m"
        input.type = 'number';
        // input.min = "1";
        input.required = true;
        input.placeholder = "Enter matrix Row size";    
        but.type = "submit";
        but.innerHTML = "submit";
        function inp (){
        but.addEventListener('click',(e)=>{
          e.preventDefault();
          e.stopPropagation();
          if(input.type == 'number'){
          val = +input.value;
          if(val < 1){
            coun = -1;
            alert("Enter positive number");
            return;
          }
          console.log(val)}
          if(input.type == 'text'){
            if(arr.length == 0){
              val1 = input.value.split(",").length;
              arr.push(input.value.split(","))
              console.log(val1,"nice",arr.length)
              matrix = `[ ${matrix + input.value + "\n"} ]`  // matrix show
            }

            // arr.push(input.value.split(","))
            
            if(val1 != input.value.split(",").length ){
              alert(`Enter correct column size should be ${val1} `);
              return;
            }
            if( coun < val - 1){
            arr.push(input.value.split(","))
            console.log(input.value.split(","));
            matrix = matrix + `[ ${input.value } ]` //matrix show
            }
          }
          if(val > coun){ 
            coun++;
            console.log(coun) 
          dialogBox.innerHTML = "";
          input.value = ""
          input.type = 'text'
          input.placeholder = `Enter Matrix Row ${coun + 1}`;
          dialogBox.appendChild(form);
          }
          console.log(coun)
          if(val == coun){
            const sum = matrixSum(arr)
            const div = document.createElement('div');
            div.className = 'dialog-m'
            div.innerHTML = `<pre>Matrix is${matrix}
            sum is = ${sum}
            </pre>`;
            dialogBox.innerHTML = ""
            dialogBox.appendChild(div);
            // dialogBox.innerHTML = sum;
          }
        })}
        inp();
      form.appendChild(input);
      form.appendChild(but);
      dialogBox.appendChild(form);
      
      return;

      // dialogBox.innerHTML = mSum;
      // const button = document.getElementById('button')
      // button.innerHTML = "M-Sum"
    }
    if(e.target.id == 'm-diago-sum'){
      // dialogBox.innerHTML = "";
      // dialogBox.innerHTML = mDiagSum;
      // const button = document.getElementById('button')
      // button.innerHTML = "M-D-Sum"
      dialogBox.innerHTML = "";
      let val;
      let arr = []
      let str =""
      let matrix = "";
      let coun = -1;
      const form = document.createElement('form');
      const input = document.createElement('input');
      const but = document.createElement('button');
        input.type = 'number';
        // input.min = "1";
        input.required = true;
        input.placeholder = "Enter squre matrix size";    
        but.type = "submit";
        form.className = 'dialog-m'
        but.innerHTML = "submit";
        function inp (){
        but.addEventListener('click',(e)=>{
          e.preventDefault();
          e.stopPropagation();
          if(input.type == 'number'){
          val = +input.value;
          if(val < 1){
            coun = -1;
            alert("Enter positive number");
            return;
          }
          console.log(val)}
          if(input.type == 'text'){
            str = str + "\n" + `${input.value.split(",")}`
            if(val != input.value.split(",").length ){
              alert(`enter correct matrix length should be ${val} `);
              return;
            }
            if(+val == input.value.split(",").length){
            arr.push(input.value.split(","))
            matrix = matrix + `[ ${input.value } ]`
            }
          }
          if(val > coun){ 
            coun++;
            console.log(coun) 
          dialogBox.innerHTML = "";
          input.value = ""
          input.type = 'text'
          input.placeholder = `Enter Matrix ${coun + 1}`;
          dialogBox.appendChild(form);
          }
          console.log(coun)
          if(val == coun){
            const sum = diagonalSum(arr);
            const div = document.createElement('div');
            div.className = 'dialog-m'
            div.innerHTML = `<pre>Matrix is ${matrix}
                 Diagonals sum = ${sum}</pre>`;
            dialogBox.innerHTML = ""
            dialogBox.appendChild(div);
          }
        })}
        inp();
      form.appendChild(input);
      form.appendChild(but);
      dialogBox.appendChild(form);
      
      return;

   }
    if(e.target.id == 'splice'){
      dialogBox.innerHTML = "";
      dialogBox.innerHTML = splice;
      const button = document.getElementById('button');
      button.innerHTML = "Splice"
    }

    if(e.target.id == 'slice'){
      dialogBox.innerHTML = "";
      dialogBox.innerHTML = slice;
      const button = document.getElementById('button')
      button.innerHTML = "Slice"
    }

    if(e.target.id == 'a-b'){
      dialogBox.innerHTML = "";
      dialogBox.innerHTML = aB;
      const button = document.getElementById('button')
      button.innerHTML = "A-B"
    }

    if(e.target.id == 'inter'){
      dialogBox.innerHTML = "";
      dialogBox.innerHTML = interS;
      const button = document.getElementById('button')
      button.innerHTML = "InterS"
    }

    button.addEventListener('click',(e)=>{
      e.stopPropagation();
      if(button.innerHTML == "Union"){
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const s1 = set1.value.split(',');
        const s2 = set2.value.split(',')
        const ans = union(s1, s2)
        result.innerHTML = ans;
      }

      if(button.innerHTML == "InterS"){
        // const sub = +set1.value - (+set2.value);
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const arr1 = set1.value.split(",");
        const arr2 = set2.value.split(",")
        const sub = findInterSection(arr1, arr2)
        result.innerHTML = sub;
      }

      if(button.innerHTML == "A-B"){
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const arr1 = set1.value.split(",");
        const arr2 = set2.value.split(",")
        const sum = setDifference(arr1, arr2);
        result.innerHTML = sum;
      }

      if(button.innerHTML == "Slice"){
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const str = document.getElementById('number-3').value
        const arr = str.split(",")
        const val =  mySlice(set1.value, set2.value, arr);
        
        result.innerHTML = val;
      }

      if(button.innerHTML == "Splice"){
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const arr2 = document.getElementById('number-3')
        const arr1 = document.getElementById('number-4')
        const arr3 = arr1.value.split(",");
        const arr4 = arr2.value.split(",");
        const sum = mySplice(set1.value, set2.value, arr4, arr3 )
        result.innerHTML = sum;
      }

      if(button.innerHTML == "M-Sum"){
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const arr1 = set1.value.split(",");
        const arr2 = set2.value.split(",");
        const arr = [arr1,arr2]
        const sum = matrixSum(arr)
        result.innerHTML = sum;
      }

      if(button.innerHTML == "M-D-Sum"){
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const arr1 = set1.value.split(",");
        const arr2 = set2.value.split(",");
        if((arr1.length != arr2.length) && arr1.length != 2){
          alert("Not correct square matrix");
          return;
        }
        const arr = [arr1,arr2]
        const sum = diagonalSum(arr)
        result.innerHTML = sum;
      }

    })


});

secCal2.addEventListener('click',(e)=>{
  e.stopPropagation()
  
    if(e.target.id == 'pal'){
      dialogBox.innerHTML = ""
      dialogBox.innerHTML = palin;
      const button = document.getElementById('button')
      button.innerHTML = "IsPal"
      
    }

    if(e.target.id == 'ana'){
      dialogBox.innerHTML = ""
      dialogBox.innerHTML = anaG;
      const button = document.getElementById('button')
      button.innerHTML = "IsAna"
      
    }

    if(e.target.id == 'lcm'){
      dialogBox.innerHTML = ""
      dialogBox.innerHTML = fLcd;
      const button = document.getElementById('button')
      button.innerHTML = "LCM"
      
    }

    if(e.target.id == 'gcd'){
      dialogBox.innerHTML = ""
      dialogBox.innerHTML = fGcd;
      const button = document.getElementById('button')
      button.innerHTML = "GCD"
      
    }

    if(e.target.id == 'prime'){
      dialogBox.innerHTML = ""
      dialogBox.innerHTML = isPri;
      const button = document.getElementById('button')
      button.innerHTML = "IsPrime"
      
    }

    if(e.target.id == 'fib'){
      dialogBox.innerHTML = ""
      dialogBox.innerHTML = fib;
      const button = document.getElementById('button')
      button.innerHTML = "Fib"
      
    }

    if(e.target.id == 'fact'){
      dialogBox.innerHTML = ""
      dialogBox.innerHTML = facto;
      const button = document.getElementById('button')
      button.innerHTML = "Fac"
      
    }
  

    button.addEventListener('click',(e)=>{
      e.stopPropagation();
      if(button.innerHTML == "IsPal"){
        const set1 = document.getElementById('number-1');
        const result = document.getElementById("result-val");
        const sum = isPalindrom(set1.value)
        result.innerHTML = sum;
      }

      if(button.innerHTML == "IsAna"){
        const set1 = document.getElementById('number-1');
        const set2 = document.getElementById('number-2');
        const result = document.getElementById("result-val");
        const sub = isAnagram(set1.value, set2.value)
        result.innerHTML = sub;
      }

      if(button.innerHTML == "GCD"){
        const set1 = document.getElementById('number-1');
        const num2 = document.getElementById('number-2');

        if(+(set1.value) < 1 || +num2.value < 1 || (+set1.value - Math.floor(+set1.value)) > 0 ||
        (+num2.value - Math.floor(+num2.value)) > 0){
          alert("Enter correct Number")
          return ;
        }
        const result = document.getElementById("result-val");
        const ans =  findGcd(set1.value, num2.value)
        result.innerHTML = ans;
      }

      if(button.innerHTML == "LCM"){
        const set1 = document.getElementById('number-1');
        const num2 = document.getElementById('number-2');

        if(+(set1.value) < 1 || +num2.value < 1 || (+set1.value - Math.floor(+set1.value)) > 0 ||
        (+num2.value - Math.floor(+num2.value)) > 0){
          alert("Enter correct Number")
          return ;
        }
        const ans =  findGcd(set1.value, num2.value);
        const result = document.getElementById("result-val");
        const lcm = (set1.value*num2.value)/ans;
        result.innerHTML = lcm;
      }

      if(button.innerHTML == "Fac"){
        const set1 = document.getElementById('number-1');
        const result = document.getElementById("result-val");
        if((+set1.value - Math.floor(+set1.value)) > 0){
          alert("Enter Positive integer Number");
          return ;
        }
        const sum = findFactorial(set1.value);
        result.innerHTML = sum;
      }

      if(button.innerHTML == "Fib"){
        const set1 = document.getElementById('number-1');
        const result = document.getElementById("result-val");
        if((+set1.value - Math.floor(+set1.value)) > 0){
          alert("Enter Positive integer Number");
          return ;
        }
        const sum = findFibSeries(set1.value);
        result.innerHTML = sum;
      }

      if(button.innerHTML == "IsPrime"){
        const set1 = document.getElementById('number-1');
        const result = document.getElementById("result-val");
        const ans = isPrime(set1.value);
        result.innerHTML = ans;
      }

    })


})


