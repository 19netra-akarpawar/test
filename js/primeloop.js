x=73;
var t=0;

//x=25; 3 times primenumber display 1 not prime number

for(i=2;i<=72;i++)
  {

     if(x%i==0)
     {
        console.log("not prime");
         t=1;
        break;
     }
     
  }
      if(t==0)
     {
       console.log("prime number");
     }