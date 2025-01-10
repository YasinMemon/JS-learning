const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const HEAL_VALUE = 20
const monsterAttackValue = 14

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife);

function reset(){
    currentMonsterHealth = chosenMaxLife
    currentPlayerHealth = chosenMaxLife
    resetGame(chosenMaxLife)
}

function endRound(){
    const initaialPlayerHealt = currentPlayerHealth
    const playerDmg = dealPlayerDamage(monsterAttackValue)
    currentPlayerHealth -= playerDmg

    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false
        removeBonusLife()
        currentPlayerHealth = initaialPlayerHealt
        setPlayerHealth(initaialPlayerHealt);
        alert("You would be die but bonus life saved you")
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0 ){
        alert("You won!")
        reset()
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert("You loss")
        reset()
    }else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0 ){
        alert("It's Draw")
        reset()
    }
}

function monsterAttack (mode){
    let maxDamage
    if(mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE
    }else{
        maxDamage = STRONG_ATTACK_VALUE
    }
    const dmg = dealMonsterDamage(ATTACK_VALUE)
    currentMonsterHealth -= dmg
    endRound()
}

function attackHandler (){
    monsterAttack('ATTACK')
}

function strongAttackHandler(){
    monsterAttack('STRONG_ATTACK')
}

function healHandler(){
    increasePlayerHealth(HEAL_VALUE)
    endRound()
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healHandler)