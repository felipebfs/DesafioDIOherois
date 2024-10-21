let nomeHeroi = "hulk"
let xp = 500
let nivel

if (xp < 100){
    nivel = "madeira"
} else if (xp < 200){
    nivel = "ferro"
} else if (xp < 300){
    nivel = "prata"
} else if (xp < 400){
    nivel = "ouro"
}else [
    nivel = "platina"
]

console.log("o herói " + nomeHeroi + "alcançou o nivel " + nivel)