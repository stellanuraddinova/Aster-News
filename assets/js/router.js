class Router {
    constructor(){
        this.routes = {};
        this.rootElement = document.querySelector('#root')
        window.addEventListener('hashchange', this.hasChange.bind(this));
        window.addEventListener('load', this.hasChange.bind(this));
    }

    hasChange(){
        const hash = window.location.hash.slice(1);
        const url = this.routes[hash];
        
        this.loadPage(url);
    }

    async loadPage(url){
        const res = await fetch(`/pages/${url}`)
        const html = await res.text(); 
        console.log(html);
        this.rootElement.innerHTML = html;
    }
    addRoute(name, callback){
        this.routes[name] = callback;
    }
}
export default Router;