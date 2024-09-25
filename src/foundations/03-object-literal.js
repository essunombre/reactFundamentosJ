const character = {
  name: 'Cristiano',
  lastName: 'Ronaldo',
  age: 28,
  address: {
    city: 'Bogota', 
    zip: 111156, 
    lat: 12.73214,
    lgt: 70.89211,
  }
};

// How to clone an object?

const character2 = {...character}
character2.name = 'David'
console.log( character );
console.log( character2 );

