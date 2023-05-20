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
    name: 'form',
    icon: 'ion-ios-home',
  },
  {
    title: 'GPU',
    name: 'invoices',
    icon: 'ion-android-desktop',
  },
  {
    title: 'M/K',
    name: 'contacts',
    icon: 'ion-mouse',
  },
  {
    title: 'Memory',
    name: 'settings',
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

export const SideBar = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 80px;
  max-width: 200px;
  background: #2c323a;
  padding-right: 100px; /* Add padding to the right side */
`;


export const Tab = styled.a`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  height: 60px;
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
  ${props => props.id === 'contacts' && `color: #469fe5;`};
  ${props => props.id === 'settings' && `color: #f22727;`};
  ${props => props.id === 'invoices' && `color: #cbc189;`};
  ${props => props.id === 'apps' && `color: #899dcb;`};
  ${props => props.id === 'about' && `color: #b389cb;`};
`;

export const TabText = styled.span`
  margin-left: 10px;
`;

export const ActiveIndicator = styled.div`
  height: ${allTabs.length * 60}px;
  width: 5px;
  position: absolute;
  > div {
    position: absolute;
    background: #292b2c;
    width: 200px;
    border-left: 5px solid #469fe5;
  }
`;

import AppUpdate from './AppUpdate';

function AppNav({ activeTab, changeTab }) {
  const marginTopValue = setMarginValue(activeTab);
  const allTabsComponent = allTabs.map(tab => (
    <Tab key={tab.name} href="#" onClick={() => changeTab(tab.name)}>
      <Icon id={tab.name} className={tab.icon} />
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
