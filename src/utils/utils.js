export const jsonGet = (json, query) => {
  // TASK 1: 
  // Write a function that returns the appropriate value in a JSON object
  // matching the given string representation of the query.
  // Example:
  // const a = {
  //    user: {
  //      id: a,
  //      name: {
  //        firstName: "James",
  //        lastName: "Ibori"
  //      },
  //      location: {
  //        city: "Ikoyi",
  //        state: "Lagos",
  //        address: "One expensive house like that"
  //      }
  //    }
  // }
  // const fullName = {`${jsonGet(a, 'user.name.firstName')} ${jsonGet(a, 'user.name.lastName')}` 
  // const address = jsonGet(a, 'user.location.address')

  // ============== CODE GOES BELOW THIS LINE :) ==============

  // searchItem = query
  // await fetch(`https://rhmo-sample-api.herokuapp.com/providers?q=${searchItem}`)
  // .then((res) => res.json())

  // return json.filter(({ name })=> {
  //   return name.toLowerCase().includes(query.toLowerCase())
  // })
  const isMatch = (text) => {
    if(typeof text === 'object'){
     text = Object.values(text).join(" ")
   }
      return text.toLowerCase().includes(query.toLowerCase())
    }
 
  return json.filter(({ name, type, location }) => {
    return isMatch(name) || isMatch(type) || isMatch(location)
  })
};