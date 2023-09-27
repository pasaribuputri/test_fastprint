class ResponseAPI {
  constructor() {
    this.statusCode = 200;
    this.headers = {};
    this.body = {};
  }

  setStatus(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  setHeader(key, value) {
    this.headers[key] = value;
    return this;
  }

  setBody(body) {
    this.body = body;
    return this;
  }

  send(res) {
    res.status(this.statusCode);
    for (const key in this.headers) {
      res.setHeader(key, this.headers[key]);
    }
    res.send(this.body);
  }
}

export default ResponseAPI;
