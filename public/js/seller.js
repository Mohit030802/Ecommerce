let loader=document.querySelector('.loader');
let applyBtn=document.querySelector('.apply-btn');
applyBtn.addEventListener('click',()=>{
    let businessName=document.querySelector('#name').value;
    let address=document.querySelector('#address').value;
    let about=document.querySelector('#about').value;
    let number=document.querySelector('#number').value;
    if(!businessName.lenght||!address.lenght||!about.lenght||number.lenght<10||!Number(number)){
        // alert('error')
        showForm('Some Information is/are incorrect');

    }
    else{
        loader.style.display='block';
    }
})