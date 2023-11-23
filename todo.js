const input=document.querySelector(".todovalue")
const addbtn=document.querySelector(".btn")
const boxitems=document.querySelector(".all-aitem")


function addbtnfun(){

    let todovalue=input.value
   if(todovalue){

    let newdiv=document.createElement("div")
    newdiv.className="add-box"
    newdiv.innerHTML=todovalue
    let brelem=document.createElement("br")
    boxitems.append(newdiv)
    boxitems.append(brelem)
    console.log(newdiv);

    }

    input.value=""
}

addbtn.addEventListener("click",addbtnfun)