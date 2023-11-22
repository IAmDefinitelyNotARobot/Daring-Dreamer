let brush = document.getElementById("C").getContext("2d")
let w = 400
let h = 400
let c = 0
dx = 30
let min = 0
let max = 80
let rects = [[50, 100, 50], [100, 200, 60], [300, 50, 20]] //[x, y, w, h]...]
setInterval(drawFrame, 200)
function drawFrame(){
updateData()
drawBackground()
drawRects()

}
function updateData(){
    for(let i = 0; i < rects.length; ++i){
        rects[i][0]-= dx
        if(rects[i][0] < 0) {
           rects[i][0] = w + Math.floor(Math.random()*(max-min)+min)
           rects[i][1] = rects[i][1] + Math.floor(Math.random()*(max-min)+min)
           if (rects[0][1] <= 0 || rects[0][1] >= 3/4*h) {
            rects[0][1] = 1/4*h 
           }
       }
    }
}
function drawRects(){
    for(let i = 0; i < rects.length; ++i){
       brush.fillStyle = "#606060"
       brush.fillRect(rects[i][0], rects[i][1], rects[i][2], 3/4*h-rects[i][1])
    
}
}

function drawBackground(){
    
    brush.fillStyle = "#ccf5ff"
    brush.fillRect(0, 0, w, 3/4*h)
    brush.fillStyle = "#009900"
    brush.fillRect(0,  3/4*h, w, 1/4*h)
    brush.fillStyle = "#808080"
    brush.fillRect(0, 4/5*h, w, 1/16*h)
    brush.fillStyle = "#edf02d"
    brush.fillRect(0, 330, 10, 5)
    brush.fillStyle = "#005ce6"
    brush.fillRect(0, 360, w, 1/12*h)
  //yellow lines
   for(let i = 0; i < 15; ++i){
      brush.fillStyle = "#edf02d"
       brush.fillRect(i*30, 330, 10, 5)
    }
    //car
    brush.fillStyle = "#e60000"
    brush.fillRect(65, 310, 50, 20)
    brush.fillStyle = "#e60000"
    brush.fillRect(74, 305, 24, 20)
    brush.fillStyle = "#000000"
    brush.fillRect(72, 330, 10, 7)
    brush.fillStyle = "#000000"
    brush.fillRect(100, 330, 10, 7)
    
 

}

