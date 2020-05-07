let friend = {name: 'Rodrigo',
              sex: 'M',
              weight: 85.4,
              fatten(p = 0){
                console.log('Fatten');
                this.weight += p 
              }
}

friend.fatten(20)
console.log(`${friend.name} weighs ${friend.weight}`);

