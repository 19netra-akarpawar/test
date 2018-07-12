function add(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var s = parseInt(a) + parseInt(b);
    document.getElementById('s').innerHTML = 'Addition :=> ' + s;
}
function sub(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var s = parseInt(a) - parseInt(b);
    document.getElementById('s').innerHTML = 'Substraction :=> ' + s;
}
function mult(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var s = parseInt(a) * parseInt(b);
    document.getElementById('s').innerHTML = 'Multplication :=> ' + s;
}
function div(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var s = parseInt(a) / parseInt(b);
    document.getElementById('s').innerHTML = 'Division :=> ' + s;
}