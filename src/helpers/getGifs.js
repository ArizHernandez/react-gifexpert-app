export const getGifs = async( category ) => {

  const api_key = 'GBrOAATEhVzVZL5B2pPFTEI1z6hrcoQx';

  const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${api_key}`);
  const { data } = await resp.json();

  const gifs = data.map( img => {

    return {
      id: img.id,
      title: img.title,
      url: img.images?.original.url
    }

  });

  return gifs;

};