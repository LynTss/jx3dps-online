// 根据账号角色导入
// import { getEquipDataByName } from '@/api'
import { Alert, Button, Image, Input, Modal, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { getEquipData } from './util'
import ServerCascader from '@/组件/ServerCascader'
import { getUIdByName, getEquipDataByUidV3, getEquipDataByUidV1 } from '@/api'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'
import { GLOBAL_CDN_PREFIX } from '@/工具函数/const'
import { 获取页面参数 } from '@/工具函数/help'
import './index.css'

const 教程_1 = `${GLOBAL_CDN_PREFIX}/account_tip_1.png`
const 教程_2 = `${GLOBAL_CDN_PREFIX}/account_tip_2.png`

function AccountImport({ onOk }) {
  const [loading, setLoading] = useState(false)
  const [helpVisible, setHelpVisible] = useState(false)
  const [name, changeName] = useState<string>()
  const [server, changeServer] = useState<string>()
  const [data, setData] = useState<any>(undefined)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const urlName = 获取页面参数('name')

  useEffect(() => {
    if (urlName) {
      changeName(urlName)
    }
  }, [urlName])

  const handleGetPzData = async (propsName?, propsServer?) => {
    const apiName = propsName || name
    const apiServer = propsServer || server

    if (!apiName || !apiServer?.length) {
      return
    }
    setLoading(true)
    setData(undefined)
    setErrorMsg('')
    let res: any
    let userInfo: any = {}
    let errorMessage = ''
    try {
      // 判断是直接输入的UID查询
      const isUidSearch = !isNaN(apiName)
      console.log('isUidSearch', isUidSearch)
      if (isUidSearch) {
        userInfo.roleId = apiName
        userInfo.isUidSearch = true
      } else {
        userInfo = await getUIdByName({
          server: apiServer?.[1],
          name: apiName,
        })?.then((res) => res?.data)
        const 校验 = 校验门派(userInfo?.forceName)
        if (!校验) {
          message.warning(`当前心法由于查不到心法名称可能不匹配，导入时请注意`)
        }
      }
      console.log('userInfo?.roleId', userInfo?.roleId)
      if (userInfo?.roleId) {
        console.log('开始查询', userInfo?.roleId)
        const request = window?.location?.href?.includes('localhost')
          ? getEquipDataByUidV1
          : getEquipDataByUidV3

        const requestRes: any = await request({
          zone: apiServer?.[0],
          server: apiServer?.[1],
          game_role_id: userInfo?.roleId,
        })

        if (
          requestRes?.data &&
          requestRes?.status === 200 &&
          requestRes?.data?.data?.Equips?.length
        ) {
          res = requestRes?.data
        } else {
          errorMessage = '没有查询到角色信息，清稍后再试'
        }
      } else {
        if (isUidSearch) {
          errorMessage = '根据ID没有查询到角色信息，清检查ID或稍后再试'
        } else {
          errorMessage = '没有查询到角色信息，清稍后再试或用ID查询'
        }
      }
    } catch (e) {
      errorMessage = '没有查询到角色信息，清稍后再试或用ID查询'
    }
    setLoading(false)
    if (!errorMessage) {
      const equipData = getPzData(res?.data)
      if (equipData) {
        setData({
          userInfo,
          equipData,
        })
      } else {
        setErrorMsg('没有查询到角色信息，清稍后再试')
      }
    } else {
      setErrorMsg(errorMessage)
    }
    return
  }

  const handleClickImport = () => {
    if (data?.equipData?.equip) {
      onOk(data?.equipData?.equip)
    }
  }

  return (
    <div>
      <Alert
        type='warning'
        style={{ marginBottom: 16 }}
        message={
          <div>
            <p>本功能仅作为查询使用者自身账号属性，用作辅助选择配装。</p>
            <p>严禁使用本功能对他人进行出警、拉踩、诋毁等恶意行为。</p>
            <p>若使用本功能出现纠纷，本人概不负责。</p>
            <p>
              <a onClick={() => setHelpVisible(true)}>如何获取角色UID</a>
            </p>
          </div>
        }
      />
      <div className='account-daoru-input-wrap no-padding'>
        <ServerCascader
          className={'account-daoru-form-content'}
          value={server}
          onChange={(e) => changeServer(e)}
          callback={handleGetPzData}
        />
        <Input.Search
          className='account-daoru-form-content'
          value={name}
          loading={loading}
          onChange={(e) => changeName(e.target.value.trim())}
          placeholder='请输入角色名称或UID'
          onPressEnter={(e: any) => {
            if (server?.length) {
              handleGetPzData(e.target.value.trim())
            }
          }}
        />
        {/* <Input
          className='account-daoru-input-wrap-input'
          value={server}
          onChange={(e) => changeServer(e.target.value.trim())}
          placeholder='请输入区服名称'
        /> */}
        <Button
          type='primary'
          disabled={loading || !name || !server?.length}
          onClick={() => handleGetPzData()}
        >
          查询角色
        </Button>
      </div>
      {loading ? (
        <div className='account-daoru-text-wrap'>
          正在获取配装方案
          <Spin style={{ marginLeft: 12 }} spinning={true} />
        </div>
      ) : (
        <>
          {data ? (
            <div className={'account-daoru-success'}>
              <p className='account-daoru-success-tip'>成功获取配装方案</p>
              <div className='account-daoru-success-content'>
                <div className='account-daoru-success-info'>
                  {!data?.userInfo?.isUidSearch ? (
                    <img
                      className='account-daoru-success-avatar'
                      src={data?.userInfo?.personAvatar}
                      alt=''
                    />
                  ) : null}

                  <div className='account-daoru-text-content'>
                    {data?.userInfo?.isUidSearch ? (
                      <div className='account-daoru-success-title' title={data?.showData?.title}>
                        使用ID查询时无法显示角色名称，不影响正常导入
                      </div>
                    ) : (
                      <>
                        <div className='account-daoru-success-title' title={data?.showData?.title}>
                          {data?.userInfo?.roleName}
                        </div>
                        <span
                          className={
                            !data?.userInfo?.bodyName ? 'account-daoru-success-name-error' : ''
                          }
                        >
                          {data?.userInfo?.bodyName || '体型未识别'}
                        </span>
                        {` | `}
                        <span
                          className={
                            !data?.userInfo?.serverName ? 'account-daoru-success-name-error' : ''
                          }
                        >
                          {data?.userInfo?.serverName || '服务器名称未识别'}
                        </span>
                        {` | `}
                        <span
                          className={
                            !data?.userInfo?.forceName ? 'account-daoru-success-name-error' : ''
                          }
                        >
                          {data?.userInfo?.forceName || '门派未识别'}
                        </span>
                      </>
                    )}
                  </div>
                  <Button type='primary' onClick={handleClickImport}>
                    导入
                  </Button>
                </div>
              </div>
              {data?.equipData?.未识别装备列表?.length ||
              data?.equipData?.未内置附魔列表?.length ? (
                <div className={'account-daoru-res-tips'}>
                  <h1 className={'account-daoru-res-tips-title'}>
                    存在以下信息未识别，会跳过导入，导入后请手动修改
                  </h1>
                  {data?.equipData?.未识别装备列表?.length ? (
                    <div className={'account-daoru-res-tips-text'}>
                      <p className={'account-daoru-res-tips-name'}>未识别装备：</p>
                      {data?.equipData?.未识别装备列表?.join('、')}
                    </div>
                  ) : null}
                  {data?.equipData?.未内置附魔列表?.length ? (
                    <div className={'account-daoru-res-tips-text'}>
                      <p className={'account-daoru-res-tips-name'}>未支持附魔：</p>
                      {data?.equipData?.未内置附魔列表?.join('、')}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          {errorMsg ? (
            <div className='account-daoru-text-wrap account-daoru-text-error'>{errorMsg}</div>
          ) : null}
        </>
      )}
      <Modal
        footer={null}
        title='如何获取角色UID'
        open={helpVisible}
        onCancel={() => setHelpVisible(false)}
      >
        <div>
          1、发送你的角色至任意聊天频道。
          <Image className='account-daoru-help-img' src={教程_1} />
        </div>
        <div>
          2、按住「Ctrl」鼠标移动到名称上，复制玩家ID。
          <Image className='account-daoru-help-img' src={教程_2} />
        </div>
      </Modal>
    </div>
  )
}

export default AccountImport

// 获取配装数据
const getPzData = (data) => {
  // 获取展示信息
  if (data) {
    const res = getEquipData(data)
    console.log('res', res)
    if (Object.keys(res?.equip)?.length !== 0) {
      return res
    } else return null
  }
  return null
}

const 校验门派 = (校验名称) => {
  const { 简写 } = 获取当前数据()
  if (['shxj', 'w_shxj']?.includes(简写)) {
    return 校验名称 === '万灵山庄'
  } else if (简写 === 'lhj') {
    return 校验名称 === '蓬莱'
  } else if (简写 === 'txj') {
    return 校验名称 === '衍天宗'
  } else if (['gfj', 'w_gfj']?.includes(简写)) {
    return 校验名称 === '刀宗'
  } else if (['wf', 'w_wf']?.includes(简写)) {
    return 校验名称 === '北天药宗'
  } else if (简写 === 'hjy') {
    return 校验名称 === '万花'
  }
  return false
}
