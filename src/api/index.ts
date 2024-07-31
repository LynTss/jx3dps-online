import axios from 'axios'

const dlApi = axios.create({
  baseURL: '/jx3dps/', // 设置 baseURL 为您的服务器地址
  timeout: 5000, // 设置超时时间
  headers: { 'Content-Type': 'application/json' },
})

const tlApi = axios.create({
  baseURL: 'http://121.41.84.37', // 设置 baseURL 为您的服务器地址
  timeout: 5000, // 设置超时时间
  headers: { 'Content-Type': 'application/json' },
})

const spiderApi = axios.create({
  baseURL: 'https://spider2.jx3box.com', // 设置 baseURL 为您的服务器地址
  timeout: 5000, // 设置超时时间
  headers: { 'Content-Type': 'application/json' },
})

const jx3AppApi = axios.create({
  baseURL: 'https://jx3app.proxy.locez.com:44443', // 设置 baseURL 为您的服务器地址
  timeout: 5000, // 设置超时时间
  headers: { 'Content-Type': 'application/json' },
})

const yeApi = axios.create({
  baseURL: 'https://jx3api.btcsg.top', // 设置 baseURL 为您的服务器地址
  timeout: 10000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

// 根据配装ID获取配装方案
export const getPzDataById = (params) =>
  axios.get(`/api/cms/app/pz/${params.id}`, { params: params })

// 根据附魔ID获取附魔
export const getFumoDataById = (params) => axios.get(`/enchant/primary`, { params: params })

// 根据附魔
export const getWuCaiShiDataById = (params) => axios.get(`/enchant/stone`, { params: params })

// 获取当前区服列表
export const getServerList = (params?) =>
  spiderApi.get(`/api/spider/server/server_state`, { params: params })

export const getEquipDataByUidV1 = (params?) => tlApi.post(`/j3dps/tl/getEquipByRoleId`, params)
export const getEquipDataByUidV2 = (params?) => dlApi.post(`/mine/equip/get-role-equip`, params)
export const getEquipDataByUidV3 = (params?) => jx3AppApi.post(`/mine/equip/get-role-equip`, params)

export const getUIdByName = (params?) => yeApi.post(`/role/role_detailed`, null, { params: params })
