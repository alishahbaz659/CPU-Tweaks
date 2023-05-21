import React from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';

// Animation
import { Motion, spring } from 'react-motion';

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
    title: 'Presets',
    name: 'presets',
    icon: 'ion-ios-home',
  },
  {
    title: 'GPU',
    name: 'gpu',
    icon: 'ion-android-desktop',
  },
  {
    title: 'M/K',
    name: 'mousekeyboard',
    icon: 'ion-mouse',
  },
  {
    title: 'Memory',
    name: 'memory',
    icon: 'ion-ios-color-filter-outline',
  },
  {
    title: 'Apps',
    name: 'apps',
    icon: 'ion-android-apps',
  },
  {
    title: 'About',
    name: 'about',
    icon: 'ion-information-circled',
  },
];

// Styles
import styled from 'styled-components';
import '../../fonts/fonts.css';

export const SideBar = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  min-width: 80px;
  max-width: 210px;
  background: #292728;
  padding-right: 100px; /* Add padding to the right side */
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
  height: 60px;
  width: 200px;
  padding: 0 10px; 
  &:hover {
    color: white;
    text-decoration: none;
  }
`;


export const Icon = styled.i`
  padding-left: 10px;
  font-size:32px;
  ${props => props.id === 'form' && `color: #6bbb69;`};
  ${props => props.id === 'presets' && `color: #6bbb69;`};
  ${props => props.id === 'gpu' && `color: #469fe5;`};
  ${props => props.id === 'mousekeyboard' && `color: #f22727;`};
  ${props => props.id === 'memory' && `color: #cbc189;`};
  ${props => props.id === 'apps' && `color: #899dcb;`};
  ${props => props.id === 'about' && `color: #b389cb;`};
`;

export const TabText = styled.span`
  font-weight: 800;
  font-size:22px;
  font-family: 'CustomFont', sans-serif;
`;

export const ActiveIndicator = styled.div`
  height: ${allTabs.length * 60}px;
  width: 5px;
  position: absolute;
  > div {
    position: absolute;
    background: #292b2c;
    width: 210px;
    border-left: 5px solid #A50021;
    border-right: 5px solid #A50021;
  }
`;

import AppUpdate from './AppUpdate';

function AppNav({ activeTab, changeTab }) {
  const marginTopValue = setMarginValue(activeTab);
  const allTabsComponent = allTabs.map(tab => (
    <Tab key={tab.name} href="#" onClick={() => changeTab(tab.name)}>
      {/* <Icon id={tab.name} className={tab.icon} /> */}
      <TabText>{tab.title}</TabText>
    </Tab>
  ));
  return (
    <SideBar>
      <div>
        <Motion style={{ marginTop: spring(marginTopValue, springConfig) }}>
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
        </Motion>
        {allTabsComponent}
      </div>
      <AppUpdate />
    </SideBar>
  );
}

AppNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default AppNav;
