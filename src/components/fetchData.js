export default async function fetchMeme() {
    try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        
        if (!response.ok) {
            throw new Error("Response not ok - network problem");
        }
        
        const { data } = await response.json();
        
        if (!data?.memes?.length) {
            throw new Error("No memes data available");
        }
        
        const randomIndex = Math.floor(Math.random() * data.memes.length);
        return data.memes[randomIndex].url;
    }
    catch(error) {
        console.error("Error in fetching meme data: ", error);
        throw error;
    }
}