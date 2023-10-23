class RailwayForm{
  constructor (name,train,address){
    console.log("Constructor Called... "+name+" "+train)
    this.name = name
    this.train = train
    this.address = address
  }
  submit(){
    alert("this.name "+": Your form is submitted for train no. "+this.train)
  }
  cancel(){
    alert(this.name+" : This form is cancelled for train no. "+this.train)
    this.train = 0
  }
}

let harryForm = new RailwayForm('Harry',12134,'paschim vihar enclave - 134')
let rohanForm = new RailwayForm("Rohan", 89475, "New Delhi - 121008")

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()
