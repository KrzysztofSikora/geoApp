/**
 * Created by krzysztof on 16.11.16.
 */


module.exports = function (server) {


  var app = require('../../server/server.js');

  var Content = app.models.Content;


  Content.getDataSource().connector.connect(function (err, db) {

    var collection = db.collection('Content');

    var query = {"coordinates": "2dsphere"}

    collection.createIndex(query
      , function (err, data) {
        console.log(data)
      });
  });


}
