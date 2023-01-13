input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    music.playMelody("D F - D B E C F ", 900)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # .
        `)
    music.playMelody("C5 A F C C C C C ", 80)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
