const firstName = 'Jose';
const lastName = 'Robles';

// const fullName = firstName + ' ' + lastName;
// AS template String
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

function getHi(nombre) {
  return 'Hello world and ' + nombre;
}

console.log(`This is a text: ${ getHi(fullName)}`)