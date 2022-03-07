class Card {
    constructor(name, cost){
        this.name = name; 
        this.cost = cost; 
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        console.log(this.name + " attacked " + target.name);
        return this.power - target.res; 
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag
    }

    play(target) {
        if(target instanceof Unit) {

            console.log(this.text);
            if(this.mag >= 0) {
                if(this.stat === "res") {
                    target.res += this.mag
                }
                else {
                    target.power += this.mag; 
                }
            }
            else {
                if(this.stat === "res") {
                    target.res += this.mag
                }
                else {
                    target.power += this.mag;  
                }
            }
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }

}
                        // name, cost, power, res; 
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4); 
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4);

                            // name, cost, text, stat, magnitude; 
const effect1 = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", +3); // increase res
const effect2 = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "res", -2); // decrease res
const effect3 = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", +2);  // increase power

effect1.play(unit1); 
effect2.play(unit1); 
effect3.play(unit2); 

console.log(unit1.attack(unit2)); 