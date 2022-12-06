radio.onReceivedNumber(function (receivedNumber) {
    Pripominka()
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 90)
        Uzamknout = 1
        basic.showIcon(IconNames.Happy)
        basic.pause(10000)
        basic.showIcon(IconNames.Asleep)
        basic.pause(1000)
        Pripominka()
    } else {
        if (receivedNumber == 3) {
            Uzamknout = 1
            basic.showIcon(IconNames.Sad)
            basic.pause(10000)
            basic.showIcon(IconNames.Asleep)
            basic.pause(1000)
            Pripominka()
        } else {
            if (receivedNumber == 4) {
                pins.servoWritePin(AnalogPin.P0, 0)
                Uzamknout = 1
                basic.showLeds(`
                    . # # # .
                    # . . . #
                    # # # # #
                    # # . # #
                    # # # # #
                    `)
                Prerus = 1
                basic.pause(10000)
                basic.showIcon(IconNames.Asleep)
                basic.pause(1000)
                Pripominka()
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.clearScreen()
    USTUP = "" + USTUP + "A"
})
function Pripominka () {
    if (Uzamknout == 1) {
        for (let index = 0; index < 10000; index++) {
            basic.clearScreen()
            basic.showLeds(`
                . # # # .
                # . . . .
                # # # # #
                # # . # #
                # # # # #
                `)
            basic.pause(500)
            basic.clearScreen()
            basic.showLeds(`
                . # # # .
                # . . . #
                # # # # #
                # # . # #
                # # # # #
                `)
            if (Prerus == 1) {
                break;
basic.clearScreen()
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    if (heslo == USTUP) {
        radio.sendNumber(2)
        basic.showString("GOOD")
    } else {
        radio.sendNumber(3)
        basic.showString("FAILED")
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.clearScreen()
    USTUP = "" + USTUP + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    radio.sendNumber(4)
    basic.showString("lock")
})
let USTUP = ""
let Prerus = 0
let Uzamknout = 0
let heslo = ""
heslo = "AABAAB"
Uzamknout = 0
Prerus = 1
radio.sendNumber(4)
basic.forever(function () {
    radio.setGroup(5)
})
