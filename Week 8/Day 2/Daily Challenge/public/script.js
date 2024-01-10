let randomEmoji = {};

const getEmojisApi = async () => {
  let fetching = await fetch("http://localhost:3001/emojis");
  let emojisApi = await fetching.json();
  console.log(emojisApi);
  randomEmoji = emojisApi.randomEmoji;
  displayEmojis(emojisApi.shuffledEmoji, emojisApi.randomEmoji);
};

const displayEmojis = (options, emoji) => {
  const root = document.getElementById("root");
  const html = options.map((item) => {
    return item.name + " ";
  });
  root.innerHTML = `Options : ${html.join("? or ")} Hint: ${emoji.emoji}`;
};

getEmojisApi();

const guessTheEmoji = () => {
  const guess = document.getElementById("guess").value;
  fetch("http://localhost:3001/emojis", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ guess, name: randomEmoji.name }),
  })
    .then((res) => res.json())
    .then((msg) => {
      console.log(msg);
      document.getElementById('message').innerHTML = `<h1>${msg.message}</h1>`
    });
};
