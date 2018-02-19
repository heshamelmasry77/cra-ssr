import React, { Component } from 'react';
import Page from '../../components/page';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  static notFound = true;

  render() {
    return (
      <Page title="Page Not Found" noCrawl id="not-found">
        <h1>Page can't be found...</h1>
        <Link to="/">Go home?</Link>
      </Page>
    );
  }
}
