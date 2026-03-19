let arrayDemo = [1, 2, 3, 4, 5]
let arrayDemo1 = ["I am new to JS", "I am learning JAVA", "I am new to playwright"];
let arrayDemo2 = [1, "I am new to JS", true, 3.14]
let browserlist =["chrome", "firefox", "edge", "safari"]
let oslist = ["windows", "mac", "linux", "android", "ios"]
let envlist = new Array("Staging", "QA", "Developer")



envlist.push("Production") // Add "prod" to the end of the envlist array
console.log(envlist)
envlist.pop() // Removes the last element  from the envlist array
console.log (envlist)
envlist.shift() // Remove the first element from the envlist and asss "UAT" at the belonging
console.log("Unshiftlist") // Adds "Unshiftlist" for the begining of the envlist array
console.log(envlist)
envlist.unshift()
console.log (envlist)
console.log(envlist.length)
if(envlist.includes("Dev"))
{
    console.log("Environment is present")
}
else
{
    console.log ("Environment is not present")

}
browserlist.forEach(function(browser){
    console.log(browser)
})

browserlist.forEach(function(bro){
    console.log(bro)
})

browserlist.forEach((browser) => {
    console.log(browser)
})
for (let bro of browserlist) {
    console.log (bro)
}
for (let number in arrayDemo){
    console.log(number) // output will be index of the arraydemo
    
}
