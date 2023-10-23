class Animal{
    constructor (name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(`${this.name} who is of ${this.color} color is running!`)
    }
    shout(){
        console.log(this.name + " is shouting")
    }

}
class Monkey extends Animal{
    eat(fruit){
        console.log(this.name + " is eating "+ fruit)
    }
}

let dog = new Animal('Bruno','Brown')
let chimpu = new Monkey('chimpu','Orange')

dog.shout()
chimpu.run()
chimpu.eat('banana')
