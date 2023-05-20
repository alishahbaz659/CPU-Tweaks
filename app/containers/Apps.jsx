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
class Apps extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <PageHeader>
          <PageHeaderTitle>
            Apps
          </PageHeaderTitle>
        </PageHeader>
        <PageContent>
        asd
        </PageContent>
      </PageWrapper>
    );
  }
}


// Export
export default compose(
  _withFadeInAnimation
)(Apps);
