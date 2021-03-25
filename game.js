// when the ICE BLAST button is clicked, the HP goes down by 15
// when the FIREBALL button is clicked, the HP goes down by 10
// when the LIGHTNING button is clicked, the HP goes down by 5
// health can never go lower than 0

//when HP reaches zero the dragon dies and a reset button is drawn
//when reset button is clicked the HP goes back to 100, 
//reset button disappears and game basically"resets"








let health = 100
let humanHealth = 100
let armor = 0


let attack = [
    {
        name: 'iceblast',
        damage: 15,
    },
    {
        name: 'fireball',
        damage: 10,
    },
    {
        name: 'lightning',
        damage: 5,
    },
]
let dragon = [
    {
        name: 'scalearmor',
        defense: 10,
    },
    {
        name: 'bigheal',
        heal: -10,
    },
    {
        name: 'killwizard',
        damage: 100,
    },

]



// NOTE overlap damage doesn't work
function slap(pAttack) {
    let move = attack.find(f => f.name == pAttack)
    if (armor > 0) {
        armor -= move.damage
        armor = move.damage

        drawArmor()
    }
    else {
        health -= move.damage
        if (health <= 0) {
            health = 0
            death()
        }
        drawHealth()
    }
}
function slapDragon(dAttack) {
    let move = dragon.find(f => f.name == dAttack)
    health -= move.damage
    if (health <= 0) {
        health = 0
        humanDeath()
    }
    drawHumanHealth()

}

function healDragon(dHeal) {
    let move = dragon.find(f => f.name == dHeal)
    health -= move.heal
    if (health >= 100) {
        health = 100
    }
    drawHealth()

}



function armorDragon(dArmor) {
    let move = dragon.find(f => f.name == dArmor)
    armor += move.defense
    if (armor >= 10) {
        armor = 10
    }
    drawArmor()

}





function drawHealth() {
    document.getElementById('bossHealth').innerText = ` ${health}`
}
function drawArmor() {
    document.getElementById('bossArmor').innerText = ` ${armor}`
}

function drawHumanHealth() {
    document.getElementById('humanHealth').innerText = ` ${health}`
}







function death() {
    document.getElementById('deado').innerHTML = `
        <div class="card m-5 p-5 text-center bg-light shadow">
        <span>Oh he dead... Wanna kill him again?</span>
        <br>
        <button onclick="reset()">RESET</button>
        </div>
        `
}
function humanDeath() {
    document.getElementById('deado').innerHTML = `
        <div class="card m-5 p-5 text-center bg-light shadow">
        <span>Oh you dead... Wanna try again?</span>
        <br>
        <button onclick="reset()">RESET</button>
        </div>
        `
}









function reset() {
    health = 100
    drawHealth()
    document.getElementById('deado').innerHTML = ` `
}

// function alert(health)