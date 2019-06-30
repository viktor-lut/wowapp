import {assert} from 'chai';
import axios from 'axios';

describe('API latt_long city', function() {

  it('latt_long', function() {
    const city = 'San Francisco';
    const crd = $('span.widget-pane-link');
    const output = browser.call(() => {
      return axios.get('https://www.metaweather.com/api/location/search/?query=' + city)
    });
    browser.url('https://www.google.com.ua/maps');
    $('#searchboxinput').setValue(output.data[0].latt_long);
    $('#searchbox-searchbutton').click();
    crd.waitForDisplayed(20000);
    let aria = crd.getText().split(', ')[1];
    assert.equal(aria, city);
  });
})
