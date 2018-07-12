var x=[10,20,30,50,40]


for (i=0; i<x.length; i++) 
        {
		 for (j=0;j<x.length;j++)
		 {
			 if(x[i]>x[j])
			 {
			 	var z=x[i];
			 	x[i]=x[j];
			 	x[j] = z;
			 }
		 }
	    }
 console.log(x);
 console.log(x[1]);