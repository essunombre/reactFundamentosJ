// section 21
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log(owners)

// const getHeroByUd = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

export const getHeroById  = (id) => {
  return heroes.find( (heroe) => heroe.id === id)
}

// console.log(getHeroById(3));

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner )

// console.log(getHeroesByOwner('DC'))

