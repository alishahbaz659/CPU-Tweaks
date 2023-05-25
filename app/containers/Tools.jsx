import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import _withFadeInAnimation from '../components/shared/hoc/_withFadeInAnimation';
import {
  PageWrapper,
  PageHeader,
  PageHeaderTitle,
  PageHeaderActions,
  PageContent,
  ToolsContent,
  ToolsContentSecond,
  ToolsContentThird
} from '../components/shared/Layout';


const styles = `

  .labelDiv{
    width:100%;
    height:50%;
  }

  .step-label {
    font-size: 54px;
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
 
  .after_label_line {
      display: flex;
      background-color: grey;
      width : 70%;
      height: 2px;
  }

  .divwrapper{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }

  .itemOneWrapper{
    background: #333333;
    width:250px;
    height:125px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .itemOneWrapperItems{
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    align-items: center;
    justify-content: center;
    border: thin solid #000000;
  }

  .buttonWrapper {
    display:flex;
    flex-direction:row;
    width:350px;
    justify-content:space-around;
    // padding-bottom:10px;
    transform: translateY(15px);
  }


  .tweaks-button {
    width:120px;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    background-color: #EE2B47;
    color: white;
    letter-spacing: 1.0px;
    font-size: 18px;
    font-family: 'CustomFont', sans-serif;
    // border: none;
    font-weight:200;
    cursor: pointer;
    // display: block;
    // margin:5px;
    // padding-left:10px;
    // padding-right:10px;
    border-color: black;
    border-width: thin;
    // transform: translateY(40px);
  }

  
  .itemTwoWrapper{
    background: #333333;
    width:250px;
    height:125px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .itemTwoWrapperItems{
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    align-items: center;
    justify-content: center;
    border: thin solid #000000;
  }

  .div-label {
    font-size: 24px;
    font-weight: 400;
    color: #FFFFFF;
    width:100%;
    display: flex;
    margin-top:16%;
    flex-direction:column;
    justify-content:center;
    font-family: 'CustomFont', sans-serif;
    letter-spacing: 1.0px;
 
  }



`;

// Component
class Tools extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <style>{styles}</style>
        <ToolsContent>
          <div className='labelDiv'>
            <label className="step-label" >IMPORTANT TOOLS<div className='after_label_line'></div></label>
          </div>
        </ToolsContent>

        <ToolsContentSecond>
          <div className='divwrapper'>
            <div className='itemOneWrapper'>
              <div className='itemOneWrapperItems'>
                <label className='div-label' >MSI MODE</label>
                <div className='buttonWrapper'>
                <button className="tweaks-button">OPEN</button>
              </div>
              </div>
              
            </div>
            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
                <label className='div-label' >NVIDIA INSPECTOR</label>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">OPEN</button>
                </div>
              </div>
            </div>

            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
                <label className='div-label' >MEMORY CLEANER</label>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">OPEN</button>
                </div>
              </div>
            </div>
          </div>
        </ToolsContentSecond>


        <ToolsContentThird>
          <div className='divwrapper'>
            <div className='itemOneWrapper'>
              <div className='itemOneWrapperItems'>
                <label className='div-label' >NVIDIA DRIVERS</label>
                <div className='buttonWrapper'>
                <button className="tweaks-button">OPEN</button>
              </div>
              </div>
              
            </div>
            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
                <label className='div-label' >FILTER KEYS</label>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">OPEN</button>
                </div>
              </div>
            </div>

            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
                <label className='div-label' >MSI AFTERBURNER</label>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">OPEN</button>
                </div>
              </div>
            </div>
          </div>
        </ToolsContentThird>


      </PageWrapper>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Tools);
