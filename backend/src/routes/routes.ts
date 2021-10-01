'use strict';

import { Router } from 'express';
import CountriesModel from '../model/CountriesModel';
import IndexModel from '../model/IndexModel';
import UserModel from '../model/UserModel';

const routes = Router();

routes.get('/', new IndexModel().index);

routes.get('/users/:page', new UserModel().index);

routes.get('/countries', new CountriesModel().index);

export default routes;
