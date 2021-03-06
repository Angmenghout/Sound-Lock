import React from "react"
import Layout from "antd/es/layout"
import Avatar from "antd/es/avatar"
import Menu from "antd/es/menu"
import styles from "./styles.module.css"
import Search from "antd/es/input/Search"
import PropType from "prop-types"
import { useHistory } from "react-router"

const { Header, Content } = Layout
const LOGO_URL = "https://via.placeholder.com/468x60?text=Logo"


const ClientLayout = props => {
    const { pageKey } = props

    // Get History from router 
    // so can push without use link
    const routeHistory = useHistory()

    // set menu as array 
    // easy on render
    const pageMenus = [
        {
            link: "/",
            label: "Home",
            key: "home"
        },
        {
            link: "/albums",
            label: "Album",
            key: "album"
        },
        {
            link: "/artist",
            label: "Artist",
            key: "artist"
        },
        {
            link: "/login",
            label: "Login/Register",
            key: "login"
        },
    ]

    // when ( home , album , about )  click
    // change page
    const onMenuClick = (menu) => {
        routeHistory.push(menu.link)
    }


    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.logo} >
                    <Avatar
                        src={LOGO_URL}
                    />
                </div>

                {/* Page Center , decorated in style */}
                <div className={styles.headerCenterArea}>
                    <Menu
                        theme={"dark"}
                        className={styles.menu}
                        mode="horizontal"
                        selectedKeys={pageKey}
                        style={{ lineHeight: '64px' }}
                    >
                        {
                            pageMenus.map(menu => {
                                return (
                                    <Menu.Item
                                        onClick={() => onMenuClick(menu)}
                                        key={menu.key}
                                        children={menu.label} />
                                )
                            })
                        }
                    </Menu>
                </div>

                <div className={styles.headerRightArea}>
                    <Search
                        placeholder={"Search"}
                    />
                </div>
            </Header>

            {/* Page Content is the children of props , render page content it here */}
            <Content style={{background:"#fff"}}>
                {props.children}
            </Content>
        </Layout>
    )
}

// Prop type use to make IDE recognize what accept api
// from component
ClientLayout.propTypes = {
    pageKey: PropType.any
}

export default ClientLayout