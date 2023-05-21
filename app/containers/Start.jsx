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
import '../fonts/fonts.css';

const styles = `
//   .buttons-container {
//     display: flex;
//     flex-direction: column;
//     margin:20px;
// }

  .tweaks-button {
    width:250px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #A50021;
    color: white;
    letter-spacing: 2.0px;
    font-size: 24px;
    font-family: 'CustomFont', sans-serif;
    border: none;
    font-weight:600;
    cursor: pointer;
    display: block;
    margin-right:10px;
    padding-left:40px;
    padding-right:40px;

  }
  .step-container {
    padding:12px;
    display: flex;
  justify-content: space-between;
  align-items: center;
  
  }

  .step-label {
    font-size: 50px;
    font-weight: bold;
    font-family: 'CustomFont', sans-serif;
    letter-spacing: 2.0px;
    padding-top: 2%;
  }

  .page-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }


`;



// Component
class Start extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <style>{styles}</style>
        <PageHeader>
          {/* <PageHeaderTitle>
            Start
          </PageHeaderTitle> */}
        </PageHeader>
      
      <div className="page-content-container">
        <PageContent >
        <div className="step-container">
        <RestoreComponent style={{ paddingLeft: '10px' }}/>
        <label className="step-label">FIRST STEP</label>
        <button className="tweaks-button">RESTORE POINT</button>
        </div>
        </PageContent>
        
        <PageContentChild >
        <div className="step-container">
            <BoosterComponent style={{ paddingLeft: '10px' }}/>
            <label className="step-label">Tweaks</label>
            <button className="tweaks-button">Disable UAC</button>
              </div>
        </PageContentChild>
        </div>
      </PageWrapper>
     
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Start);
