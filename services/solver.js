class Grafo{
    constructor(){
        this.adjList = new Map()
    }

    agregarVertice(vertice){
        if(!this.adjList.has(vertice)){
            this.adjList.set(vertice, new Set())
        }
        else{
            throw "El vertice ya existe"
        }
    }

    agregarArista(u, v){
        if(this.adjList.has(u)){
            if(this.adjList.has(v)){
                let vecinos = this.adjList.get(u)
                if(!vecinos.has(v)){
                    vecinos.add(v)
                }
            }
            else{
                `No existe el vertice ${v}`
            }
        }
        else{
            throw `No existe el vertice ${u}`
        }
    }
}

const grafo = new Grafo()
grafo.agregarVertice("Cristina")
grafo.agregarVertice("Alberto")
grafo.agregarVertice("Mundial")
grafo.agregarArista("Cristina", "Alberto")
grafo.agregarArista("Cristina", "Mundial")
grafo.agregarArista("Alberto", "Cristina")



console.log(grafo.adjList)