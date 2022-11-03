

var resultField=$("#result")
function InsurtNumber(number){
    var existingNumber=resultField.val()
    resultField.val( existingNumber+number)

}

function ClearResult(){
    resultField.val('')
}

function CalculateFun()
{
   var Answer= eval(resultField.val())
   resultField.val(Answer)
}

function DeleteFun(){
    var value=resultField.val()

if(value!='')
{
    resultField.val(value.slice(0,-1))

}

}