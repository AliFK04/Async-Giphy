require('dotenv').config();

// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KY}&q=dog&limit=25&offset=0&rating=g&lang=en`
async function getImage(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    const {data} = await response.json();
    // console.log(data[0]);
    const imageUrl = data[0].url;
    console.log(imageUrl); // for testing purposes only
    return imageUrl;
}
async function main(){
  getImage('dogs')
}

main()
// Print out value of API key stored in .env file
console.log(process.env.API_KY)