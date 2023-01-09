import { request } from "../../utils/request";
import { config } from "./../../config/index"

function mockFetchPerson() {
  const { delay} = require('../_utils/delay');
  const { genSimpleUserInfo } = require('../../model/usercenter')
  return delay().then(()=>({
    ...genSimpleUserInfo(),
  }));
}

export async function fetchPerson(data) {
  if (config.useMock) {
    return mockFetchPerson();
  }

  return request('/v1/account/login', data, {method:'POST'})
}