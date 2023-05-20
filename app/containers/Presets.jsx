import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import _withFadeInAnimation from '../components/shared/hoc/_withFadeInAnimation';
import {
  PageWrapper,
  PageHeader,
  PageHeaderTitle,
  PageHeaderActions,
  PageContent,
} from '../components/shared/Layout';
import Button from '../components/shared/Button';
import { Icon } from '../components/layout/AppNav';

const styles = `
 
  /* Step Label Style */
  .step-label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  /* Tweaks Button Style */
  .tweaks-button {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #469fe5;
    color: white;
    font-size: 14px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }

  .step-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .step-label {
    margin-right: 10px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
  }
 

  .restore-icon-container {
    margin-left: auto;
    /* Add any additional styles for the restore icon container */
  }

`;




// Component
class Presets extends PureComponent {
  render() {
    return (
    <div>
    <style>{styles}</style>
      <PageWrapper>
        <PageHeader>
          <PageHeaderTitle>
            Presets
          </PageHeaderTitle>
        </PageHeader>
        <PageContent>
        <div className="step-container">
            <label className="step-label">First Step:</label>
            <div className="buttons-container">
              <button className="tweaks-button">Restore Point</button>
              <button className="tweaks-button">Disable UAC</button>
            </div>
            <div className="restore-icon-container">
            <Icon id="ion-ios-home" />
            </div>
          </div>
        </PageContent>
      </PageWrapper>
      </div>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Presets);
