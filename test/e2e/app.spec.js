describe("app", function() {
  var mock = require('protractor-http-mock');

  beforeEach(function(){
    mock([{
      request: {
        path: 'http://news-summary-api.herokuapp.com/guardian',
        method: 'GET'
      },


      response: {
        data: {
          response: {
            results:
            [{ webTitle: 'alex-salmond-speech-first-minister-scottish-independence-eu-currency'}]

          }
        }
        // data: {response:{results:[{webTitle:'Guardian sucks', webUrl:'http://www.guardian.com'}]}}
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
    expect(headlines.first().getText()).toEqual(headline);
  });
});
