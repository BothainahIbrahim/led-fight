input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
    Player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (shoot.isTouching(Enemy)) {
            score += 1
            game.addScore(1)
            Enemy.delete()
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
            Enemy = game.createSprite(randint(0, 4), randint(-4, 0))
            shoot.delete()
        } else {
            if (shoot.get(LedSpriteProperty.Y) <= 0) {
                music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
                score = 0
                shoot.delete()
                basic.showString("LOSS")
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.slide), SoundExpressionPlayMode.InBackground)
    Player.move(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(score)
})
let shoot: game.LedSprite = null
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
let score = 0
let life = 4
score = 0
let LF1 = 0
Player = game.createSprite(2, 4)
Enemy = game.createSprite(randint(0, 4), randint(-4, 0))
