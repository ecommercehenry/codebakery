function getCurrentDomain(){
    if(process.env.NODE_ENV === "production"){
        return "https://apicodebakery.herokuapp.com"
    }
    return `http://localhost:3001`
}
module.exports = {getCurrentDomain}