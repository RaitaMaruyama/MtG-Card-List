function callAPI() {

  const options = {
    method: "get",
  };

  cards = [];

  for (let i = 0; i < 100; i++) {
    let requestUrl = "https://api.magicthegathering.io/v1/cards?set=NEO&page=" + String(i);

    let response = UrlFetchApp.fetch(requestUrl, options);

    let responseCode = response.getResponseCode();
    let responseText = response.getContentText();
    let responseJson = JSON.parse(responseText);
    console.log("API responseCode:", responseCode);
    if (responseJson.cards.length === 0) {
      break;
    }
    cards = cards.concat(responseJson.cards);
  }

  console.log("cards", cards);

  return cards;
}