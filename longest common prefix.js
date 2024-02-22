/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let string = ""
    for(let i=1; i<strs.length; i++){
        for(let j=0; j<strs[i].length; j++){
            //logic to return the longest prefix here
            if(strs[0][j] == strs[i][j]){
                string+=strs[0][j]
            }
            if(strs[0][j] != strs[i][j]){
                return ""
            }
        }
    }
    return true
};
longestCommonPrefix(["flower","flow","flight"])
