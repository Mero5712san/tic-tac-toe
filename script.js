let boxes = document.querySelectorAll(".box")
let turn = "X"
let isgameover = false

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click",()=>{
        if(!isgameover && e.innerHTML === ""){
            e.innerHTML = turn
            checkwin()
            chechdraw()
            changeturn()
        }
    })
})

function changeturn(){
    if(turn === "X"){
        turn = "O"
        document.querySelector(".bg").style.left="85px"
    }
    else{
        turn = "X"
        document.querySelector(".bg").style.left="0px"
    }
}

function checkwin(){
    let winconditions = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    for(let i = 0 ; i < winconditions.length ; i++){
        let v0 = boxes[winconditions[i][0]].innerHTML
        let v1 = boxes[winconditions[i][1]].innerHTML
        let v2 = boxes[winconditions[i][2]].innerHTML

        if(v0 != "" && v0 === v1 && v0 === v2){
            isgameover = true
            document.querySelector("#results").innerHTML = turn + " Wins"
            document.querySelector("#play-again").style.display = "inline"

            for(j = 0 ; j < 3 ; j++){
                boxes[winconditions[i][j]].style.background = "linear-gradient(319deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
                boxes[winconditions[i][j]].style.color = "white"
            }
        }
    }
}

function chechdraw(){
    if(!isgameover){
        let isdraw = true
        boxes.forEach(e =>{
            if(e.innerHTML === "") isdraw = false
        })
        if(isdraw){
            isgameover = true
            document.querySelector("#results").innerHTML ="Draw"
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click",()=>{
    isgameover = false
    turn = "X"
    document.querySelector(".bg").style.left = "0"
    document.querySelector("#results").innerHTML = ""
    document.querySelector("#play-again").style.display = "none"

    boxes.forEach( e =>{
        e.innerHTML = ""
        e.style.removeProperty("background-color")
        e.style.color ="#fff"
    })
})