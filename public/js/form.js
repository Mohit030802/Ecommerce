let formBtn=document.querySelector('.submit-btn');
let loader=document.querySelector('.loader');

formBtn.addEventListener('click', ()=>{
    let fullname=document.querySelector('#name');
    let email=document.querySelector('#email');
    let password=document.querySelector('#password');
    let number=document.querySelector('#number');
    let tac=document.querySelector('#tc');
    // if(fullname.value.length<2){
    //     showForm("Name must contain more than 2 letters")
    // }else if(!email.value.length){
    //     showForm("Enter your email")
    // }else if(password.value.length<8){
    //     showForm("Minimum password length must be 8 characters")
    // }
    // else if(Number(number)||number.value.length<10){
    //     showForm("invalid number, please enter a valid number")
    // }
    // else if(!tac.checked){
    //     showForm("You must agree to Terms and Conditions")
    // }else{
        loader.style.display='block';
        sendData('/signup',{
            name:fullname.value,
            email:email.value,
            password:password.value,
            number:number.value,
            tac:tac.checked

        })
// }

})