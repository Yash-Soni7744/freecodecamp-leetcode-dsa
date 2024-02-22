/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(t.length != s.length) return false
    s=s.split("")
    t = t.split("")
    for(let i=0; i<t.length; i++){
        let a = t.slice()
        let b = a.splice(i,1)
        
        if(!s.includes(...b)){
            return false
        }
        if(s.includes(...b)){
            let index = s.indexOf(...b)
            s.splice(index,1)
        }
    }
    return true
};

