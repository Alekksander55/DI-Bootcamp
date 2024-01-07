// --------------------------------------------------------
// Exercise 1 : HTML Form
// --------------------------------------------------------

// 3. The data will appear in the Network Payload as a query

// --------------------------------------------------------
// Exercise 2 : HTML Form
// --------------------------------------------------------

// 3 . The data will appear in the new index.html files with a red cross in the payload

// --------------------------------------------------------
// Exercise 3 : JSON Mario
// --------------------------------------------------------

const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  let marioGameJson = JSON.stringify(marioGame)
  console.log(marioGameJson)

  // Now we have an ugly JSON object

  let marioGameJsonPretty = JSON.stringify(marioGame, null, 3)
  console.log(marioGameJsonPretty)

  // Now we have a pretty JSON object
