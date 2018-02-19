import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/page';

import { getAbout } from '../../../../modules/pages';

class About extends Component {
  componentDidMount() {
    this.props.getAbout();
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAbout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);
