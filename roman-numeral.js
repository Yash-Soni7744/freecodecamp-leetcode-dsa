// you have to convert any number to roman numeral. aisi taisi ho gayi meri to 1.2 hours me

let obj = {
    1:'I',
    4:'IV',
    5:'V',
    9: 'IX',
    10:'X',
    40:'XL',
    50:'L',
    90:'XC',
    100:'C',
    400:'CD',
    500:'D',
    900:'CM',
    1000:'M'
  }
  function convertToRoman(num) {
    if (num==2||num==3){
      return 'I'.repeat(num)
    }
   else if(Object.keys(obj).includes(num.toString())){
     return obj[num]
   }
    else{
        let temp = ""
        let subtract = num
      function findClosestKey(number, keysObject) {
        let smallerKey = null;
    // Step 1: Sort the keys in ascending order as numbers
        const sortedKeys = Object.keys(keysObject)
        .map(Number) // Convert keys to numbers
        .sort((a, b) => a - b); // Sort in ascending order
        console.log(sortedKeys)
  
    // Step 2: Iterate through the sorted keys in reverse order
        for (let i = sortedKeys.length - 1; i >= 0; i--) {
      // Step 3: Check if the current key is less than or equal to the given number
          if (sortedKeys[i] <= number) {
        // Step 4: Return the first key that meets the condition
            smallerKey += sortedKeys[i];
            
          // console.log(smallerKey)
            break
            
          }
        }
        temp += obj[smallerKey]
        // console.log(temp)
        
        subtract = subtract - smallerKey
  
        if(subtract == 2||subtract == 3){
          temp+='I'.repeat(subtract)
          return
        }
        else if(!Object.keys(obj).includes(subtract.toString())){
          findClosestKey(subtract,obj)
        }
        else{
          temp+=obj[subtract]
        // return temp
        }
      // console.log(subtract)
      }
      findClosestKey(num,obj)
      return temp
      
    }
  }
  
  console.log(convertToRoman(12));
  // console.log(null-6)
  
  
  
