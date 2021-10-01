const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;

let isJumping = false;
function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            Jump();
        }
        
    }
}
function Jump(){
    isJumping = true;

    let upInterval = setInterval(()=>{
        if(position >= 200){
            clearInterval(upInterval)

            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval)
                    isJumping = false;
                }else{ 
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            })
        }else{
            position += 20;
            dino.style.bottom = position + 'px';
        }
       
    }, 20)
}

function createCactus(){
    const cactus = document.createElement('div');
    let positionCactus = 1000;
    let randomCactus = Math.random() * 5000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
    let leftInterval = setInterval(()=>{
       
         if(positionCactus < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
         }else if(positionCactus > 0 && positionCactus < 60 && position < 60){
             clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>'; 
         }
         else{
            positionCactus -= 10;
            cactus.style.left = positionCactus + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomCactus);
}
createCactus();

document.addEventListener('keydown', handleKeyUp)