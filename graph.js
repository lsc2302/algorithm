function Graph(v){
    this.vertices=v;
    this.edges = 0;
    this.adj=[];
    this.marked = [];
    this.edgeTo=[];
    for(let i=0;i<this.vertices;i++){
        this.adj[i]=[]
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    //dfs
    this.dfs = dfs;
    //bfs
    this.bfs = bfs;
    //pathTo
    this.pathTo = pathTo;
    //topsort
    this.topSort = topSort;
    this.topSortHelper = topSortHelper;
}

function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph(){
    for(let i=0;i<this.vertices;i++){
        let str = i+'->';
        for(let j=0;j<this.vertices;j++){
            if(this.adj[i][j]!==undefined){
                str+= this.adj[i][j]+' ';
            }
        }
        console.log(str);
    }
}

function dfs(v){
    this.marked[v]=true;
    if(this.adj[v] !== undefined){
        console.log("dfs visited: "+v);
    }
    this.adj[v].forEach((w)=>{
        if(!this.marked[w]){
            this.dfs(w);
        }
    })

}

function bfs(s){
    this.marked[s]=true;
    let queue=[];
    queue.push(s);
    while(queue.length>0){
        let v = queue.shift();
        if(v !== undefined){
            console.log("bfs Visited: "+v);
        }
        this.adj[v].forEach((w)=>{
            if(!this.marked[w]){
                this.edgeTo[w] = v;
                this.marked[w]=true;
                queue.push(w);
            }
        })
    }
}

function pathTo(from,to){
    for(let i=0;i<this.vertices;i++){
        this.marked[i]=false;
    }
    this.bfs(from);
    let source = from;
    if(! this.marked[from]){
        return undefined;
    }
    let path=[];
    for(let i=to;i!==source;i=this.edgeTo[i]){
        path.unshift(i);
    }
    path.unshift(source);
    let str = ''
    for(let i in path){
        if(i<path.length-1){
            str += path[i]+'->'
        }else{
            str += path[i];
        }

    }
    console.log(str);
    return path;
}

function topSort(){
    let stack = [];
    let visited = [];
    for(let i=0;i<this.vertices;i++){
        visited[i] = false;
    }
    for(let i=0;i<this.vertices;i++){
        if(visited[i] === false){
            this.topSortHelper(i,visited,stack);
        }
    }
    for(let i=stack.length-1;i>=0;i--){
        console.log(this.vertexList[stack[i]]);
    }
}

function topSortHelper(v,visited,stack){
    visited[v]=true;
    this.adj[v].forEach((w)=>{
        if(!visited[w]){
            this.topSortHelper(w,visited,stack);
        }
    })
    stack.push(v);
    console.log(v);
}


//dfs
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);

//bfs
g.marked = []
g.bfs(0)

//pathTo
g.marked = []
g.pathTo(1,4);

//top sort
g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0, 1);
     
g.vertexList = ["CS1", "CS2", "Data Structures",
                     "Assembly Language", "Operating Systems",
                     "Algorithms"];
g.topSort();


