const input=document.querySelector(".todovalue")
const addbtn=document.querySelector(".btn")
const boxitems=document.querySelector(".all-aitem")


function addbtnfun(){

    let todovalue=input.value
   if(todovalue){

    let newdiv=document.createElement("div")
    newdiv.className="add-box"
    newdiv.innerHTML=todovalue
    boxitems.append(newdiv)
    console.log(newdiv);

    }

    input.value=""
}

addbtn.addEventListener("click",addbtnfun)
