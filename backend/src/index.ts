'use strict';

import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();
const PORT = 3333;

class Backend {
  private Config () {
    app.use(cors());
    app.use(express.json());
    app.use(routes);
  }

  public StartServer () {
    this.Config();
    app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}/`));
  }
}

const server = new Backend();
server.StartServer();
