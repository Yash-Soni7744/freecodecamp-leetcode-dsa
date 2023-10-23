class Employee{
    constructor(user){
        console.log(`Hey! ${user} - Employee's constructor is here.`)
        this.user = user
    }
    login(name){
        console.log(name+' has logged in')
    }
    logout(name){
        console.log(name+' has logged out')
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log('One extra is granted')
    }
}

let e = new Programmer()
e.login('rohan')
e.logout('rohan')
e.requestLeaves(3)

//Note:- if the derived class i.e. Programmer (here) doesn't have any constructor JS engine creates automatically.
//but, for some reason if you want to create another constructor for derived class, you can't do until you can't use the super() in it.

//an example is shown above in Programmer2 class downward

class Programmer2 extends Employee{
    constructor(name){
        super.(name)
        console.log('This is another constructor')
    }
}

//this will print main constructor also and this line also
//super is always used at first 

let A = new Programmer2('sushant')
let B = new Employee('Arnav')

B.login()
A.login()
