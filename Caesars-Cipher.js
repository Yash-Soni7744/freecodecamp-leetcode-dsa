function rot13(str) {
  let space = []
  for (let i=0; i<str.length; i++){
    if (str[i]==" "){
      space.push(i)
    }
  }
  let newStr = str.replace(/\s/g,'')
  console.log(space)
  console.log(newStr)
    
  let up = []
    
  var charCode = 0;
  for(let i in newStr){
    
    if(newStr[i].match(/[A-Z]/g)){
      charCode = newStr[i].codePointAt(0)
      charCode += 13
        
      if(charCode > 90){
        charCode = charCode - 26
      }
      up.push(String.fromCodePoint(charCode))
      // console.log(up)
    }
    else{
      
    up.push(newStr[i])
    }
    // console.log(up)
  }
  for (let i in space){
    up.splice(space[i],0," ")
  }
  return up.join('')
      // return up.join('')
  // console.log(charCode)
  // console.log(charCode)
}


rot13("SERR PBQR PNZC!");
