import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

import assets from './assets/assets.png'
import blocks from './assets/blocks.png'
import dashboard from './assets/dashboard.png'
import dollarIcon from './assets/dollar-icon.png'
import menuIcon from './assets/menu.png'
import notificationIcon from './assets/notification.png'
import parameters from './assets/parameters.png'
import profileIcon from './assets/profile.png'
import proposals from './assets/proposals.png'
import relayers from './assets/relayers.png'
import searchIcon from './assets/search.png'
import validators from './assets/validators.png'
import timerIcon from './assets/timer-icon.png'
import settingIcon from './assets/setting-icon.png'


const icons = [
  dashboard,
  validators,
  blocks,
  proposals,
  relayers,
  assets,
  parameters,
]
const menus = [
  'dashboard',
  'validators',
  'blocks',
  'proposals',
  'ibcRelayers',
  'assets',
  'parameters',
]
const Header = () => {
  return (
    <div className="header d-flex">
      <Navbar bg="" expand="lg" style={{ width: '100%' }} variant="dark">
        <Container>
          <Navbar.Brand href="/" className="cosmos-text cosmos-text-primary" style={{ fontSize: '24px', color: 'white !important' }}>COSMOS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100">
              {menus.map((item, index) => (
                <div className="header-menu-item d-flex" key={index}>
                  <Nav.Link href="#">
                    <Link to={item} style={{ display: 'flex' }}>
                      <img className="header-menu-item-img" src={icons[index]} alt="" />
                      <span className="cosmos-text">{item}</span>
                    </Link >
                  </Nav.Link>
                </div>
              ))}
              <div className="header-menu-item d-flex w-100" style={{ justifyContent: 'right' }} >
                <div className="header-toolbar d-flex g-12">
                  <div className="header-toolbar-button p-15">
                    <img src={searchIcon} alt="" />
                  </div>
                  <div className="header-toolbar-button p-15">
                    <img src={notificationIcon} alt="" />
                  </div>
                  <div className="header-toolbar-button">
                    <img src={profileIcon} alt="" />
                  </div>
                  <div className="p-12">
                    <img src={menuIcon} alt="" />
                  </div>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

const StatusBar = () => {
    return (
      <div className="status-bar d-flex">
        <p className="cosmos-text cosmos-text-info p-12">
          Cosmo station Wallet Extension Launch (BETA)
        </p>
        <div className="status-bar-content d-flex g-12">
          <div className="status-bar-content-item">
            <div className="d-flex">
              <div className="status-bar-icon">
                <img className="status-bar-icon-img" src={dollarIcon} alt="" />
              </div>
              <p className="cosmos-text cosmos-text-info my-10">Price: </p>
              <p className="cosmos-text cosmos-text-secondary bg-info status-bar-info my-10">
                $0.02470869
              </p>
              <p className="cosmos-text cosmos-text-info my-10">| </p>
            </div>
          </div>
          <div className="status-bar-content-item">
            <div className="d-flex">
              <div className="status-bar-icon">
                <img className="status-bar-icon-img" src={timerIcon} alt="" />
              </div>
              <p className="cosmos-text cosmos-text-info my-10">Latest Block: </p>
              <div className="d-flex g-6" style={{ overflow: 'hidden' }}>
                <p className="cosmos-text cosmos-text-secondary bg-info status-bar-info my-10">
                  15
                </p>
                <p className="cosmos-text cosmos-text-secondary bg-info status-bar-info my-10">
                  04
                </p>
                <p className="cosmos-text cosmos-text-secondary bg-info status-bar-info my-10">
                  22
                </p>
                <p className="cosmos-text cosmos-text-secondary bg-info status-bar-info my-10">
                  01
                </p>
                <p className="cosmos-text cosmos-text-secondary bg-info status-bar-info my-10">
                  ( 12 days ago )
                </p>
              </div>
              <p className="cosmos-text cosmos-text-info my-10">| </p>
            </div>
          </div>
          <div className="status-bar-content-item">
            <div className="d-flex">
              <div className="status-bar-icon">
                <img className="status-bar-icon-img" src={settingIcon} alt="" />
              </div>
              <p className="cosmos-text cosmos-text-info my-10">SDK: </p>
              <p className="cosmos-text cosmos-text-secondary status-bar-info my-10">
                v0.45.1
              </p>
              <p className="cosmos-text cosmos-text-info my-10">| </p>
              <p className="cosmos-text cosmos-text-info my-10">IBC: </p>
              <p className="cosmos-text cosmos-text-secondary status-bar-info my-10">
                v2.0.3
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <>
            <Header />
            <StatusBar />
        </>
    )
}
