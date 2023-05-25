import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import _withFadeInAnimation from '../components/shared/hoc/_withFadeInAnimation';
import {
  PageWrapper,
  AboutContent,
  AboutContentSecond
} from '../components/shared/Layout';
import tachometer from '../assets/tachometer.png';

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
    width:200px;
    height:200px;
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
    transform: translateY(20px);
  }


  .tweaks-button {
    width:120px;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    background-color: #EE2B47;
    color: white;
    letter-spacing: 1.5px;
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
    // transform: translateY(45px);
  }

  
  .itemTwoWrapper{
    background: #333333;
    width:200px;
    height:200px;
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

  .IconWrapper{
    // width:40%;
    // height:70%;
    display:flex;
    justify-content:center;
    // margin-top:5px;
  }


`;

// Component
class About extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <style>{styles}</style>
        <AboutContent>
          <div className='labelDiv'>
            <label className="step-label" >NEED ANY HELP ?<div className='after_label_line'></div></label>
          </div>
        </AboutContent>

        <AboutContentSecond>
          <div className='divwrapper'>
            <div className='itemOneWrapper'>
              <div className='itemOneWrapperItems'>
              <div className='IconWrapper'>
                  <img src={tachometer} alt='sa' height='80%' width='80%' />
                </div>

                <div className='buttonWrapper'>
                <button className="tweaks-button">WHATSAPP</button>
              </div>
              </div>
              
            </div>
            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
              <div className='IconWrapper'>
                  <img src={tachometer} alt='sa' height='80%' width='80%' />
                </div>

                <div className='buttonWrapper'>
                  <button className="tweaks-button">DISCORD</button>
                </div>
              </div>
            </div>

            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
                <div className='IconWrapper'>
                  <img src={tachometer} alt='sa' height='80%' width='80%' />
                </div>

                <div className='buttonWrapper'>
                  <button className="tweaks-button">EMAIL</button>
                </div>
              </div>
            </div>
          </div>
        </AboutContentSecond>
      </PageWrapper>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(About);
