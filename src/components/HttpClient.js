// import 'whatwg-fetch';
import fetch from 'isomorphic-fetch';
// require('es6-promise').polyfill();

export default class HttpClient {
  static get(url, params) {
    return fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
    });
  }

  static post(url, postBody) {
    return fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      body: postBody,
    });
  }

  static postWithHeader(url, postBody) {
   return fetch(url, {
     method: 'POST',
     credentials: 'same-origin',
     body: postBody,
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
     },
   });
 }

}