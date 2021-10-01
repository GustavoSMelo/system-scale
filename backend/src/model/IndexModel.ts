'use strict';

import { Response } from 'express';

class IndexModel {
  public index (response: Response) {
    return response.json({
      message: 'hello world'
    });
  }
}

export default IndexModel;
