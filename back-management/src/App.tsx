import { Button,Space  } from 'antd';
import {StepForwardOutlined} from '@ant-design/icons'

function App() {
  return (
    <div className="App">
    <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <StepForwardOutlined />
  </Space>
    </div>
  )
}

export default App
