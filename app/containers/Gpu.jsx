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
class Gpu extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <PageHeader>
          <PageHeaderTitle>
            GPU
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
)(Gpu);
