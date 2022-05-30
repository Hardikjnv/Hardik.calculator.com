var operator;//stores the operator
var operatorCount = 0;//stores num of operator
var digit = 0;// stores num of digit for num2
var numberTem;// stores number temporarily
var number;//First number 
var number2;// second number

var zero = document.getElementById('0');

zero.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '0';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var one = document.getElementById('1');

one.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '1';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var two = document.getElementById('2');

two.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '2';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var three = document.getElementById('3');

three.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '3';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var four = document.getElementById('4');

four.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '4';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var five = document.getElementById('5');

five.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '5';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var six = document.getElementById('6');

six.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '6';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var seven = document.getElementById('7');

seven.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '7';
  
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var eight = document.getElementById('8');

eight.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '8';
  if(operatorCount > 0){
    digit ++;
  }
  
}
)

var nine = document.getElementById('9');

nine.addEventListener('click', function()
{
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '9';
  if(operatorCount > 0){
    digit ++;
  }
  
  
}
)

var plus = document.getElementById('plus');

plus.addEventListener('click', function()
{
  operator = '+'
  operatorCount ++;
  
  number = document.getElementById('p').innerHTML;
  
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '+';
}

)

var minus = document.getElementById('minus');

minus.addEventListener('click', function()
{
  operator = '-'
  operatorCount ++;
  
  number = document.getElementById('p').innerHTML;
  
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '-';
}

)

var multiply = document.getElementById('multiply');

multiply.addEventListener('click', function()
{
  operator = '*'
  operatorCount ++;
  
  number = document.getElementById('p').innerHTML;
  
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '×';
}

)


var divide = document.getElementById('divide');

divide.addEventListener('click', function()
{
  operator = '/'
  operatorCount ++;
  
  number = document.getElementById('p').innerHTML;
  
  document.getElementById('p').innerHTML = document.getElementById('p').innerHTML + '÷';
}

)


var enter = document.getElementById('enter');

enter.addEventListener('click', function()
{
  var result;
  var number2Tem = document.getElementById('p').innerHTML;
  number2 = number2Tem.slice(-digit);
  
  var number3 = parseInt(number);
  var number4 = parseInt(number2);

  
  console.log(number);
  console.log(number2);
  
  if(operator == '+'){
    result = number3 + number4;
  }
  else if(operator == '-'){
    result = number3 - number4;
  }
  else if(operator == '*'){
    result = number3 * number4;
  }
  else if(operator == '/'){
    result = number3 / number3;
  }
  
  document.getElementById('p').innerHTML = result;
  digit = 0;
}
)

var cut = document.getElementById('cut');

cut.addEventListener('click', function()
{
  var pCut = document.getElementById('p').innerHTML;
  var newNum = pCut.slice(0, pCut.length - 1);
  document.getElementById('p').innerHTML = newNum;
}
)

