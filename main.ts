function Clignote_Droite () {
    Droite.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    Droite.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index <= 2; index++) {
        Clignote_Gauche()
    }
})
input.onButtonPressed(Button.AB, function () {
    Stop.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    Stop.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
})
function Clignote_Gauche () {
    Gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    Gauche.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 2; index++) {
        Clignote_Droite()
    }
})
let Droite: neopixel.Strip = null
let Stop: neopixel.Strip = null
let Gauche: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
Gauche = strip.range(0, 2)
Stop = strip.range(0, 5)
Droite = strip.range(3, 2)
basic.forever(function () {
	
})
