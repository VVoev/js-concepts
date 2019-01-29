console.log('da bratle');

function createCircle(radius) {
    const circle = {
        radius: radius,
        draw() {
            console.log('nqkuv krug')
        },
        giveMeYourSquare() {
            console.log(Math.sqrt(radius));
        }
    }

    return circle;
}