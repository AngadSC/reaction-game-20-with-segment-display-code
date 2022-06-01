let trigger = 0
function one () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    trigger = 0
}
function clear_screen () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    trigger = 0
}
function three () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    trigger = 0
}
input.onButtonPressed(Button.A, function () {
    if (trigger == 1) {
        game.addScore(1)
    }
    if (game.score() == 5) {
        basic.showString("WINNER")
    }
})
function five () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    trigger = 0
}
function four () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P1, 1022)
    pins.analogWritePin(AnalogPin.P2, 1014)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    trigger = 0
}
function two () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    trigger = 0
}
function seven () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    trigger = 1
}
function six () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
    trigger = 0
}
loops.everyInterval(500, function () {
    clear_screen()
    basic.pause(500)
    one()
    basic.pause(500)
    two()
    basic.pause(500)
    three()
    basic.pause(500)
    four()
    basic.pause(500)
    five()
    basic.pause(500)
    six()
    basic.pause(500)
    seven()
    basic.pause(500)
})
