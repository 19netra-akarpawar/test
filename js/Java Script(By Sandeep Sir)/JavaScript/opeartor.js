function equals(){
    var a = 10;
    var b = "10";
    
    // ==   only data
    // ===  data as well as datatype
    // !=   not equal
    // !==  not equal value or not equal type
    if(a === b){
        document.getElementById('s').innerHTML = 'Both numbers are equal';
    }
    else{
        document.getElementById('s').innerHTML = 'Both numbers are not equal';
    }
}