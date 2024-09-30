const apiKey = 'EgXDHCUuiCGtaybuXorp7wwPtDLx5Ab3';

const petition = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

// FEO
// petition.then((resp) => {
//   resp.json().then( data => {
//     console.log(data)
//   } )
// })
// .catch( console.warn )

petition
  .then( resp => resp.json() )
  .then( ({data}) => {
    const { mp4 } = data.images.looping;

    const img = document.createElement('img');
    img.src = mp4;
    document.body.append(img);
  })
  .catch( console.warn )