function main() {
  const cards = callAPI();
  writeToSheet(cards);

  console.log("実行は正常に終了しました。");
}