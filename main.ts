namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (Level == 1) {
        game.showLongText("\"Congratulations on beating level 1!\" *You swear you heard a crash in your yard* \"Press A to Start Level 2!", DialogLayout.Full)
        game.splash("ERR404")
        game.splash("Restart Initiated:", "Please Retry")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
        Level = 2
    } else if (Level == 2) {
        game.showLongText("\"Congratulations on beating level 1!\" *You think you hear a window downstairs break* \"Press A to Start Level 2!", DialogLayout.Full)
        game.splash("ERR404")
        game.splash("Rest@rt 1niti@ted:", "Ple@se Retry")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
        Level = 3
    } else if (Level == 3) {
        Level = 4
        game.showLongText("\"Congratulations on beating level 1!\" *You hear the door to your room creak open* \"Press A to Start Level 2!", DialogLayout.Full)
        game.splash("ERR404")
        game.splash("R3st@rt 1niti@t3d:", "Pl3@s3 R3try")
    } else if (Level == 4) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
        Level = 0
        NPC1.setImage(assets.image`myImage`)
        animation.stopAnimation(animation.AnimationTypes.All, NPC1)
    } else {
        game.splash("ERR666")
        game.splash("Failure:", "Game Executed")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    if (Level == 1 && TT1 == 0) {
        game.showLongText("*Happily Blurbs* blurbblurb", DialogLayout.Bottom)
        TT1 = 1
    } else if (Level == 2 && TT1 == 1) {
        game.showLongText("bLuRbblurBBlurb", DialogLayout.Bottom)
        TT1 = 2
    } else if (Level == 3 && TT1 == 2) {
        game.showLongText("BLURBBLURBBLURBBLURB", DialogLayout.Bottom)
        TT1 = 3
    } else if (Level == 4 && TT1 == 3) {
        game.showLongText("...", DialogLayout.Bottom)
        TT1 = 4
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile14`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    mySprite.destroy()
    pause(100)
    Respawn()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
    }
})
function Respawn () {
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 480
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.vy = -150
    }
})
function GameStart () {
    scene.setBackgroundColor(8)
    tiles.setTilemap(tilemap`level1`)
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    NPC1 = sprites.create(assets.image`clownFish0`, SpriteKind.NPC)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.ay = 480
    tiles.placeOnRandomTile(NPC1, assets.tile`myTile1`)
    Level = 1
    Music = 1
    animation.runImageAnimation(
    NPC1,
    assets.animation`clownFishLeft`,
    100,
    true
    )
}
let Music = 0
let TT1 = 0
let NPC1: Sprite = null
let mySprite: Sprite = null
let Level = 0
scene.setBackgroundColor(15)
game.splash("ERR 404:", "RESTART INITIATED")
game.splash("A Horror Platformer by:", "Team Huuuuuuuuumins")
game.splash("Press A to begin", "your game")
scene.setBackgroundColor(10)
game.showLongText("*You bought a retro platformer called Jumpy Block*", DialogLayout.Center)
game.showLongText("It had no reviews or ratings but it appeared that 341 people had bought it, probabaly some kind of glitch.", DialogLayout.Center)
game.showLongText("*You turn on your new game* \"Welcome to Jumpy Block! Press A to begin your jumping experience!\"", DialogLayout.Center)
GameStart()
forever(function () {
    if (Music == 1) {
        music.playMelody("C5 A G F A G F D ", 120)
    } else if (Music == 2) {
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (Music == 3) {
        music.playMelody("C G A F G E F D ", 40)
    } else {
    	
    }
})
