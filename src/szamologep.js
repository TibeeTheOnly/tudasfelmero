function osszead(a, b) {
    return a + b;
}

function kivon(a, b) {
    return a - b;
}

function szoroz(a, b) {
    return a * b;
}

function eloszt(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export { osszead, kivon, szoroz, eloszt };