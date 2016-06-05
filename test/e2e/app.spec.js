describe("app", function() {
  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body',
        method: 'GET'
      },
      response: {
        data: {headline: 'alex-salmond-speech-first-minister-scottish-independence-eu-currency'}
      }
    }]);
  });
  
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary");
  });

  it("should get a headline from the guardian", function() {
    browser.get('/');
    var headlines = $$('#headlines p');
    var headline = 'alex-salmond-speech-first-minister-scottish-independence-eu-currency';
    expect(headlines.first().getText()).toMatch(headline);
  });
});
