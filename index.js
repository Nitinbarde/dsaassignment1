
// linear data structure  assignment no 1
// que 1> 
// Write a program to find all pairs of an integer array whose sum is equal to a given number?
let array = [1,5,7,-1,5]
let n = array.length
let sum = 6;

function totalPairCount(){
    let count = 0;
    for(let i = 0;i<n;i++)
    for(let j=i+1;j<n;j++)
    if(array[i]+ array[j]==sum)
    count++;
    return count;
}
console.log(("count of pairs is") + totalPairCount(array,n,sum))

// que 2 
// Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

let arr2=[1,2,3,4,5,6,7,8,9,10];
let a,b;  let j=arr2.length-1;

for(let i=0;i<(arr2.length-1)/2;i++){
  a=arr2[i];b=arr2[j];
  a=a+b;b=a-b;a=a-b;
  arr2[i]=a;arr2[j]=b;
  j--;
}
console.log(arr2)


// que 3> 
// Write a program to check if two strings are a rotation of each other?
var str1="AACD";
var str2="ACDA"

function areRotating(){

    return(str1.length == str2.length) && 
    ((str1 + str2).indexOf(str2) != -1)
}

if(areRotating(str1,str2)){

    console.log("Strings are rotation of each other")
}
else{
    console.log("String are not rotation of each other")
}

// que 4

// Write a program to print the first non-repeated character from a string?
function nonRepeatingStr(str){
 let arr = new Array(char)
 for(let i=0;i<char;i++){
    arr[i] = [0,0];
 }

for(let i=0;i<str.length;i++){
    arr[str.charCodeAt(i)][0]++
    arr[str.charCodeAt(i)][1]=1
}

let res=Number.MAX_VALUE;
for(let i=0;i<char;i++)
if(arr[i][0] == 1){
    res=Math.min(res,arr[i][1])
}
return res;
}


var str = "abcdkhabcd"
const char=200;
var index = nonRepeatingStr(str)


if(index == Number.MAX_VALUE){
    console.log("Either max charecters are repeated string or empty string")
}
else{
    console.log("First non repeating charector is ",str[index])
}
//  que 5 
// Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerOfHanoi(num, from_rod,  to_rod,  aux_rod)
{
        if (num == 0)
        {
            return;
        }
        towerOfHanoi(num - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + num + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(num - 1, aux_rod, to_rod, from_rod);
    }

const num = 4;

    towerOfHanoi(num, 'A', 'C', 'B'); 

    // que 6 
    // Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
    function isOperator(x)
    {
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }

    function preToPost(pre_exp)
    {
        let s = [];
        let length = pre_exp.length;
        for (let i = length - 1; i >= 0; i--)
        {
            if (isOperator(pre_exp[i]))
            {
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
                let temp = op1 + op2 + pre_exp[i];
                s.push(temp);
            }
            else {
                s.push(pre_exp[i] + "");
            }
        }
        return s[s.length - 1];
    }
    let pre_exp = "*-A/BC-/AKL";
    console.log("Postfix : " + preToPost(pre_exp));


    // que 7 
    // Write a program to convert prefix expression to infix expression.
    function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            case '%':
                return true;
        }
        return false;
    }
    function convert(str)
    {
        let stack = [];
        let l = str.length;
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
    let exp = "*-A/BC-/AKL";
    console.log("Infix : " + convert(exp));

    // que 8 
    
    // Write a program to check if all the brackets are closed in a given code snippet.
function areBracketsBalanced(expr)
{
     
   
    let stack = [];
 
  
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
             
          
            stack.push(x);
            continue;
        }
 
        
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
 
 
    return (stack.length == 0);
}
 

let expr = "([{}])";
 

if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");


    // que 9 
    // Write a program to reverse a stack.
    let st = [];
    function insert_at_bottom(x)
    {
        if(st.length==0)
            st.push(x);
        else
        {
           
                let a = st.pop();
                insert_at_bottom(x);
      
              
                st.push(a);
        }
         
         
    }
function reverse()
{
    if(st.length > 0)
        {
              
          
            let x = st.pop();
            reverse();
              
          
            insert_at_bottom(x);
        }
}
 
st.push('1');
st.push('2');
st.push('3');
st.push('4');
console.log("Original Stack<br>");
console.log(st.join(" ")+"<br>");
reverse();
console.log("Reversed Stack<br>");
console.log(st.join(" "));
    

// que 10
// Write a program to find the smallest number using a stack.

class Stack10{
    constructor(){
      this.items = []
      this.length = 0
      this.push = (element) => {
        this.items.push(element)
        this.length+=1
      }
      this.pop = () => {
        if(this.length==0){
          return -1;
        }
        this.length-=1
        return this.items.pop()
      }
      this.peek = () => {
        if(this.length==0){
          return -1;
        }
        return this.items[this.length-1]
      }
    }
  }
  let stack10=new Stack10();
  // for(i=5;i<10;i++){stack10.push(i)}
  stack10.push(3534)
  stack10.push(1454)
  stack10.push(3543)
  stack10.push(3563)
  stack10.push(6436)
  stack10.push(2664)
  stack10.push(2475)
  stack10.push(2846)
  let smallest=stack10.pop(),temp10;
  
  let nk=stack10.length;
  for(i=0;i<nk-1;i++){
    temp10=stack10.peek();
    if(temp10<smallest)smallest=temp10
    stack10.pop()
  }
  console.log(smallest)
    
    
    
    
 

 
 

 
 
 

 
     
 
   
 
        
 
 
                
 
                
      
     

     
                
  
  
        
        
        
        
              
                
  
               
  
          
            
  
        
        
         
   