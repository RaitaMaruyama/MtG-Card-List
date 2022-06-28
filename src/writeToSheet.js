function writeToSheet(cards) {
  const defaultRow = [
    "カードID",
    "カード名",
    "レアリティ",
    "色",
    "マナコスト",
    "マナ総量",
    "カードタイプ",
    "サブタイプ",
    "パワー",
    "タフネス",
    "画像URL",
    "テキスト"
  ];
  const array = [];
  array.push(defaultRow);
  cards.forEach(function (card) {
    console.log("card", card);

    var row = [];

    let japaneseCardInfo = null;

    if (card.foreignNames) {
      japaneseCardInfo = card.foreignNames.find(
        (foreignCard) => foreignCard.language === "Japanese");
    }

    let colors = "colorless";
    if (card.colors) {
      colors = card.colors.join();
    }
    const types = card.types.join();
    const subtypes = card.types.join();

    row[0] = card.multiverseid;
    row[1] = japaneseCardInfo ? japaneseCardInfo.name : card.name;
    row[2] = card.rarity;
    row[3] = colors;
    row[4] = card.manaCost;
    row[5] = card.cmc;
    row[6] = types;
    row[7] = subtypes;
    row[8] = card.power;
    row[9] = card.toughness;
    row[10] = japaneseCardInfo ? japaneseCardInfo.imageUrl : card.imageUrl;
    row[11] = japaneseCardInfo ? japaneseCardInfo.text : card.text;
    array.push(row);
  });

  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName("一覧");

  sheet.getRange("A1:Z1000").clearContent();
  sheet.getRange(1, 1, array.length, array[0].length).setValues(array);
  sheet.getRange(1, 1, 1, defaultRow.length).setBackground("#ccf2ff");
}