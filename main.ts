namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const snake = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    falling = sprites.create(img`
            . . 2 2 2 2 . . 
                    . 2 2 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    . 2 2 2 2 2 2 . 
                    . . 2 2 2 2 . .
        `, SpriteKind.Projectile)
    falling.setBounceOnWall(true)
    falling.setPosition(sprite.x, sprite.y - 5)
    falling.setVelocity(sprite.vx, 0 - sprite.vy)
    falling.ay = sprite.ay
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Projectile2, function on_hit_wall(sprite3: Sprite, location: tiles.Location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`
        tile3
    `)) {
        info.changeLifeBy(-1)
        sprite3.destroy()
    }
    
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    info.setScore(info.score() + 1)
    sprite2.destroy()
})
scene.onHitWall(SpriteKind.Projectile, function on_hit_wall2(sprite4: Sprite, location2: tiles.Location) {
    if (tiles.tileAtLocationEquals(location2, assets.tile`
        tile3
    `)) {
        info.changeLifeBy(-1)
        sprite4.destroy()
    }
    
})
let limit = 0
let falling : Sprite = null
let s4Dir = 1
info.setLife(3)
let basket = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 1 7 1 7 1 7 1 7 1 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
basket.setPosition(80, 100)
controller.moveSprite(basket, 160, 0)
let mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . 8 8 8 8 8 8 8 1 1 1 1 1 . . . 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 1 8 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 1 1 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 1 1 1 1 1 1 1 1 1 . . 
            8 8 8 8 8 1 1 1 1 1 1 1 1 1 . . 
            8 8 8 8 8 1 1 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 1 8 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
            8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
            . 8 8 8 8 8 8 8 1 1 1 1 1 . . . 
            . . . 8 8 8 . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.snake)
mySprite4.setFlag(SpriteFlag.Ghost, true)
mySprite4.setPosition(-7, 100)
tiles.setTilemap(tilemap`
    level
`)
game.onUpdateInterval(2200, function on_update_interval() {
    
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
})
game.onUpdateInterval(2000, function on_update_interval2() {
    
    if (info.score() < 10 || randint(1, Math.min(50, info.score())) < 10) {
        falling = sprites.create(img`
                . . 2 2 2 2 . . 
                            . 2 2 2 2 2 2 . 
                            2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 
                            . 2 2 2 2 2 2 . 
                            . . 2 2 2 2 . .
            `, SpriteKind.Projectile)
    } else {
        falling = sprites.create(img`
                . . 8 8 8 8 . . 
                            . 8 8 8 8 8 8 . 
                            8 8 8 8 8 8 8 8 
                            8 8 8 8 8 8 8 8 
                            8 8 8 8 8 8 8 8 
                            8 8 8 8 8 8 8 8 
                            . 8 8 8 8 8 8 . 
                            . . 8 8 8 8 . .
            `, SpriteKind.Projectile2)
    }
    
    falling.setPosition(randint(20, 140), 20)
    limit = Math.min(10, info.score())
    falling.setVelocity(randint(-100, 100), randint(0 - limit, 5))
    falling.ay = 20
    falling.setBounceOnWall(true)
})
