def on_button_pressed_a():
    global DRUHÉ
    DRUHÉ = "" + DRUHÉ + "A"
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if heslo == DRUHÉ:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global DRUHÉ
    DRUHÉ = "" + DRUHÉ + "B"
input.on_button_pressed(Button.B, on_button_pressed_b)

DRUHÉ = ""
heslo = ""
heslo = "AABAAB"
pins.servo_write_pin(AnalogPin.P0, 0)