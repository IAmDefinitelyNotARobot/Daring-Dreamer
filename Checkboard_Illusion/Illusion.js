let painter = document.getElementById("c1").getContext("2d")
let big = 10 //Size of the large square
let small = 4 //Size of the small square

//Chestboard
for(let r = 0; r < 400/big; ++r){
    for (let c = 0; c < 400/big; ++c){
        if ((r+c)%2 == 0){
            painter.fillStyle = "#0033cc"
        } else {
            painter.fillStyle = "#4dffc3"
        }
        
        painter.fillRect(c*big, r*big, big, big)
    }
}


//Smaller Squares
for(let r = 0; r < 400/big - 1; ++r){
    for (let c = 0; c < 400/big - 1; ++c){
        if ((r+c)%2 == 0){
            painter.fillStyle = "#000000"
        } else {
            painter.fillStyle = "#ffffff"
        }
        if (r > 1/4*400/big && r < 3/4*400/big && c > 1/4*400/big && c < 3/4*400/big ){
            if (painter.fillStyle === "#000000"){
                painter.fillStyle = "#ffffff"
            } else{
                painter.fillStyle = "#000000"
            }
        }
        painter.fillRect(c*big + big-small/2, r*big + big-small/2, small, small)
    }
}

