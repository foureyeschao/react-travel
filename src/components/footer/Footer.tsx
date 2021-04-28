import React from 'react'
import { Layout, Typography } from 'antd'

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: 'center' }}>
          Copyright © 2021 React Travel's World
        </Typography.Title>
      </Layout.Footer>
    </React.Fragment>
  )
}

