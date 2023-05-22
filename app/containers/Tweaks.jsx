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
} from '../components/shared/Layout';
import BoosterComponent from '../assets/BoosterComponent';

const styles = `
  .tweaks-button {
    width:150px;
    padding: 10px;
    border-radius: 5px;
    background-color: #501c1c;
    color: white;
    letter-spacing: 2.0px;
    font-size: 14px;
    font-family: 'CustomFont', sans-serif;
    border: none;
    font-weight:200;
    cursor: pointer;
    display: block;
    margin:5px;
    padding-left:10px;
    padding-right:10px;
  }
  
`;




// Component
class Tweaks extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <style>{styles}</style>
        <TweakContent>
          <div>
          <BoosterComponent></BoosterComponent>
          
          <button className="tweaks-button">SYSTEM</button>
          <button className="tweaks-button">PERFORMANCE</button>
          </div>
        </TweakContent>

      </PageWrapper>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Tweaks);
