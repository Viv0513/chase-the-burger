sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Burger.setPosition(randint(160, 120), 1)
    info.startCountdown(10)
})
let Burger: Sprite = null
scene.setBackgroundColor(10)
let mySprite = sprites.create(assets.image`Zed`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
Burger = sprites.create(assets.image`burger`, SpriteKind.Food)
