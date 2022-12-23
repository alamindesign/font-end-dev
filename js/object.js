class zooAnimal {
    constructor(name, height, weight){
        console.log("Created animal", name);
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    nameLength(){
        return this.name.length;
    }
}

zooAnimal.planet = "Earth";

let cat = new zooAnimal("Fido", 25, 90);
let redFish = new zooAnimal("Goldie", 2, .02);

console.log(redFish.nameLength());
console.log(dog.constructor.planet);