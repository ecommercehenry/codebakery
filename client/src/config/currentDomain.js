export function getCurrentDomainApi(){
    if(process.env.NODE_ENV === "production"){
        return "https://apicodebakery.herokuapp.com"
    }
    return `http://localhost:3001`
}
export function getCurrentDomainFront(){
    const domain = window.location.protocol + "//" + window.location.host
    return domain
}