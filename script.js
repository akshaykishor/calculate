function displayvalue(num){
    let res=document.querySelector("result")
    res.value+=num
}
var displayvalue=(num)=>result.value+=num
var clearbox=()=>result.value=""

var evaluateExpression=()=>result.value=eval(result.value)

function clearbox(){
result.value=""
}

function evaluateExpression(){
    let expr=result.value;
    let out=eval(expr)
    result.value=out;
}