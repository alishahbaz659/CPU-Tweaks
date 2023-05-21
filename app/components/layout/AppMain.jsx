// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Custom Components
import Form from '../../containers/Form';
import Invoices from '../../containers/Invoices';
import Contacts from '../../containers/Contacts';
import Settings from '../../containers/Settings';
import Presets from '../../containers/Presets';
import Gpu from '../../containers/gpu';
import MouseKeyboard from '../../containers/Mousekeyboard'
import Memory from '../../containers/Memory';
import Apps from '../../containers/Apps';
import About from '../../containers/About';


// Layout
import { AppMainContent } from '../shared/Layout';

class AppMain extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.activeTab !== nextProps.activeTab;
  }

  render() {
    const { activeTab } = this.props;
    console.log('Active Tab:', activeTab); 
    return (
      <AppMainContent>
        {activeTab === 'presets' && <Presets />}
        {activeTab === 'gpu' && <Gpu />}
        {activeTab === 'mousekeyboard' && <MouseKeyboard />}
        {activeTab === 'memory' && <Memory />}
        {activeTab === 'apps' && <Apps />}
        {activeTab === 'about' && <About />}
      </AppMainContent>
    );
  }
}

AppMain.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default AppMain;
