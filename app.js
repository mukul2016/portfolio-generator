const profileDataArgs = process.argv.slice(2, process.argv.length)
// console.log(profileDataArgs)

const printProfileData = profileDataArr => {
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i])
  }
}

printProfileData(profileDataArgs)

// console.log('================')

// profileDataArr.forEach(function (profileItem) {
//   console.log(profileItem)
// })

// profileDataArr.forEach(profileItem => console.log(profileItem))
