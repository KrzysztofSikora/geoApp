'use strict';

module.exports = function (Content) {


  Content.MethodFirst = function (content) {
    console.log("Method First", content);
    content = content+1;
    return content;
  };


  Content.MethodSecond = function (content) {
    console.log("Method Second", content);
    for(var i=0;i<5;i++)
      console.log(i)

  };

  Content.MethodThird = function (content) {
    console.log("Method Third", content)

  };

  function first(content) {

    return content
  }

  function second(content) {

    return content
  }

  function third(content) {

    return content
  }




  Content.search = function (filter, cb) {


    console.log(filter);


    var query;
    query = {
      where: {
        "mainContent": filter.mainContent
      }
    };






    Content.find(query).then(function (res) {
      console.log(res);

      console.log("First",first(1));
      console.log("Second",second(2));
      console.log("Third", third(3));


      Content.MethodFirst(1);
      Content.MethodSecond(2);
      Content.MethodThird(3);

      return cb(null, res);


    }).catch(function (err) {
      return cb(err, null)
    })


  };


  /**
   *
   * Search method for get by filter
   *
   */
  Content.remoteMethod("search", {
    http: {path: "/search", verb: "get"},
    accepts: [{arg: "filter", type: "object"}],
    returns: [{arg: "data", type: "any", description: "Content array by filter", root: true}],
    description: "It search content database by filter"
  });
};
