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

// Component
class Tools extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <PageHeader>
          {/* <PageHeaderTitle>
            tools
          </PageHeaderTitle> */}
        </PageHeader>
        {/* <PageContent>
        asd
        </PageContent> */}
      </PageWrapper>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Tools);
