function getId(url){
    let re = /([/])\d+/g;
    let matchs = re.exec(url);
    if(matchs!=null){ 
        return matchs[0].substring(1, matchs[0].length)
    }
    else{
        return null
    }

}

export function getTweet({url}){
    let id = getId(url)
    return fetch('http://localhost:3000/api/tweet/'+id)
        .then((response)=>{
            console.log        
            return response.json()
        })
        .then((json) =>{
            return json
        })

}

 