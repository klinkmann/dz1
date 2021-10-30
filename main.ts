input.onButtonPressed(Button.A, function () {
    age = age + 1
})
input.onButtonPressed(Button.B, function () {
    age = age - 1
})
let age = 0
age = 13
basic.forever(function () {
    basic.showNumber(age)
})
