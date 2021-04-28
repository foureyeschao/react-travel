import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg';
import { Button, Dropdown, Input, Menu, Layout, Typography } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <Typography.Text>Make our trip happier</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>English</Menu.Item>
                <Menu.Item>Français</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            Language
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>Sign in</Button>
            <Button>Login</Button>
          </Button.Group>
        </div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>React Travel's World</Typography.Title>
          <Input.Search
            placeholder={'Please input your destination or your keyword'}
            className={styles['search-input']}
          />
        </Layout.Header>
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key={1}>Home</Menu.Item>
          <Menu.Item key={2}>Weekend Trip</Menu.Item>
          <Menu.Item key={3}>Trip with a group</Menu.Item>
          <Menu.Item key={4}>Free Travel</Menu.Item>
          <Menu.Item key={5}>Private group</Menu.Item>
          <Menu.Item key={6}>Cruise Ship</Menu.Item>
          <Menu.Item key={7}>Hotel and Tourist attraction</Menu.Item>
          <Menu.Item key={8}>Local Fun</Menu.Item>
          <Menu.Item key={10}>Theme</Menu.Item>
          <Menu.Item key={11}>Custom Trip</Menu.Item>
          <Menu.Item key={12}>Study Tour</Menu.Item>
          <Menu.Item key={13}>Visa</Menu.Item>

        </Menu>
      </div>
    </React.Fragment>
  )
}

