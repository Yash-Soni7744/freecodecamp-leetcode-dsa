class Animal{
    constructor(name){
        this.name = name
    }
    fly(){
        console.log('I am flying')
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
}

let a = new Animal('Bruno')
a.fly()
console.log(a.name)
a.name = 'Jack'
console.log(a.name)

//Here keep in ming that get and set method while setting the parameter using this than an underscore(_) should be used after "this. "
