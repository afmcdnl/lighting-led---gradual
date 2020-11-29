let brightness = 0
basic.forever(function () {
    while (brightness < 240) {
        led.setBrightness(brightness)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        brightness += 20
    }
    while (0 < brightness) {
        led.setBrightness(brightness)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        brightness += -20
    }
})
