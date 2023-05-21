// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Custom Components
import Form from '../../containers/Form';
import Invoices from '../../containers/Invoices';
import Contacts from '../../containers/Contacts';
import Settings from '../../containers/Settings';
import Start from '../../containers/Start';
import Tweaks from '../../containers/Tweaks';
import Gpu from '../../containers/gpu';
import Memory from '../../containers/Memory';
import Mouse from '../../containers/Mouse';
import Keyboard from '../../containers/Keyboard';
import Tools from '../../containers/Tools';
import Finish from '../../containers/Finish';
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
        {activeTab === 'start' && <Start />}
        {activeTab === 'tweaks' && <Tweaks />}
        {activeTab === 'gpu' && <Gpu />}
        {activeTab === 'memory' && <Memory />}
        {activeTab === 'mouse' && <Mouse />}
        {activeTab === 'keyboard' && <Keyboard />}
        {activeTab === 'tools' && <Tools />}
        {activeTab === 'finish' && <Finish />}

      </AppMainContent>
    );
  }
}

AppMain.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default AppMain;
