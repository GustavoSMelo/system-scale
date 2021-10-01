'use strict';

import { Request, Response } from 'express';
import api from '../api/apiContries';

class CountriesModel {
  public async index (_: Request, response: Response) {
    try {
      const responseData = await api.get('/countries');
      const datas = [];

      let counterIndex = -1;
      let lengthArray = 0;

      while (responseData.data.length > 0) {
        // eslint-disable-next-line array-callback-return
        responseData.data.map((item: any, index: number) => {
          if (counterIndex === -1) {
            counterIndex = index;
            lengthArray = item.fronteiras.length;
          } else {
            if (item.fronteiras.length > lengthArray) {
              counterIndex = index;
              lengthArray = item.fronteiras.length;
            }
          }
        });

        datas.push(responseData.data[counterIndex]);
        responseData.data.splice(counterIndex, 1);
        lengthArray = 0;
        counterIndex = -1;
      }

      return response.json(datas);
    } catch ($err) {
      return response.json({
        error: 'A external error happened '
      }).status(500);
    }
  }
}

export default CountriesModel;
