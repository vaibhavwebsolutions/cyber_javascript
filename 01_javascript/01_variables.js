const accountId = 145454
let accountEmail = "vaibhavk43@gmail.com"
var accountPassowrd = "123213"
accountCity = "Nashik"

let accountState;

// accountId = 2 // not allowed

/*
    Prefer not to use var
    beacuse of issue in block and  functional scope
*/

accountEmail = "sfgfg@gmail.com"
accountPassowrd = "12545454"
accountCity = "demo"

console.log(accountId);
console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState])