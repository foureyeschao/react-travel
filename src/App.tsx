import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          React-Travel is initialized.
        </p>
      </header>
=======
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
      </div>
      <Footer />
>>>>>>> Stashed changes
    </div >
  );
}

export default App;
