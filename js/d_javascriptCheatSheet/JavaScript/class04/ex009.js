let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`The value have ${num.length} postions`);
console.log(`The first value of array is ${num[0]}`);

let pos = num.indexOf(4)
//console.log(`The value 8 is at ${pos} position`);
//console.log(`The value 4 is at ${pos} position`);

if(pos == -1){
    console.log(`Value not found!`);
}else{  
    console.log(`The value is at ${pos} position`); 
}

/**/ 



