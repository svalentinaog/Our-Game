// Se necesita una funcion a la cual yo le pase un Query de CSS y este me busque ese elemento
// Y me escriba lo que yo le pase parametros: (query, text)
function renderText(query, text) {
    document.querySelector(query).textContent = text;
}
renderText(".enemy .box-name p", "Wasp");
renderText(".player .box-name p", "Bee");


// Se necesita crear un objeto que sera la representacion de un Enemigo o JUgador
// Este tendra VIDA, DEFENSE Y ATAQUE, NOMBRE y podra hacer las acciones, Atacar, Curarse, Defender
const character = {
    name: "Bee",
    damage: 10,
    defense: 5,
    hp: 100,
    attack: function () {
        console.log("el jugador " + this.name + " a atacado con " + this.damage + " de daño");
    },
    heal: function () {
        console.log("el jugador " + this.name + " se curo 5 puntos de vida" + " y ahora posee 105 de vida");
    },
    defend: function () {
        console.log("el jugador " + this.name + " se a defendido con " + this.defense + " de defensa y a obtenido 10 puntos más para su defensa");
    }
};

console.log(character.defend());



function createCharacter(name, damage, defense, hp) {
    return { 
        name: name,
        damage: damage,
        defense: defense,
        hp: hp,
        attack: function () {
            console.log("el jugador " + this.name + " a atacado con " + this.damage + " de daño");
        },
        heal: function () {
            console.log("el jugador " + this.name + " se curo 5 puntos de vida y ahora posee " + this.hp(hp+5) );
        },
        defend: function () {
            console.log("el jugador " + this.name + " se a defendido con " + this.defense + " de defensa y a obtenido 10 puntos más para su defensa");
        }
    }
}

const player = createCharacter()
console.log("Antes de curar HP: " + player.hp)
player.heal();
console.log("Despues de curar HP: " + player.hp)


const newCharacter = createCharacter("valen", 20, 13, 200);
console.log(newCharacter);