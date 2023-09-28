function rot13(str) {
    
    let space = []
    for (let i=0; i<str.length; i++){
        if (str[i]==" "){
            space.push(i)
        }
    }
    let newStr = str.replace(/\W/g,'')
    console.log(space)
    
    let up = []
    for(let i in newStr){
        
        var charCode = newStr[i].codePointAt(0)
        charCode += 13
        // console.log(charCode)
        if(charCode > 90){
            charCode = charCode - 26
        }
        // console.log(charCode)
    up.push(String.fromCodePoint(charCode))
    
    }

    console.log(up)
    for (let i in space){
      up.splice(space[i],0," ")
    }
      return up.join('')
}

rot13("SERR PBQR PNZC");
