import React from 'react'
import styles from './HomePage.module.css'
import { Row, Col, Typography } from 'antd'
import { Header, Footer, SideMenu, Carousel, ProductCollection, Partners } from '../../components'

import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { productList1, productList2, productList3 } from './mockups'

export class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}><SideMenu /></Col>
            <Col span={18}><Carousel /></Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                Best Deals
            </Typography.Title>
            }
            sideImage={sideImage1}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                Today's Deals
            </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                Recomanded
            </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />
          <Partners />
        </div>

        <Footer />
      </React.Fragment>
    )
  }
}