import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/page';

import { getHomepage } from '../../../../modules/pages';

class Homepage extends Component {
  componentDidMount() {
    this.props.getHomepage();
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getHomepage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
