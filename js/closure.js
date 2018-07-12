function add(){
	 var n1 ='HTML';//name is local var
	 function displayName()//inner function
	 {
	   var n2="css";//use variable declared in the parent function
	   console.log(n1+n2);
	 }
	 

	 displayName();
}
add();