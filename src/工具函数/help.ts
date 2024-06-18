/**
 * @name 基础算法函数工具
 * @description 基础JS相关算法，无业务属性
 */
export const 按数字生成数组 = (number) => {
  return Array.from({ length: number - 1 + 1 }, (_, index) => index + 1)
}

export const hexToRgba = (hex, alpha) => {
  // 将16进制颜色代码转换为RGB
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  // 返回RGBA字符串
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const hexToRgbaToDark = (hex, alpha, num = 10) => {
  // 将16进制颜色代码转换为RGB
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  const dark_r = Math.max(r - num, 0)
  const dark_g = Math.max(g - num, 0)
  const dark_b = Math.max(b - num, 0)

  // 返回RGBA字符串
  return `rgba(${dark_r}, ${dark_g}, ${dark_b}, ${alpha})`
}

export const 获取页面参数 = (param) => {
  if (global?.心法 && param === '心法') {
    return global?.心法
  } else if (global?.xf && param === 'xf') {
    return global?.xf
  } else if (window) {
    if (window?.location?.search) {
      const urlParams = new URLSearchParams(window?.location?.search)
      return urlParams.get(param)
    }
  }
  return ''
}

export const 修改页面Logo = (src) => {
  let link: any = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.getElementsByTagName('head')[0].appendChild(link)
  }
  link.href = src
}

export const INT = (val) => Math.floor(val)

export const 去除对象中的无效值 = (obj) => {
  const newObj: any = {}
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== null && obj[prop] !== undefined) {
      newObj[prop] = obj[prop]
    }
  })
  return newObj
}
