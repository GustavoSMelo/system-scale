'use strict';

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://amock.io/api/fcmaia'
});

export default api;
