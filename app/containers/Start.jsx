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
    width:220px;
    padding: 10px 0px 10px 0px;
    border-radius: 5px;
    background-color: #EE2B47;
    color: white;
    letter-spacing: 2.0px;
    font-size: 20px;
    font-family: 'CustomFont', sans-serif;
    // border: none;
    BORDER-COLOR: black;
    border-width: thin;
    font-weight:600;
    cursor: pointer;
    // display: flex;
    // justify-content:center;
    transform: translateY(45px);

  }
  
  .page-content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 45%;
    margin-top:15%;
    }

  .step-container {
    padding: 15px 10px 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height:100%;
  
  }

  .step-label {
    font-size: 24px;
    font-weight: 400;
    color: #FFFFFF;
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: 'CustomFont', sans-serif;
    letter-spacing: 1.0px;
    padding-bottom: 25px;
 
  }

  .page-content-wrapper {
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      height: 100%;
  }
 
  .after_label_line {
      display: flex;
      background-color: grey;
      width : 245px;
      height: 2px;
      // margin: 10px 0px 20px;
      // padding: 0px 20px 0px 15px;
  }

`;

// Component
class Start extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <style>{styles}</style>
      
      <div className='page-content-wrapper'>
      <div className='page-content-container'>
        <PageContent >
        <div className="step-container">
        <label className="step-label" >SYSTEM RESTORE POINT<div className='after_label_line'></div></label>
        
        <RestoreComponent />
        <button className="tweaks-button">RESTORE POINT</button>
        </div>
        </PageContent>
        
        <PageContentChild >
        <div className="step-container">
          <label className="step-label">USER ACCOUNT CONTROL<div className='after_label_line'></div></label>
          <BoosterComponent />
            <button className="tweaks-button">Disable UAC</button>
              </div>
        </PageContentChild>
        </div>
        </div>
      </PageWrapper>
     
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Start);
