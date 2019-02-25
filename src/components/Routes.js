import HomePage from './Home/HomePage';
import SearchPage from './Search/SearchPage';
import SearchResults from './Search/SearchResults';
import ContactPage from './Contact/ContactPage';
import ListingComponent from './ListingComponent';
import Page404 from './Common/Page404';

import {FetchCategory} from './services';


const Routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  }, {
    path: '/SearchPage',
    component: SearchPage
  }, {
    path: '/SearchResults',
    component: SearchResults
  }, {
    path: '/ContactPage',
    component: ContactPage
  }, {
    path: '/ListingComponent',
    component: ListingComponent
  }, {
    component: Page404
  }
];

export default Routes;