class Entity {
    constructor(name){
        this.name = name;
    }
}

class Stuff extends Entity {
    constructor(name) {
        super(name);
    }
}

class Box extends Entity {
    stuff = []
    constructor(name){
        super(name);
    }

    addStuf(obj) {
        this.stuff.push(obj)
    }

    toString() {
        return `name: ${this.name}, stuff: ${JSON.stringify(this.stuff)}`
    }
}

class User extends Entity {
    constructor(name,box){
        super(name);
        this.box = box;
    }
}

let stuff1 = new Stuff('Phone');
let stuff2 = new Stuff('PC');
let stuff3 = new Stuff('TV');
let box = new Box('My device');
box.addStuf(stuff1)
box.addStuf(stuff2)
box.addStuf(stuff3)
let user = new User('Stanislav',box.toString());

console.log(user)
