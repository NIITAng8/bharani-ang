/**
 * Exercise 1
 */
let message:string = "Hello World";
console.log (message);
/**
 * Exercise 2
 */
let yr:number = 2001;
if(yr%4==0)
console.log(yr + " is Leap Year"); 
else
console.log(yr + " not a Leap Year");
/**
 * Exercise 3
 */
let planetindays=new Map([["Mercury",88],["Venus",225],["Earth",365],["Mars",687],["Jupiter",4380],["Saturn",10585],["Uranus",30660],["Neptune",60225]]);
let myageindays:number=12846
let ageinyears:string;
for(let [key,value] of planetindays){

		ageinyears=Math.floor(myageindays/value)+' years '+myageindays%value+' days'
		console.log(key + ': ',ageinyears)

}
/**
 * Excercise 4
 */
let phrase:string = ' Welcome to Training Session ';
phrase = phrase.trim();
console.log(phrase.split(' ').length);
/**
 * Exercise 5
 */
let reversephrase:string="Angular Session" 
console.log(reversephrase.split("").reverse().join(""))
/**
 * Exercise 6
 */
let checkfun = (num1: number,num2:number,num3: number):void=>
{
        if((num1==num2)&&(num2==num3)&&(num1==num3))
        {
            console.log("Equilateral");
        }
        else if ((num1 != num2)&&(num2 != num3)&&(num1!=num3))
        {
            console.log("Scalene");
        }
        else 
        {
            console.log("Isosceles");
        }
    }       
    checkfun(5,10,15); 
    /**
     * Excercise 7 
     */
    let Armstrong = (num:number):boolean=> {
        let no:string;
        no = num.toString();
        no = num + "";
        let d1 = +no[2];
        let d2 = +no[1];
        let d3 = +no[0];
        let sumOfCubes = d1*d1*d1 + d2*d2*d2 + d3*d3*d3;
        return +no === sumOfCubes;
    }
    console.log(Armstrong(153)); // true