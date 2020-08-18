const matcher = new Map()
matcher.set('muchacha', 'everything')
matcher.set('politica', 'k') 


function parserUrl(url){
    return ["muchacha", "politica"]
}

export default function visualizar({url}){
    const keys = parserUrl({url})
    
    return(
        keys.map(key=>(
            <li key={key}>
                {matcher.get(key)}
            </li>
        ))
    )
}