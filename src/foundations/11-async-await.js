// const getImgPromise = () => new Promise((resolve) => resolve('lds.org'));
// getImgPromise().then(console.log);

// ASYNC SO THAT THE FUNCTION CAN RETURN A PROMISE
// const getImage = async() => {
//   return 'lds.org';
// };

// getImage()

// Now await needs to wait for it ot be resolved
const getImage = async () => {
  try {
    const apiKey = 'EgXDHCUuiCGtaybuXorp7wwPtDLx5Ab3';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { mp4 } = data.images.looping
    console.log(mp4)
    const link = document.createElement('a');
    const node = document.createTextNode('Click me!')
    link.appendChild(node)
    console.log(link)
    link.href = mp4
    document.body.append(link)
    
  } catch (error) {
    // error handling
    console.error(error)
    
  }

}

getImage();

// petition
//   .then( resp => resp.json() )
//   .then( ({data}) => {
//     const { mp4 } = data.images.looping;

//     const img = document.createElement('img');
//     img.src = mp4;
//     document.body.append(img);
//   })
//   .catch( console.warn )
