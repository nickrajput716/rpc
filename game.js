let userchoice=0;
let computerchoice=0;
let yourcount=0;
let comcount=0;


const childrens=document.querySelectorAll(".child-image")
const display=document.querySelector("#result")
const yours=document.querySelector("#your-score")
const comp=document.querySelector("#comp-score")



childrens.forEach((child)=>child.addEventListener("click",
    ()=>{ let ids=child.getAttribute("id")
        userchoice=ids
        computer(userchoice)
}))


let computer= (userchoice)=>{
    let option=["rock","paper","scissors"]
    let randomvalue =Math.floor(Math.random(option)*3)
    computerchoice=option[randomvalue]
  mainfun(userchoice,computerchoice)
}

let draw=(userchoice,computerchoice)=>{
    display.innerText=`it's a draw ,both have ${computerchoice}`;
    display.style.background="#36454F"
    display.style.color="whitesmoke"
}


let mainfun=(userchoice,computerchoice)=>{
    console.log("user choice is ",userchoice,"\ncomputer choice is ",computerchoice)
    if ( userchoice===computerchoice) {
       draw(userchoice,computerchoice)
    }
    else{
        var decision=true;
        if(userchoice==="rock")
            {
                decision=computerchoice==="scissors"?true:false
                winning(decision,computerchoice,userchoice)

            }
        else if(userchoice==="paper")
            {
                decision=computerchoice==="rock"?true:false
                winning(decision,computerchoice,userchoice)
            }
        else{
                decision=computerchoice==="paper"?true:false
                winning(decision,computerchoice,userchoice)
            }
        }
     
}

let winning=(decision,computerchoice,userchoice)=>{

    if (decision){ display.innerText=`you win your ${userchoice} beat ${computerchoice}`
        display.style.background="green"
        display.style.color="whitesmoke"
        yourscore()
    }
        
   
    else{  display.innerText=`you lost your ${userchoice} can't beat ${computerchoice}`
        display.style.background="red"
        display.style.color="whitesmoke"
        compscore()

    }
}


let yourscore=()=>{
    yourcount++
    yours.innerText=yourcount

}
let compscore=()=>{
    comcount++
    comp.innerText=comcount

}