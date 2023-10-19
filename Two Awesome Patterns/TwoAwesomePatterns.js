//Cool Checkered Pattern
let canvas1 = document.getElementById("C1");
let painter1 = canvas1.getContext("2d");
//Background
painter1.fillStyle = "#000000";
painter1.fillRect(0, 0, 400, 400);
//Pattern
painter1.fillStyle = "#66ffcc";
let w = 20
let h = 20
let y = 10
    for(let j = 0; j < 13; j++) {
        let x = 10
        for(let i = 0; i < 13; i++) {  
            if(i%2 === 0 && j%2 === 0 || i%2 === 1 && j%2 === 1) {
            painter1.fillRect(x, y, w, h);
            }
            x = x + 30
        }
        y = y + 30
    }    





    //Pyramid of Squares
let canvas2 = document.getElementById("C2");
let painter2 = canvas2.getContext("2d");
painter2.fillStyle = "#000000";
painter2.fillRect(0, 0, 400, 400);
let w2 = 20
let h2 = 20
let y2 = 10
let j2 = 0
while(j2 < 13){
    let x2 = 10
    let i2 = 0
    while(i2 < 13){
        if(j2 >= i2 && i2 >= 12 - j2){
    
            painter2.fillRect(x2, y2, w2, h2);
        }   painter2.fillStyle = "#66ffcc";
            x2 = x2 + 30
            i2++
        
    }
    y2 = y2 + 30
    j2++
}