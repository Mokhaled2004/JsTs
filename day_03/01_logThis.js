function logThis() {
    console.log(this);
}
logThis(); // Global Object

const obj = {
    method: logThis
};
obj.method(); // obj

// NodeJS  --> globalThis
// Browser --> Window
