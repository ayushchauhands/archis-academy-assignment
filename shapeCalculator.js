// Rectangle Functions
function calculateRectangleArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
        throw new Error('Invalid input: Length and width must be positive numbers.');
    }
    return length * width;
}

function calculateRectanglePerimeter(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
        throw new Error('Invalid input: Length and width must be positive numbers.');
    }
    return 2 * (length + width);
}

// Square Functions
function calculateSquareArea(sideLength) {
    if (typeof sideLength !== 'number' || sideLength <= 0) {
        throw new Error('Invalid input: Side length must be a positive number.');
    }
    return sideLength * sideLength;
}

function calculateSquarePerimeter(sideLength) {
    if (typeof sideLength !== 'number' || sideLength <= 0) {
        throw new Error('Invalid input: Side length must be a positive number.');
    }
    return 4 * sideLength;
}

// Circle Functions
function calculateCircleArea(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
        throw new Error('Invalid input: Radius must be a positive number.');
    }
    return Math.PI * radius * radius;
}

function calculateCircleCircumference(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
        throw new Error('Invalid input: Radius must be a positive number.');
    }
    return 2 * Math.PI * radius;
}
