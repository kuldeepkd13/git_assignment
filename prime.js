let num=13; 
let count=0;
for(let i=1 ; i<=num ; i++)
{
if(num%i==0)
{
count++;
}
}

if(count==0)
{
console.log("is prime");
}
else 
{
console.log("is not prime");
}