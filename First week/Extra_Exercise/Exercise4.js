/*
04 - Faça um programa que receberá a hora inicial e a hora final de um jogo. A
seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um
dia e terminar em outro, tendo uma duração máxima de 24 horas.
*/

let startPlay = 12
let finalPlay = 12
let day = 24
let game = finalPlay - startPlay

if (game <= 0) {
    game = finalPlay - startPlay + (day)
} else if (game > 0) {
    game = finalPlay - startPlay
}


console.log(game)