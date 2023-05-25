import React, { PureComponent } from 'react';
import { compose } from 'recompose';
import _withFadeInAnimation from '../components/shared/hoc/_withFadeInAnimation';
import {
  PageWrapper,
  PageHeader,
  PageHeaderTitle,
  PageHeaderActions,
  PageContent,
  TweakContent,
  TweakContentSecond,
  TweakContentThird,
} from '../components/shared/Layout';
import BoosterComponent from '../assets/BoosterComponent';
import tachometer from '../assets/tachometer.png';
import gpu from '../assets/gpu.png'
import mouse from '../assets/mouse.png'
import keyboard from '../assets/keyboard.png'
import ram from '../assets/ram.png'



const styles = `

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
    display: block;
    // margin:5px;
    padding-left:10px;
    padding-right:10px;
    border-color: black;
    border-width: thin;
    transform: translateY(18px);

  }

  .ram-tweaks-button {
    width:120px;
    padding: 10px;
    border-radius: 5px;
    background-color: #EE2B47;
    color: white;
    letter-spacing: 1.0px;
    font-size: 18px;
    font-family: 'CustomFont', sans-serif;
    // border: none;
    font-weight:200;
    cursor: pointer;
    display: block;
    margin:5px;
    padding-left:10px;
    padding-right:10px;
    border-color: black;
    border-width: thin;
  }



  .memory-boost-button {
    width:100px;
    padding: 25px 15px 25px 15px;
    border-radius: 5px;
    background-color: #EE2B47;
    color: white;
    letter-spacing: 1.0px;
    font-size: 18px;
    font-family: 'CustomFont', sans-serif;
    // border: none;
    border-color: black;
    border-width: thin;
    font-weight:200;
    cursor: pointer;
    display: flex;
    // margin:5px;
    
  }


  .divwrapper{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    
    
  }
  .divwrapperRam{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    

  }

  .itemOneWrapper{
    background: #333333;
    width:350px;
    height:125px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  
  .itemTwoWrapper{
    background: #333333;
    width:350px;
    height:125px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .itemThreeWrapper{
    background: #333333;
    height: 125px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    border: thin solid #000000;
  }

  .buttonWrapper {
    display:flex;
    flex-direction:row;
    width:350px;
    justify-content:space-around;
    // padding-bottom:10px;

  }

.ramButtonWrapper{
    display:flex;
    flex-direction:column;
    // width:350px;
    justify-content:space-around;
    // padding-bottom:10px;
    height:100%;
}


  .itemOneWrapperItems{
    display: flex;
    flex-direction: column;
    // height: 100%;
    align-items: center;
    justify-content: space-around;
    border: thin solid #000000;
  }

  .itemTwoWrapperItems{
    display: flex;
    flex-direction: column;
    // height: 100%;
    align-items: center;
    justify-content: space-around;
    border: thin solid #000000;
  }

  .IconWrapper{
    width:30%;
    height:30%;
    display:flex;
    justify-content:center;
    margin-top:5px;
  }

  .IconWrapperRam{
    display:flex;
    justify-content:center;
    align-items:center;
  }

`;

// Component
class Tweaks extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <style>{styles}</style>
        <TweakContent>
          <div className='divwrapper'>
            <div className='itemOneWrapper'>
              <div className='itemOneWrapperItems'>
                <div className='IconWrapper'>
                  <img src={tachometer} alt='sa' height='80%' width='80%' />
                </div>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">SYSTEM</button>
                  <button className="tweaks-button">PERFORMANCE</button>
                </div>
              </div>

            </div>
            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
                <div className='IconWrapper'>
                  <img src={gpu} alt='sa' height='80%' width='80%' />
                </div>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">NVIDIA</button>
                  <button className="tweaks-button">AMD</button>
                </div>
              </div>
            </div>
          </div>
        </TweakContent>



        <TweakContentSecond>
          <div className='divwrapper'>
            <div className='itemOneWrapper'>
              <div className='itemOneWrapperItems'>
                <div className='IconWrapper'>
                  <img src={mouse} alt='sa' height='80%' width='80%' />
                </div>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">DQS</button>
                  <button className="tweaks-button">DELAY</button>
                </div>
              </div>

            </div>
            <div className='itemTwoWrapper'>
              <div className='itemTwoWrapperItems'>
                <div className='IconWrapper'>
                  <img src={keyboard} alt='sa' height='80%' width='80%' />
                </div>
                <div className='buttonWrapper'>
                  <button className="tweaks-button">DQS</button>
                  <button className="tweaks-button">DELAY</button>
                </div>
              </div>
            </div>
          </div>
        </TweakContentSecond>


        <TweakContentThird>
          <div className='divwrapperRam'>
            <div className='itemThreeWrapper'>
            <div className='IconWrapperRam'>
              <img src={ram} alt='sa' height='40%' width='60%' />
            </div>
            <div>
              <div className='ramButtonWrapper'>
                <button className="ram-tweaks-button">8 GB</button>
                <button className="ram-tweaks-button">24 GB</button>
              </div>
            </div>
            <div>
              <div className='ramButtonWrapper'>
                <button className="ram-tweaks-button">16 GB</button>
                <button className="ram-tweaks-button">32 GB</button>
              </div>
            </div>
            <div>
            <div className='ramButtonWrapper'>
            <button className='memory-boost-button' >MEMORY BOOST</button>
            </div>
            </div>
            </div>
          </div>

        </TweakContentThird>
      </PageWrapper>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Tweaks);
