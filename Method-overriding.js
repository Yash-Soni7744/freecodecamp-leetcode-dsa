class Employee{
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

//Here, console.log is Employee has requested 4 leaves \n One extra is granted
//It overrides the Employee class Method of requestLeaves()

//and, super is used to use all the Employee's class information.
