

const diceNum = document.querySelector('#numOfDice')
const rollBtn = document.querySelector('.rollbtn')
const diceImages = document.querySelector('#diceImg')
const diceOutcome = document.querySelector('#diceOutcome')

let value = []
let images = []


const rollDice = function(){
    value = []
    images = []

    for(let i = 0; i < diceNum.value ; i++){
        let randomSide = Math.floor(Math.random() * 6 + 1)
        value.push(randomSide)
        images.push(`
            <img src="images/${randomSide}.png">
        `)

    }
    diceOutcome.innerHTML = `Dice outcome sides: ${value.join(', ')} `
    diceImages.innerHTML = images

    

}

rollBtn.addEventListener('click', rollDice)