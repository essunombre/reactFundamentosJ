import heroes from '../data/heroes';
import { getHeroById } from './08-import';

// const promesa = new Promise( (resolve, reject) =>{
//   setTimeout( () => {
//     console.log('2 seconds later')
//     const hero = getHeroById(2)
//     // console.log(hero)
//     // resolve(hero)
//     reject('no se pudo encontrart el Heroe')
//   }, 2000);
// } );

// // In order to have the then I need to use the resolve first in the promise
// promesa.then( (heroe) =>{
//   console.log('then de la promesa y ', heroe)
// } )
// .catch(err => console.warn( err ))

const getHeroByIdAsync = ( id ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById( id );
      if ( p1 ){
        resolve(p1);
      }
      else{
        reject('No se pudo encontrar Hero bro')
      }

    }, 2000);
  });
  // return promise
};

getHeroByIdAsync(2)
  // .then( heroe => console.log('Heroe: ', heroe) )
  .then( console.log )
  // .catch(err => console.warn( err ))
  .catch(console.warn)