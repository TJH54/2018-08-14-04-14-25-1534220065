module.exports = function main(a) {
    let arr = [ ["._.","|.|", "|_|" ], ["...","..|", "..|"] ,["._.","._|","|_."],
        ["._.","._|","._|"],["...","|_|","..|"],["._.","|_.","._|"],
        ["._.","|_.","|_|"],["._.","..|","..|"],["._.","|_|","|_|"],["._.","|_|","..|"]];
    let len = a.length;
    let str="";
    for(let i=0;i<len;i++){
        if(i==len-1){
            str += arr[a[i]][0]+"\n";
        }else{
            str += arr[a[i]][0]+" ";
        }
    }
    for(let i=0;i<len;i++){
        if(i==len-1){
            str += arr[a[i]][1]+"\n";
        }else{
            str += arr[a[i]][1]+" ";
        }
    }
    for(let i=0;i<len;i++){
        if(i==len-1){
            str += arr[a[i]][2]+"\n";
        }else{
            str += arr[a[i]][2]+" ";
        }
    }
    console.log(str);
    return str;
};