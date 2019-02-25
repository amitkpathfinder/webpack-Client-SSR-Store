import HttpClient from './HttpClient';

export const FetchListings = function () {
    const url = 'http://localhost/api/product/read.php';
    return HttpClient.get(url).then(response => {
      return response.json();
    }).catch(error => {
      throw (error);
    });
  }

export const FetchCategory = function () {
    const url = 'http://localhost/api/category/read.php';
    return HttpClient.get(url).then(response => {
      return response.json();
    }).catch(error => {
      throw (error);
    });
  }
  