basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 0) {
        if (input.acceleration(Dimension.Y) < 0) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            basic.showArrow(ArrowNames.SouthWest)
        }
    } else {
        if (input.acceleration(Dimension.Y) < 0) {
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            basic.showArrow(ArrowNames.SouthEast)
        }
    }
})
