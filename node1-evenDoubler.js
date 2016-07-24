function evenDoubler(v,callback){
    var random = parseInt(Math.random() * (1000 - 1) + 1);
    if(v%2 === 0){
        setTimeout(function(){
            callback(undefined, v*2, arguments[0]);
        },random,random)
    }else{
        setTimeout(function(){
            callback("Not Even", undefined, arguments[0]);
        },random,random)
    }
}
var count = 0;
function callFunc(err,number,sec){
    if(err){
        console.error("Error: "+err);
    }else{
        console.log("Number: "+number+". "+sec+" ms.");
    }
    if(++count === 10){
        console.log("Done");
    }
}

for(var i=1;i<11;i++){
    evenDoubler(i,callFunc);
}
