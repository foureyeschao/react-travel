import React from 'react'
import { Row, Col, Divider, Typography } from 'antd'
import styels from './Partners.module.css'
import imgMicrosoft from '../../assets/images/microsoft-80658_640.png'
import imgYouTube from '../../assets/images/icon-720944_640.png'
import imgInstagram from '../../assets/images/follow-826033_640.png'
import imgFaceBook from '../../assets/images/facebook-807588_640.png'

const partnersCollections = [{
  title: 'microsoft',
  src: imgMicrosoft
},
{
  title: 'YouTube',
  src: imgYouTube
}, {
  title: 'Instagram',
  src: imgInstagram
}, {
  title: 'FaceBook',
  src: imgFaceBook
},]


export const Partners: React.FC = () => {
  return (
    <div className={styels.content}>
      <Divider orientation='left' plain ><Typography.Title level={3}>Partners</Typography.Title></Divider>
      <Row>
        {
          partnersCollections.map((partner, index) =>
            <Col key={index} span={6}>
              <img
                src={partner.src}
                alt={partner.title}
                style={{
                  width: "80%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Col>
          )
        }
      </Row>
    </div>
  )
}