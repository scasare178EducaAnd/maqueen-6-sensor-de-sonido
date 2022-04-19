let Sonido = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    Sonido = input.soundLevel()
    if (Sonido > 50) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        maqueen.motorStop(maqueen.Motors.M1)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
