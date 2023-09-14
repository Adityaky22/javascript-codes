console.log('ram ram');
 

let rectangle = {
    length:1,
    breadth:2,

    draw: function(){
        console.log('draw');
    }

};

/*let a=10;
 
function incc(a){
    a++;
    console.log(a);
}

incc(a);
console.log(a);


//pass by ref
let a= {value:10};
function inc(a){
    a.value++;
}
inc(a);
console.log(a.value);*/

// for in loop 
for(let key in rectangle){
    console.log(key,rectangle[key]);
}

//to find if the key present or not
if('color' in rectangle){
    console.log('present');
}else{
    console.log('absent');
}