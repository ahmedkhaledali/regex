function verif(x){
    
  let y=/\s/
  let res=y.test(x)
 return res
  }
  console.log(verif(" "))

  //////////////////////////

  function gg(x){
   var y=  /[aeiouy]/ig
   var res= x.match(y);
   var res1=res.length;
   return res1
}
console.log(gg("ali"))

//////////////////////////


function repl(x){
    var y=  /[aeiuoy]/ig
    var res= x.replace(y,"#")
 return res
}
console.log(repl("ali"))

/////////////////////////////

function algeb(x){
   var y = /([-+/*]\d+(.\d+)?)/
   var res= y.test(x);
   return res
}
console.log(algeb("5+z"))


///////////////////////////////

function alpha(x){
   var y = /[a-z]{0,}[a][a-z]{0,}[c]{0,}[a-z]{0,}/i;
   var res= y.test(x);
   return res
}
console.log(alpha("abbbccount"))

//////////////////////////////
function test5(x){
    var y = /^\d{5}$/ ;
    var res= y.test(x);
    return res
 }
 console.log(test5("20438"))


