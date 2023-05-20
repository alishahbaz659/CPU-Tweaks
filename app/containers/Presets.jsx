import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import _withFadeInAnimation from '../components/shared/hoc/_withFadeInAnimation';
import {
  PageWrapper,
  PageHeader,
  PageHeaderTitle,
  PageHeaderActions,
  PageContent,
  PageContentChild,
} from '../components/shared/Layout';
import RestoreComponent from '../assets/RestoreComponent';
import BoosterComponent from '../assets/BoosterComponent';

const styles = `
.step-label {
    font-size: 20px;
  font-weight: 200;
  margin: 10px 10px 0px 10px;
  letter-spacing: 1.0px;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    margin:20px;
}

  .tweaks-button {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #469fe5;
    color: white;
    font-size: 14px;
    border: none;
    font-weight:600;
    cursor: pointer;
    margin-right: 10px;
    display: block;
    margin-bottom:10px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .step-container {
    display: flex;
    align-items: center;
  }

  .step-label {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
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
        <label className="step-label">First Step:</label>
        <div className="container">
        <div className="step-container">
              <div className="buttons-container">
                <button className="tweaks-button">Restore Point</button>
                <button className="tweaks-button">Disable UAC</button>
              </div>
                </div>
                <div>
                    <RestoreComponent  />
                    </div>
            </div>
        </PageContent>
        
        <PageContentChild>
        <label className="step-label">Tweaks:</label>
        <div className="container">
        <div className="step-container">
              <div className="buttons-container">
                <button className="tweaks-button">System Tweaks</button>
                <button className="tweaks-button">Performance Tweaks</button>
              </div>
                </div>
                <div style={{ margin:'10px 0px 0px 0px' }}>
                    <BoosterComponent  />
                    </div>
            </div>
        </PageContentChild>
      </PageWrapper>
      </div>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Presets);
