import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withWrapper } from 'create-react-server/wrapper';
import Page from '../../components/page';

import { getAbout } from '../../../../modules/pages';

class About extends Component {
  static async getInitialProps(props) {
    await props.store.dispatch(getAbout());
  }

  render() {
    const { content } = this.props;

    return (
      <Page title={content || 'About'} id="about">
        <h1>About Us</h1>
        {content}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  content: state.pages.about
});

export default withWrapper(connect(mapStateToProps, null)(About));
