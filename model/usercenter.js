const userInfo = {
  nickName: '浪里白条',
  avatar: '',
  phoneNumber: '13888888888',
  gender: 2,
}

const countsData = [
  {
    num: 2,
    name: '积分',
    type: 'point',
  },
  {
    num: 10,
    name: '优惠券',
    type: 'coupon',
  },
];

const customerServiceInfo = {
  servicePhone: '4006336868',
  serviceTimeDuration: '每周三至周五 9:00-12:00  13:00-15:00',
};

export const genSimpleUserInfo = () =>({ ...userInfo })

export const genUsercenter = () =>({
  userInfo,
  countsData,
  customerServiceInfo
})