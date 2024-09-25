// destructuring

const player = {
  name: 'James',
  lastName: 'Rodriguez',
  age: 33,
  password: 'Colombia10',
};

// Extract what I put isnide from person
// const { name, age, password, lastName } = player

// // console.log(player.name);
// console.log( name );
// console.log( age );
// console.log( password );
// console.log( lastName );

// console.log(player.lastName);
// console.log(player.age);
// console.log(player.password);

const usecontext = ({password, name, age, city = 'Medellin'}) => {
  //  console.log( user );
  // const { name, age, password, lastName } = user;

  // console.log(name, age, password, lastName, city )
  return{
    passwordName: password, 
    edad: age,
    latlng:{
      lat:14.35456,
      lgt:-30.5562
    }
  }
};

// returnPlayer(player);

// const {passwordName, edad, latlng:{lat, lgt}} = usecontext(player)
const {passwordName, edad, latlng} = usecontext(player)
const { lat, lgt } = latlng


console.log( passwordName, edad )
console.log( lat, lgt )