const matcher = new Map()
matcher.set('muchacha', 'everything')
matcher.set('politica', 'k') 


function parserUrl(url){
    return ["muchacha", "politica"]
}

export function visualizar({url}){
    const keys = parserUrl({url})
    
    return(
        keys.map(key=>(
            <li key={key}>
                {matcher.get(key)}
            </li>
        ))
    )
}

export function getTweetByUrl({url}){
    console.log({url})
    return "Mi derecho termina donde empieza el derecho del que termino antes que yo. Por la voluntad que el pueblo me confiere"
}