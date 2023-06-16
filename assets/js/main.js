import * as darkMode  from './components/darkMode.js';

import * as loader from './components/loader.js'

import * as navM from './components/navMenu.js'

import * as showCart from './components/showCart.js'
import products from './components/products.js';

import getProducts from './helpers/getProducts.js';

import cart from './components/cart.js'; 

import showSearcher from './components/search.js';

import showModal from './components/showModal.js';

    

const { db, printProducts} = products(await getProducts());
cart(db, printProducts);
showSearcher(db);
showModal(await getProducts());



