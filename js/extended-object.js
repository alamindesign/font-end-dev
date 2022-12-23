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

class MiniDog extends miniAnimal {
    constructor(name,height,weight,barkVoliume,leashColor,speed){
        super(name,height,weight);
        this.barkVoliume = barkVoliume;
        this.leashColor = leashColor;
        this.speed = speed;
    }

    bark(){
        if(this.barkVoliume > 50){
            console.log(this.name, "barks loudly! (voliume:",this.barkVoliume, ")");
        }else{
            console.log(this.name, "burks timitly (voliume:",this.barkVoliume, ")");
        }
    }
}

class MiniFish extends miniAnimal{
    constructor(name,height,weight,swimSpeed){
        super(name,height,weight);
        this.swimSpeed = swimSpeed;
    }
    swim(dogspeed){
        if(this.swimSpeed > 50){
            console.log(this.name, "Swims very fast (speed:",this.swimSpeed,")");
        }else{
            console.log(this.name,"Swims very Slow (speed:",this.swimSpeed,")");
        }
        if(dogspeed > this.swimSpeed){
            console.log(this.name,"Got cought.");
        }else{
            console.log(this.name,"Get away.");
        }
    }
} 

let king = new MiniDog("King",45,92,70,"Golden",62);
let Goldee = new MiniFish("Goldee",10,.20,60);
king.bark()
Goldee.swim(king.speed)