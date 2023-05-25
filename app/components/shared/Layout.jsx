// Libraries
import React from 'react';

// Styles
import styled from 'styled-components';

const AppWrapperStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const AppMainContentStyle = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  background: #262626;
`;

const PageWrapperStyle = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageHeaderStyle = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12px;
  // padding: 10px 120px 10px 40px;
  background: #A50021;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const PageHeaderTitleStyle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.5px;
  color:white;
`;

const PageHeaderActionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  button {  margin-left: 10px; }
  i { margin-right: 10px; }
`;

const PageContentStyle = styled.div`
  // flex: 1;
  // overflow: hidden;
  margin-right:40px;
  // padding: 10px 15px 10px 15px;
  ${props =>
    !props.bare &&
    `
    border: thin solid #000000;
    border-radius: 8px;
    background: #383434;
  `};
  
`;

const PageContentChildStyle = styled.div`
  // flex: 1;
  // overflow: hidden;
  // margin: 1px 40px 40px 40px;
  ${props =>
    !props.bare &&
    `
    border: thin solid #000000;
    border-radius: 8px;
    background: #383434;
  `};
`;



const TweakContentStyle = styled.div`
// flex: 1;
// overflow: hidden;
margin: 60px 40px 15px 40px;
${props =>
  !props.bare &&
  `
  border: 0px solid rgba(0,0,0,.1);
  border-radius: 4px;
  // background: #FFF;
`};
`;


const TweakContentStyleSecond = styled.div`
// flex: 1;
// overflow: hidden;
margin: 40px 40px 15px 40px;
${props =>
  !props.bare &&
  `
  border: 0px solid rgba(0,0,0,.1);
  border-radius: 4px;
  // background: #FFF;
`};
`;

const TweakContentStyleThird = styled.div`
// flex: 1;
// overflow: hidden;
margin: 40px 40px 40px 40px;
${props =>
  !props.bare &&
  `
  border: 0px solid rgba(0,0,0,.1);
  border-radius: 4px;
  // background: #FFF;
  `};
`;

const ToolsContentStyle = styled.div`
// flex: 1;
// overflow: hidden;
margin: 60px 40px 15px 40px;
${props =>
  !props.bare &&
  `
  border: 0px solid rgba(0,0,0,.1);
  border-radius: 4px;
  // background: #FFF;
  `};
`;

const ToolsContentStyleSecond = styled.div`
// flex: 1;
// overflow: hidden;
margin: 15px 40px 15px 40px;
${props =>
  !props.bare &&
  `
  border: 0px solid rgba(0,0,0,.1);
  border-radius: 4px;
  // background: #FFF;
`};
`;

const ToolsContentStyleThird = styled.div`
// flex: 1;
// overflow: hidden;
margin: 15px 40px 15px 40px;
${props =>
  !props.bare &&
  `
  border: 0px solid rgba(0,0,0,.1);
  border-radius: 4px;
  // background: #FFF;
`};
`;

const PageFooterStyle = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #f9fafa;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

// Components
const AppWrapper = props => <AppWrapperStyle>{props.children}</AppWrapperStyle>;

const AppMainContent = props => (
  <AppMainContentStyle>{props.children}</AppMainContentStyle>
);

const PageWrapper = props => (
  <PageWrapperStyle>{props.children}</PageWrapperStyle>
);

const PageHeader = props => <PageHeaderStyle>{props.children}</PageHeaderStyle>;

const PageHeaderTitle = props => (
  <PageHeaderTitleStyle>{props.children}</PageHeaderTitleStyle>
);

const PageHeaderActions = props => (
  <PageHeaderActionsStyle>{props.children}</PageHeaderActionsStyle>
);

const PageContent = props => (
  <PageContentStyle bare={props.bare}>{props.children}</PageContentStyle>
);
const TweakContent = props => (
  <TweakContentStyle bare={props.bare}>{props.children}</TweakContentStyle>
);

const TweakContentSecond = props => (
  <TweakContentStyleSecond bare={props.bare}>{props.children}</TweakContentStyleSecond>
);

const TweakContentThird = props => (
  <TweakContentStyleThird bare={props.bare}>{props.children}</TweakContentStyleThird>
);

const ToolsContent = props => (
  <ToolsContentStyle bare={props.bare}>{props.children}</ToolsContentStyle>
);

const ToolsContentSecond = props => (
  <ToolsContentStyleSecond bare={props.bare}>{props.children}</ToolsContentStyleSecond>
);

const ToolsContentThird = props => (
  <ToolsContentStyleThird bare={props.bare}>{props.children}</ToolsContentStyleThird>
);




const PageContentChild = props => (
  <PageContentChildStyle bare={props.bare}>{props.children}</PageContentChildStyle>
);



const PageFooter = props => <PageFooterStyle>{props.children}</PageFooterStyle>;

export {
  AppWrapper,
  AppMainContent,
  PageWrapper,
  PageHeader,
  PageHeaderTitle,
  PageHeaderActions,
  PageContent,
  PageContentChild,
  PageFooter,
  TweakContent,
  TweakContentSecond,
  TweakContentThird,
  ToolsContent,
  ToolsContentSecond,
  ToolsContentThird
};
