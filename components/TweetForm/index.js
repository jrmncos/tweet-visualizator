import { useState } from "react"
import visualizar from "../../services/visualizador"


export default function TweetForm(){
    const [url, setUrl] = useState('')
    
    
    const handleChange = (event) => {
        setUrl(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(visualizar({url}))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={url} onChange={handleChange}/>
            <input type="submit"value="Visualizar"/>
        </form>
    )
}