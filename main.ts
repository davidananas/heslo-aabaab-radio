radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showIcon(IconNames.Happy)
        basic.showString("GOOD")
    } else {
        if (receivedNumber == 3) {
            basic.showIcon(IconNames.Sad)
            basic.showString("FALSE")
        } else {
            if (receivedNumber == 4) {
                pins.servoWritePin(AnalogPin.P0, 0)
                basic.showString("lock")
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    USTUP = "" + USTUP + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (heslo == USTUP) {
        radio.sendNumber(2)
        basic.showIcon(IconNames.Happy)
    } else {
        radio.sendNumber(3)
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    USTUP = "" + USTUP + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
let USTUP = ""
let heslo = ""
heslo = "AABAAB"
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    radio.setGroup(5)
})
