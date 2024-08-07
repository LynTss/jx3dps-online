import { Alert, Button, message, Modal, ModalProps } from 'antd'

const 数据迁移: React.FC<ModalProps> = (props) => {
  const 复制当前数据 = () => {
    const localStorageData = {}
    for (let i = 0; i < localStorage.length; i++) {
      const key: string = localStorage.key(i) as string
      if (key) {
        const value = localStorage.getItem(key)
        localStorageData[key] = value
      }
    }

    // 将数据转换为字符串格式
    const localStorageString = JSON.stringify(localStorageData)

    // 创建一个文本域元素，用于复制内容到粘贴板
    const textarea = document.createElement('textarea')
    textarea.value = localStorageString
    document.body.appendChild(textarea)

    // 选中文本域中的内容并复制到粘贴板
    textarea.select()
    document.execCommand('copy')

    // 移除文本域元素
    document.body.removeChild(textarea)

    message.success('数据已复制到粘贴板')
  }

  const 导入数据前确认 = () => {
    Modal.confirm({
      title: `确定要导入数据吗？导入成功后会刷新当前页面。`,
      content: '导入后将覆盖您原有的数据，且无法恢复。',
      okText: '我要导入',
      onOk: async () => {
        导入数据()
      },
    })
  }

  const 导入数据 = () => {
    navigator.clipboard.readText().then((clipboardData) => {
      if (!clipboardData) {
        message.error('粘贴板内无可导入数据，请检查或重新复制')
      } else {
        const localStorageData = JSON.parse(clipboardData)

        // 将数据写入localStorage
        for (const key in localStorageData) {
          localStorage.setItem(key, localStorageData[key])
        }

        message.success('数据已全部导入')
        window?.location?.reload()
      }
    })
  }

  return (
    <Modal title='数据迁移' {...props} footer={null}>
      <Alert
        style={{ marginBottom: 24 }}
        message={
          <div>
            <p>
              在当前域名点击
              <span style={{ color: 'red' }}>「复制当前数据」</span>
              按钮，复制数据至剪切板
            </p>
            <p>
              在你要迁移数据的域名点击
              <span style={{ color: 'red' }}>「导入数据」</span>
              按钮，完成导入
            </p>
          </div>
        }
      />
      <Button block style={{ marginBottom: 24 }} onClick={复制当前数据}>
        复制当前数据
      </Button>
      <Button block type='primary' onClick={导入数据前确认}>
        导入数据
      </Button>
    </Modal>
  )
}

export default 数据迁移
