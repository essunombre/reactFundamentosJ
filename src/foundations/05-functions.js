// Functions JS
// bad way to write a function because I can create sayHi= 30
// function sayHi(name){
const sayHi = function ( name ) {
  return `Hola, ${name}`;
};

const sayHi2 = ( name ) => {
  return `Hola, ${name}`;
};

const sayHi3 = ( name ) => `Hola, ${name}`;

const sayHi4 = () => `Hola, Mundo`;

console.log(sayHi('Jose'));
console.log(sayHi2('Jose2'));
console.log(sayHi3('Jose3'));
console.log(sayHi4());

const getUser = () => {
  return{
    uid: '123ABC',
    userName: 'PapitoPro'
  }
}
const getUser2 = () => ({
    uid: '22222',
    userName: 'PapitoPro2'
  })

console.log( getUser() )
console.log( getUser2() )


// TASK:
// 1.Transform into arrow function
// 2.Retornar implicit object
// 3.Testing
console.log('TASK')

const getActiveUser= ( name ) => ({
    uid: 'JJJ999',
    userName: 'Phineas'
})

const activeUser = getActiveUser( 'Davidcito' );
console.log( activeUser );