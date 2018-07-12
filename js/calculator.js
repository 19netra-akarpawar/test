var x = (() => 
{
	y = (a,b) =>
	{
		return a+b;
	}
	 return y(23,54);//this will be display y

	 p = (a,b) =>
	{
		return a*b;
	}
	 return p(10,10);

	 z = (a,b) =>
	{
		return a-b;
	}
	 return z(50,5);

	 r = (a,b) =>
	{
		return a/b;
	}
	 return r(225,5);
})();
 console.log(x);
 console.log(y(20,40)); //this will be display x
 console.log(p);
 console.log(z);
 console.log(r);

