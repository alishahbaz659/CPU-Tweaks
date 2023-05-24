import React from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';

// Animation
import { Motion, spring } from 'react-motion';
import logo from '../../assets/rocketlogo.png';
import image1 from '../../assets/logo.png';
import settingImage from '../../assets/settings.png'
import shieldImage from '../../assets/protectiondone.png'
import appsImage from '../../assets/apps.png'
import supportImage from '../../assets/support.png'
import BoosterComponent from '../../assets/BoosterComponent';
import TwitterComponent from '../../assets/TwitterComponent';
import InstagramComponent from '../../assets/InstagramComponent';
import DiscordComponent from '../../assets/DiscordComponent';
import YoutubeComponent from '../../assets/YoutubeComponent';


const springConfig = {
  stiffness: 350,
  damping: 18,
  precision: 0.01,
};

const setMarginValue = activeTab => {
  const multiplier = 100 / allTabs.length;
  const activeTabIndex = findIndex(allTabs, { name: activeTab });
  return activeTabIndex * multiplier;
};

const allTabs = [
  {
    title: 'START',
    name: 'start',
    icon: shieldImage,
  },
  {
    title: 'TWEAKS',
    name: 'tweaks',
    icon: settingImage,
  },
  // {
  //   title: 'GPU',
  //   name: 'gpu',
  //   icon: 'ion-android-desktop',
  // },
  // {
  //   title: 'MEMORY',
  //   name: 'memory',
  //   icon: 'ion-mouse',
  // },
  // {
  //   title: 'MOUSE',
  //   name: 'mouse',
  //   icon: 'ion-ios-color-filter-outline',
  // },
  // {
  //   title: 'KEYBOARD',
  //   name: 'keyboard',
  //   icon: 'ion-android-apps',
  // },
  {
    title: 'TOOLS',
    name: 'tools',
    icon: appsImage,
  },
  {
    title: 'FINISH',
    name: 'finish',
    icon: supportImage,
  },
];

// Styles
import styled from 'styled-components';
import '../../fonts/fonts.css';

export const SideBar = styled.div`
  // flex: 1 0 auto;
  // position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // height: 100%;
  // min-width: 80px;
  // max-width: 210px;
  // min-height: 100%;
  // max-height: 100%;
  // padding-top:5%;
  
  // padding-right: 100px; /* Add padding to the right side */
`;


export const Tab = styled.a`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 14px;
  line-height: 1.5;
  text-decoration: none;
  height: 120px;
  width:120px;
  padding: 10px 0px 10px  0; 
  background: ${props => props.active ? '#EE2B47' : 'transparent'};
  &:hover {
    color: white;
    text-decoration: none;
    background: ${props => props.active ? '#EE2B47' : '#333'};
  }
`;


export const Icon = styled.i`
  // padding-left: 10px;
  font-size:32px;
  ${props => props.id === 'form' && `color: #6bbb69;`};
  ${props => props.id === 'start' && `color: #6bbb69;`};
  ${props => props.id === 'gpu' && `color: #469fe5;`};
  ${props => props.id === 'mousekeyboard' && `color: #f22727;`};
  ${props => props.id === 'memory' && `color: #cbc189;`};
  ${props => props.id === 'apps' && `color: #899dcb;`};
  ${props => props.id === 'about' && `color: #b389cb;`};
`;

export const TabText = styled.span`
  font-weight: 800;
  font-size:20px;
  color:#FFFFFF;
  letter-spacing: 2px;
  font-family: 'CustomFont', sans-serif;
`;

export const ActiveIndicator = styled.div`
  height: ${allTabs.length * 80}px;
  width: 5px;
  position: absolute;
  > div {
    position: absolute;
    background: #EE2B47;
    width: 120px;
    // border-left: 8px solid #A50021;
    // border-right: 8px solid #A50021;
  }
`;


const Wrapper = styled.div`
flex: 1 0 auto;
  position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: center;
align-self: center;
min-width: 80px;
  max-width: 120px;
  min-height: 100%;
  max-height: 100%;
  // padding-top:5%;
  background: #1E1E1E;
  padding-right: 100px;
`;

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding:'5px',
    width:'120px'
  },
  image: {
    width: '20px',
    height: '20px',
  },
  logo: {
     width:'100px', 
     height:'100px',
  },
  logoWrapper: {
    display:'flex',
    justifyContent:'center',
    width:'200px',  
  },
  navTabs:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    // marginBottom:'50px',
    // marginTop:'20px'


  }

};

const CustomImageComponent = ({ icon }) => {
  return <img src={icon} alt="Custom Icon" style={{ width: '50px', height: '50px' }} />;
};


import AppUpdate from './AppUpdate';

function AppNav({ activeTab, changeTab }) {
  const marginTopValue = setMarginValue(activeTab);
  const allTabsComponent = allTabs.map(tab => (
    <Tab key={tab.name} href="#" onClick={() => changeTab(tab.name)} style={styles.navTabs}
    active={activeTab === tab.name}
    >
      {/* <Icon id={tab.name} className={tab.icon} /> */}
      <CustomImageComponent icon={tab.icon} />
      <div style={{margin: '0px 0px 6px 0'}}></div>
      <TabText>{tab.title}</TabText>
    </Tab>
  ));
  return (
    <Wrapper>
      {/* <div  style={styles.logoWrapper}>
      <img src={logo} alt="Logo" style={styles.logo}></img>
      </div> */}
      {/* <AppUpdate /> */}
    <SideBar>
      <div>
        {/* <Motion style={{ marginTop: spring(marginTopValue, springConfig) }}>
          {({ marginTop }) => (
            <ActiveIndicator>
              <div
                style={{
                  height: `${100 / allTabs.length}%`,
                  top: `${marginTop}%`,
                }}
              />
            </ActiveIndicator>
          )}
        </Motion> */}
        {allTabsComponent}
      </div>
      
    </SideBar>

    {/* <AppUpdate /> */}
    <div style={styles.buttonContainer}>
    <TwitterComponent style={styles.image}></TwitterComponent>
    <InstagramComponent style={styles.image}></InstagramComponent>
    <DiscordComponent style={styles.image}></DiscordComponent>
    <YoutubeComponent style={styles.image}></YoutubeComponent>
    </div>
    </Wrapper>
  );
}

AppNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default AppNav;
