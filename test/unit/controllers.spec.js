describe("NewsSummaryController", function() {
  beforeEach(module("newsSummaryApp"));

  var controller, httpBackend;
  var headlines = {response: {results: [{headline: 'alex-salmond-speech-first-minister-scottish-independence-eu-currency'}]}};

  beforeEach(inject(function($httpBackend, $controller) {
    controller = $controller("NewsSummaryController");
    httpBackend = $httpBackend;
    httpBackend.expectGET("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football?").respond(headlines);
    httpBackend.flush();
  }));

  it('fetches a headlines', function(){
    var headline1 = {headline: 'alex-salmond-speech-first-minister-scottish-independence-eu-currency'};
    controller.getAll().then(function(headlines){
      console.log(headlines)
      expect(controller.headlines).toEqual([headline1]);
    });
  });

  // it("makes exposes a greeting of 'Hello, world'", function() {
  //   expect(controller.greeting).toEqual("Hello, world");
  // });

});
