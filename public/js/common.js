const sendData=(path,data)=>{
    
    fetch(path,{
    method:'post',
    headers:new Headers({'Content-Type':'application/json'}),
    body:JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(data=>processData(data));
}
const processData=(data)=>{
    
    loader.style.display=null;
    if(data.alert){
        showForm(data.alert);
    }
    else if(data.name){
        sessionStorage.user=JSON.stringify(data);
        location.replace('/');

    }
}
const showForm=(err)=>{
    let errEle=document.querySelector('.error')
    errEle.innerHTML=err;
    errEle.classList.add('show');
}