import PropTypes from 'prop-types';
import { Component, Children } from 'react';

import { oauth2ConfigPropTypes, oauth2Shape } from '../types';

class OAuth2Provider extends Component {
  render() {
    const { props: { children } } = this;
    return Children.only(children);
  }
}

OAuth2Provider.displayName = 'OAuth2Provider';
OAuth2Provider.contextTypes = { oauth2: oauth2Shape };
OAuth2Provider.childContextTypes = { oauth2: oauth2Shape.isRequired };
OAuth2Provider.propTypes = { ...oauth2ConfigPropTypes, children: PropTypes.element.isRequired };

export default OAuth2Provider;
