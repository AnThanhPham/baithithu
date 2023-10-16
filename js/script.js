// coding implementation
function checkNumber(number){
    return !isNaN(Number.parseFloat(number))
}
let btnSubmit = document.querySelector('#submit')
btnSubmit.onclick = function(e){
    e.preventDefault();
    let email = document.querySelector('#email').value
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email == '' || email ==null){
        alert('Bạn phải điền email')
    }else if(!regexEmail.test(email)){
        alert("Bạn phải nhập đúng định dạnh email")
    }
    let comment = document.querySelector('#com').value
    if(comment == '' || comment == null){
        alert('Comment này phải điền')
    }
    let rate = document.querySelector('#rate').value
    if(!checkNumber(rate)){
        alert('rate phải điền vào là một số thực')
    }
}
document.querySelector('#email').onblur = function(){
    let email = document.querySelector('#email').value
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email == '' || email ==null){
        alert('Bạn phải điền email')
    }else if(!regexEmail.test(email)){
        alert("Bạn phải nhập đúng định dạnh email")
    }
}
document.querySelector('#com').onblur = function(){
    let comment = document.querySelector('#com').value
    if(comment == '' || comment == null){
        alert('Comment này phải điền')
    }
}
document.querySelector('#rate').onblur = function(){
    let rate = document.querySelector('#rate').value
    if(!checkNumber(rate)){
        alert('rate phải điền vào là một số thực')
    }
}
// end coding implementation