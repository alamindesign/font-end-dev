class miniAnimal {
    constructor(name,height,weight){
        console.log("Created Animan",name)
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    nameLen(){
       return this.name.length;
    }
}

miniAnimal.planet = "Moon";

let miniDog = new miniAnimal("Tommy");
let miniFish = new miniAnimal("Fishhy");

console.log(miniDog.name, miniDog.nameLen());
console.log(miniDog.constructor.planet);
