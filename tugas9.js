function cycle(){
    var motor ={
        name:"ducati",
        color : "red"
    }
    for(var x in motor){
        console.log(motor[x]);
    }
}
cycle();