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
    padding: 20px 30px;
    border-radius: 10px;
    background-color: #501c1c;
    color: white;
    letter-spacing: 2.0px;
    font-size: 24px;
    font-family: 'CustomFont', sans-serif;
    border: none;
    font-weight:600;
    cursor: pointer;
    display: block;
    margin:10px;
    padding-left:40px;
    padding-right:40px;

  }
  
  .page-content-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 60%;
    margin-top:5%;
  }

  .step-container {
    // padding: 10px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height:100%;
  
  }

  .step-label {
    font-size: 20px;
    font-weight: 400;
    color: #a8a4a4;
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: 'CustomFont', sans-serif;
    letter-spacing: 1.0px;
 
  }

  .page-content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
  }
 
  .after_label_line {
      display: flex;
      background-color: grey;
      width : 220px;
      height: 2px;
      margin: 10px 0px 20px;
      padding: 0px 20px 0px 15px;
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
        
        <RestoreComponent style={{ margin: '0px 0px 20px 0px',padding:'5px' }}/>
        <button className="tweaks-button">RESTORE POINT</button>
        </div>
        </PageContent>
        
        <PageContentChild >
        <div className="step-container">
          <label className="step-label">USER ACCOUNT CONTROL<div className='after_label_line'></div></label>
          <BoosterComponent style={{ margin: '0px 0px 20px 0px',padding:'5px' }} />
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
