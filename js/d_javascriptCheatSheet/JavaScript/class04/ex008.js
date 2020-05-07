//console.log('The console worked properly!')

//Rodrigo just press F8 to work this shit

let values = [8, 1, 7, 4, 2, 9]
values.sort()
console.log(values)

/*
for(let pos = 0; pos < values.length; pos++){
    console.log(`The position ${pos} have the value ${values[pos]}`)
}
*/

for(let pos in values){
    console.log(`The position ${pos} have the value ${values[pos]}`)
}