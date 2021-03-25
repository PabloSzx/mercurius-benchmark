module.exports = function (client) {
  if (Math.random() < 0.5) {
    client.setBody(
      JSON.stringify({
        query: "{hello1}",
      })
    );
  } else {
    client.setBody(
      JSON.stringify({
        query: "{hello2}",
      })
    );
  }
};
