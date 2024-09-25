// destructuring
const players = ['James', 'Modric', 'Cristiano'];

// console.log(players[0]);
// console.log(players[1]);
// console.log(players[2]);


const  [ , , p3 ] = players
console.log( p3 )


const returnArray = ()=>{
  return ['abc', 123]
}

const [p1, p2] = returnArray( )

console.log(p1, p2)

const usestate = (value) => {
  return [value, ()=>{ console.log('Hello world!')}]
}

const arr = usestate('Falcao');
console.log(arr)

arr[1]();

// Task 
// call arr name 

const [ name, setName ,]  = arr
console.log( name )
setName();
// console.log(setName) 