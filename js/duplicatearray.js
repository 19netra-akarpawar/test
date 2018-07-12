x=[10,10,20,30,30,40,50]
// let y= [], z = 0;
// let t = 0;
for(i=0;i<x.length;i++)
  {
  	// z = 0;
    for(j=i+1;j<x.length;j++)
     {
       if(x[i] === x[j])
       {
       	console.log(x[i]);
         // y[t] = x[i];
         console.log(i);
         console.log(j);
         //z=1;
         break;
       }
     }
     //if(z==1){
        	//t++;
        //}
  }
 // console.log(y)