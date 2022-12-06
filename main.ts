radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showIcon(IconNames.Happy)
        basic.pause(10000)
        basic.showIcon(IconNames.Asleep)
        basic.pause(1000)
    } else {
        if (receivedNumber == 3) {
            basic.showIcon(IconNames.Sad)
            basic.pause(10000)
            basic.showIcon(IconNames.Asleep)
            basic.pause(1000)
        } else {
            if (receivedNumber == 4) {
                pins.servoWritePin(AnalogPin.P0, 0)
                basic.showLeds(`
                    . # # # .
                    # . . . #
                    # # # # #
                    # # . # #
                    # # # # #
                    `)
                basic.pause(10000)
                basic.showIcon(IconNames.Asleep)
                basic.pause(10000)
                led.setBrightness(67)
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.clearScreen()
    USTUP = "" + USTUP + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (heslo == USTUP) {
        radio.sendNumber(2)
        basic.showString("GOOD")
        Uzamknout = 1
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
    Uzamknout = 5
    Zhasni = 2
})
let Zhasni = 0
let USTUP = ""
let Uzamknout = 0
let heslo = ""
heslo = "AABAAB"
Uzamknout = 0
let Prerus = 1
radio.sendNumber(4)
basic.forever(function () {
    radio.setGroup(5)
})
basic.forever(function () {
    if (Uzamknout == 1) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # # # # #
            # # . # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # # . # #
            # # # # #
            `)
    }
    if (Zhasni == 2) {
        basic.clearScreen()
    }
})
