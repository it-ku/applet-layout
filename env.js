import { config } from './config/index'

var env = {
  dev: {
    HTTP_URL: "http://127.0.0.1:5001/api/"
  },
  pro: {
    HTTP_URL: "http://127.0.0.1:5001/api/"
  },
  pre: {
    HTTP_URL: "http://127.0.0.1:5001/api/"
  }
}[config.mode]

exports.default = env