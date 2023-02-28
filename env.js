import { config } from './config/index'

var env = {
  dev: {
    HTTP_URL: "http://127.0.0.1:5001/api/"
  },
  test: {
    HTTP_URL: "http://test.xxx.com/api/"
  },
  pre: {
    HTTP_URL: "https://www.pre.xxx.com/api/"
  },
  pro: {
    HTTP_URL: "https://www.xxx.com/api/"
  },
}[config.mode]

exports.default = env