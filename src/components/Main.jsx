import { useState, useEffect } from "react"
import fetchMeme from "./fetchData";
export default function Main() {
    const [meme, setMeme] = useState({
        topText: "top_level",
        bottomText: "bottom_level",
        img_src: ""
    });
    useEffect(() => {
    const fetchData = async () => {
        try {
            const url = await fetchMeme();
            setMeme(prevMeme => ({
                ...prevMeme,
                img_src: url
            }));
        } catch (error) {
            console.error("Failed to fetch meme:", error);
            alert("Failed to fetch meme. Check console for details.");
        }
    };

    fetchData();
}, []);


    function handle_text(event) {
        const input = event.currentTarget
        const [name, value] = [input.name, input.value]
        setMeme(prevMem => ({
            ...prevMem,
            [name]: value
        }
        ))
    }
    
    async function new_meme(event){
        try {
            const url = await fetchMeme();
            setMeme(prevMeme => ({
                ...prevMeme,
                img_src: url
            }));
        } catch (error) {
            console.error("Failed to fetch meme:", error);
            alert("Failed to fetch meme. Check console for details.");
        }
    }
    console.log(meme)
    return (
        <main>
            <section className="form_container">
                <form action={new_meme}>
                    <div className="inputs_container">
                        <input type="text" placeholder="this will ne in the top" name="topText" defaultValue={meme.topText} onChange={handle_text} />
                        <input type="text" placeholder="this will ne in the bottom" name="bottomText" defaultValue={meme.bottomText} onChange={handle_text} />
                    </div>
                    <button type="submit">Genertate new meme</button>
                </form>
            </section>
            <section className="meme_container">
                <div className="meme">
                    <img 
                    src={meme.img_src}
                    alt="meme image"
                    />
                    <p>{meme.topText}</p>
                    <p>{meme.bottomText}</p>
                </div>
            </section>
        </main>
    )
}