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
            "en": "PlanetQuake's Clan Arena mod v1.3 for Net Quake - Clan arena is like clanring or qwring for the most part. You join a server, ready up, and once everybody is set to a team, the match begins.",
          },
          "gamedir": "carena",
          "download": "carena/pak0.pak",
          "screenshots": [
              ""
          ],
          "id": "carena"
        },
        {
          "name": "Clan Arena (Start Script)",
          "author": "whoizz",
          "date": "2021/8/31",
          "size": 107,
          "description": {
            "en": "PlanetQuake's Clan Arena mod v1.3 for Net Quake - Utility script to initiate the match server. Create a lobby then open the console and use 'exec startServerCA.cfg'.",
          },
          "gamedir": "",
          "download": "scripts/startServerCA.cfg",
          "screenshots": [
              ""
          ],
          "id": "carena-script"
        }        
      ]
    });
});
 
app.get('/carena/pak0.pak', (req, res) => {
  res.setHeader("Content-Type", 'binary/octet-stream');
  res.sendFile(__dirname + '/carena/pak0.pak');
});

app.get('/scripts/startServerCA.cfg', (req, res) => {
  res.setHeader("Content-Type", 'binary/octet-stream');
  res.sendFile(__dirname + '/scripts/startServerCA.cfg');
});

app.listen(PORT);