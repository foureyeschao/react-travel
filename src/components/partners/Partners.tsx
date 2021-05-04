import React from 'react'
import { Row, Col, Divider, Typography } from 'antd'
import imgMicrosoft from '../../assets/images/microsoft-80658_640.png'
import imgYouTube from '../../assets/images/icon-720944_640.png'
import imgInsgram from '../../assets/images/follow-826033_640.png'
import imgFaceBook from '../../assets/images/facebook-807588_640.png'


export const Partners: React.FC = () => {
  return (
    <div>
      <Divider orientation='left' plain ><Typography.Title level={3}>Partners</Typography.Title></Divider>
      <Row>
        <Col span={6}>
          <img src={imgMicrosoft} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
        <Col span={6}>
          <img src={imgYouTube} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
        <Col span={6}>
          <img src={imgInsgram} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
        <Col span={6}>
          <img src={imgFaceBook} alt="" style={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }} />
        </Col>
      </Row>
    </div>
  )
}