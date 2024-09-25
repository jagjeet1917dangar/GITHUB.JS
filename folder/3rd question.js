// 3. Write a function that takes three sides of a triangle and checks whether the triangle is equilateral, isosceles, or scalene.


// ANSWER....

let a=3;
let b=4;
let c=3;

if(a==b && b==c && c==a){
    console.log("Equilateral");
}
else if(a==b && b!=c){
    console.log("Isosceles")
}
else if(a!=b && b==c){
    console.log("Isosceles")
}
else if(c==a && c!=b){
    console.log("Isosceles")
}
else if(a!=b && b!=c && c!=a){
    console.log("Scalene")
}