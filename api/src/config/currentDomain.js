function getCurrentDomainApi(){
    if(process.env.NODE_ENV === "production"){
        return "https://apicodebakery.herokuapp.com"
    }
    return `http://localhost:3001`
}
function getCurrentDomainFront(){
    if(process.env.NODE_ENV === "production"){
        return "https://apicodebakery.herokuapp.com"
    }
    return `http://localhost:3001`
}
module.exports = {getCurrentDomainApi, getCurrentDomainFront}