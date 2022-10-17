from pickle import FALSE


@namespace
class SpriteKind:
    Projectile2 = SpriteKind.create()
    snake = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global falling
    falling = sprites.create(img("""
            . . 2 2 2 2 . . 
                    . 2 2 2 2 2 2 . 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 
                    . 2 2 2 2 2 2 . 
                    . . 2 2 2 2 . .
        """),
        SpriteKind.projectile)
    falling.set_bounce_on_wall(False)
    falling.set_position(sprite.x, sprite.y - 5)
    falling.set_velocity(sprite.vx, 0 - sprite.vy)
    falling.ay = sprite.ay
    sprite.destroy()
sprites.on_overlap(SpriteKind.Projectile2, SpriteKind.player, on_on_overlap)

def on_hit_wall(sprite3, location):
    if tiles.tile_at_location_equals(location, assets.tile("""
        tile3
    """)):
        info.change_life_by(-1)
        sprite3.destroy()
scene.on_hit_wall(SpriteKind.Projectile2, on_hit_wall)

def on_on_overlap2(sprite2, otherSprite2):
    info.set_score(info.score() + 1)
    sprite2.destroy()
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap2)

def on_hit_wall2(sprite4, location2):
    if tiles.tile_at_location_equals(location2, assets.tile("""
        tile3
    """)):
        info.change_life_by(-1)
        sprite4.destroy()
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall2)

limit = 0
falling: Sprite = None
s4Dir = 1
info.set_life(3)
basket = sprites.create(img("""
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
    """),
    SpriteKind.player)
basket.set_position(80, 100)
controller.move_sprite(basket, 160, 0)
mySprite4 = sprites.create(img("""
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
    """),
    SpriteKind.snake)
mySprite4.set_flag(SpriteFlag.GHOST, True)
mySprite4.set_position(-7, 100)
tiles.set_tilemap(tilemap("""
    level
"""))

def on_update_interval():
    global s4Dir
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
game.on_update_interval(2200, on_update_interval)

def on_update_interval2():
    global falling, limit
    if info.score() < 10 or randint(1, min(50, info.score())) < 10:
        falling = sprites.create(img("""
                . . 2 2 2 2 . . 
                            . 2 2 2 2 2 2 . 
                            2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 
                            2 2 2 2 2 2 2 2 
                            . 2 2 2 2 2 2 . 
                            . . 2 2 2 2 . .
            """),
            SpriteKind.projectile)
    else:
        falling = sprites.create(img("""
                . . 8 8 8 8 . . 
                            . 8 8 8 8 8 8 . 
                            8 8 8 8 8 8 8 8 
                            8 8 8 8 8 8 8 8 
                            8 8 8 8 8 8 8 8 
                            8 8 8 8 8 8 8 8 
                            . 8 8 8 8 8 8 . 
                            . . 8 8 8 8 . .
            """),
            SpriteKind.Projectile2)
    falling.set_position(randint(20, 140), 20)
    limit = min(10, info.score())
    falling.set_velocity(randint(-100, 100), randint(0 - limit, 5))
    falling.ay = 20
    falling.set_bounce_on_wall(True)
game.on_update_interval(2000, on_update_interval2)
