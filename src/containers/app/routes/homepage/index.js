import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withWrapper } from 'create-react-server/wrapper';
import Page from '../../components/page';

import { getHomepage } from '../../../../modules/pages';

class Homepage extends Component {
  static async getInitialProps(props) {
    await props.store.dispatch(getHomepage());
  }

  render() {
    const { content } = this.props;

    return (
      <Page title={content || 'Homepage'} id="homepage">
        <h1>Home</h1>
        {content}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  content: state.pages.home
});

export default withWrapper(connect(mapStateToProps, null)(Homepage));
