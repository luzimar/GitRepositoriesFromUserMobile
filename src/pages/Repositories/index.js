import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Title } from './styles';

class Repositories extends Component {
  render() {
    const { username } = this.props;
    return (
      <Container>
        <Title>
Bem Vindo
{' '}
{username}
</Title>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  username: state.login.username,
});
export default connect(mapStateToProps)(Repositories);
