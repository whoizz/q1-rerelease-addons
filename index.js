const app = require('express')();
const PORT = process.env.PORT || 5000;

app.get('/content.json', (req, res) => {
  res.json({
      "addons": [
        {
          "name": "Clan Arena (MOD)",
          "author": "Mungo",
          "date": "1998/3/26",
          "size": 6894148,
          "description": {
            "en": "Clan Arena 1.3 Maps\nXPTO",
          },
          "gamedir": "carena",
          "download": "carena/pak0.pak",
          "screenshots": [
              ""
          ],
          "id": "carena"
        }
      ]
    });
});
 
app.get('/carena/pak0.pak', (req, res) => {
  res.setHeader("Content-Type", 'binary/octet-stream');
  res.sendFile(__dirname + '/carena/pak0.pak');
});

app.listen(PORT);