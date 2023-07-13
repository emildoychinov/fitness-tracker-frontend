export async function postToRoute(route : string, params : any){
    return await fetch(route, {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('API_KEY')
        },
        mode: "cors",
        body: JSON.stringify(params)
    });
}

export async function getFromRoute(route : string){
    return await fetch(route, {
        method: "GET",
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('API_KEY')
        },
        mode: "cors"
    });
}