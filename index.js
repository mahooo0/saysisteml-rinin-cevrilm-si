        // in
const inbutton2=document.querySelector("#inbutton2")
const inbutton8=document.querySelector("#inbutton8")
const inbutton10=document.querySelector("#inbutton10")
const inbutton16=document.querySelector("#inbutton16")
const inicon=document.querySelector("#inicon")
let invalue=0
inbutton2.addEventListener("click",()=>{
    inicon.innerHTML="2"
    invalue=2
})
inbutton8.addEventListener("click",()=>{
    inicon.innerHTML="8"
    invalue=8
})
inbutton10.addEventListener("click",()=>{
    inicon.innerHTML="10"
    invalue=10
})
inbutton16.addEventListener("click",()=>{
    inp.type="text"
    inicon.innerHTML="16"
    invalue=16
})


        // out
const outbutton2=document.querySelector("#outbutton2")
const outbutton8=document.querySelector("#outbutton8")
const outbutton10=document.querySelector("#outbutton10")
const outbutton16=document.querySelector("#outbutton16")
const outicon=document.querySelector("#outicon")
let outvalue=0
outbutton2.addEventListener("click",()=>{
    outicon.innerHTML="2"
    outvalue=2
    outdiv.innerHTML=""
})
outbutton8.addEventListener("click",()=>{
    outicon.innerHTML="8"
    outvalue=8
    outdiv.innerHTML=""
})
outbutton10.addEventListener("click",()=>{
    outicon.innerHTML="10"
    outvalue=10
    outdiv.innerHTML=""
})
outbutton16.addEventListener("click",()=>{
    outicon.innerHTML="16"
    outvalue=16
    outdiv.innerHTML=""
})


            // functions
const convertfun=(inn ,out)=>{
    let value=inp.value
    let Num=parseInt(value ,inn )
    outdiv.innerHTML= Num.toString(out)
}






        // convert
const convertbtn=document.querySelector("#convertbtn")
const inp=document.querySelector("#inp")
const outdiv=document.querySelector("#outdiv")


convertbtn.addEventListener("click",()=>{

    if( invalue==0 || outvalue ==0 ){
        alert("saysitemlərini seçin")
        return NaN
    }
    let value=inp.value

    if(invalue==2){
        let arr=value.split("")
        console.log(arr);
        for( el of arr){
            if(el!=="0" && el!=="1"){
                alert('verileni düzgün daxil edin(1,0)')
                inp.value="" 
                return NaN
            }
        }
    }
    if(invalue==8){
        let arr=value.split("")
        console.log(arr);
        for( el of arr){
            if(el!=="0" && el!=="1"&& el!=="2"&& el!=="3"&& el!=="4"&& el!=="5"&& el!=="6"&& el!=="7"){
                alert('verileni düzgün daxil edin(0,1,2,3,4,5,6,7)')
                inp.value="" 
                return NaN
            }
        }
    }
    if(invalue==10){
        let arr=value.split("")
        console.log(arr);
        for( el of arr){
            if(el!=="0" && el!=="1"&& el!=="2"&& el!=="3"&& el!=="4"&& el!=="5"&& el!=="6"&& el!=="7"&& el!=="8"&& el!=="9"){
                alert('verileni düzgün daxil edin(0,1,2,3,4,5,6,7,8,9)')
                inp.value="" 
                return NaN
            }
        }
    }
    if(invalue==16){
        
        let arr=value.split("")
        console.log(arr);
        for( el of arr){
            let numcondition=el!=="0" && el!=="1"&& el!=="2"&& el!=="3"&& el!=="4"&& el!=="5"&& el!=="6"&& el!=="7"&& el!=="8"&& el!=="9"
            let strcondition= el!=="A"&& el!=="B"&& el!=="C"&& el!=="D"&& el!=="E"&& el!=="F"&& el!=="a"&& el!=="b"&& el!=="c"&& el!=="d"&& el!=="e"&& el!=="f"
            if( numcondition && strcondition  ){
                alert('verileni düzgün daxil edin(0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)')
                inp.value="" 
                return NaN
            }
        }
    }
    convertfun(invalue,outvalue)    
}
)





    


