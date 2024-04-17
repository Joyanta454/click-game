const startButton = document.getElementById('startButton');
const clickButton = document.getElementById('clickButton');
const showCount = document.getElementById('show-count');

const winScore = 10;
let count = 0;

startButton.addEventListener('click', ()=>{
    start();
})

clickButton.addEventListener('click', ()=>{
    
    //update count value by 1;
    count++;

    //Show count in UI
    showCount.textContent = count;
})

const start = ()=>{
    count = 0;

    showCount.textContent = count;

    clickButton.removeAttribute('disabled');

    startCount();
}

const startCount = ()=>{
    setTimeout(()=>{
        if(isWin()){
            showCount.textContent = 'You Won!'
        }else{
            showCount.textContent = 'You Lost!'
        }

        clickButton.setAttribute('disabled', true);
    }, 5000)
}

const isWin = ()=>{
    if(count < winScore){
        return false;
    }else{
        return true;
    }
}