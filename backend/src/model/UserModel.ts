'use strict';

import { Response, Request } from 'express';
import api from '../api/apiUsers';

class UserModel {
  public async index (request: Request, response: Response) {
    try {
      const responseData = await api.get(`users?page=${request.params.page}`);
      return response.json(responseData.data.data);
    } catch ($err) {
      return response.json({
        error: 'A external error happened '
      }).status(500);
    }
  }
}

export default UserModel;
