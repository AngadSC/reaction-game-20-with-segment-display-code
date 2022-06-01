function one () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
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
}
input.onButtonPressed(Button.A, function () {
    if (trigger == 1) {
        game.addScore(1)
    }
})
function five () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
}
function four () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P1, 1022)
    pins.analogWritePin(AnalogPin.P2, 1014)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
}
function two () {
    clear_screen()
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
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
}
let trigger = 0
game.setScore(0)
trigger = 0
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
    if (game.score() == 1) {
        clear_screen()
        basic.pause(2000)
        one()
        basic.pause(2000)
        two()
        basic.pause(2000)
        three()
        basic.pause(2000)
        four()
        basic.pause(2000)
        five()
        basic.pause(2000)
        six()
        basic.pause(2000)
        seven()
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (game.score() == 2) {
        clear_screen()
        one()
        basic.pause(1500)
        two()
        basic.pause(1500)
        three()
        basic.pause(1400)
        four()
        basic.pause(1500)
        five()
        basic.pause(1500)
        six()
        basic.pause(1500)
        seven()
        basic.pause(1500)
    }
})
basic.forever(function () {
    if (game.score() == 0) {
        clear_screen()
        basic.pause(2000)
        one()
        basic.pause(2000)
        two()
        basic.pause(2000)
        three()
        basic.pause(2000)
        four()
        basic.pause(2000)
        five()
        basic.pause(2000)
        six()
        basic.pause(2000)
        seven()
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (game.score() == 5) {
        clear_screen()
        basic.showString("WINNER")
    }
})
basic.forever(function () {
    if (game.score() == 3) {
        clear_screen()
        one()
        basic.pause(1000)
        two()
        basic.pause(1000)
        three()
        basic.pause(1000)
        four()
        basic.pause(1000)
        five()
        basic.pause(1000)
        six()
        basic.pause(1000)
        seven()
        basic.pause(1000)
    }
})
basic.forever(function () {
    if (game.score() == 4) {
        clear_screen()
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
    }
})
basic.forever(function () {
    if (game.score() == 5) {
        clear_screen()
        one()
        basic.pause(300)
        two()
        basic.pause(300)
        three()
        basic.pause(300)
        four()
        basic.pause(300)
        five()
        basic.pause(300)
        six()
        basic.pause(300)
        seven()
        basic.pause(300)
        clear_screen()
        basic.pause(10000)
    }
})
