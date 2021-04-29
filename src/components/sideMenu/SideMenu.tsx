import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode={'vertical'} className={styles['side-menu']}>
      {
        sideMenuList.map((menu, index) =>
          <Menu.SubMenu
            key={`side-menu-${index}`}
            title={<span><GifOutlined />{menu.title}</span>}
          >
            {
              menu.subMenu.map((subMenu, subIndex) =>
                <Menu.SubMenu
                  key={`sub-menu-${subIndex}`}
                  title={<span><GifOutlined />{subMenu.title}</span>}
                >
                  {subMenu.subMenu.map((subMenuSub, subMsubIndex) =>
                    <Menu.Item
                      key={`sub-sub-menu-${subMsubIndex}`}
                    >
                      <span><GifOutlined />{subMenuSub}</span>
                    </Menu.Item>)}
                </Menu.SubMenu>

              )
            }
          </Menu.SubMenu>
        )
      }
    </Menu >
  )
}