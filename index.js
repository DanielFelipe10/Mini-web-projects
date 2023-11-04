const cards = document.querySelectorAll('.card');


function generateColor(){
    const char = "0123456789ABCDEF";
    let color = "#0";
    for(let i = 0; i < 5; i++){
        color+= char[Math.floor(Math.random()*16)];
    }
    return color;
}

cards.forEach(card => {
    const aleatoryColor = generateColor();
    card.style.backgroundColor = aleatoryColor;
})