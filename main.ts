input.onButtonPressed(Button.A, function () {
    Gauche.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.AB, function () {
    Stop.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    Droite.showColor(neopixel.colors(NeoPixelColors.White))
})
let Droite: neopixel.Strip = null
let Stop: neopixel.Strip = null
let Gauche: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
Gauche = strip.range(0, 2)
Stop = strip.range(0, 5)
Droite = strip.range(3, 2)
strip.showRainbow(1, 360)
basic.forever(function () {
	
})
