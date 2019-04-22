/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// components
import Card from './Card';

// action
import asyncTasksAction from './actionDashboard.js';

// card wrapper
const Container = styled.div`
  margin: auto;
  width: 32rem;
  padding: 0 1.5rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  height: 44rem;
  overflow: scroll;
  @media (min-width: 767px) {
    overflow: auto;
    width: 76.8rem;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    width: 100.2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Temporary = styled.div`
  height: 7rem;
  margin: auto;
  width: 32rem;
  background-color: #eee;
  @media (min-width: 767px) {
    width: 76.8rem;
  }
  @media (min-width: 1200px) {
    width: 100.2rem;
  }
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    return (
      <>
        <Temporary />
        <Container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
        <Temporary />
      </>
    );
  }
}

const mdtp = dispatch => ({
  getTasks: () => dispatch(asyncTasksAction()),
});

export default connect(
  null,
  mdtp,
)(Dashboard);
