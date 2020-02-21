/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, Content, Icon} from 'native-base';
import Header from '../../components/Header';
import Card from '../../components/CardQuiz';
import Style from './styles';
import Arrow from '../../Svg/arrow';
import {TouchableOpacity, View} from 'react-native';
import {ENDPOINT} from '../../configs';
import PropTypes from 'prop-types';

export default class Quiz extends Component {
  static navigationOptions = {tabbarVisible: true};
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      data: [],
    };
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    try {
      const result = await ENDPOINT.quizAll();
      console.log(result);
      this.setState({data: result.data});
    } catch (e) {
      console.log(e);
    }
  };
  _onPress = () => {};
  _toDetail = index => {
    this.props.navigation.navigate('PlayQuiz', {
      index,
      type: this.state.type,
    });
  };
  render() {
    return (
      <Container>
        <Header
          iconLeft={<Icon name="arrow-round-back" style={Style.iconLeft} />}
          title="Quiz"
        />
        <Content style={Style.container}>
          {this.state.data.map((data, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => this._toDetail(data._id)}>
                <Card title={data.title} divisi="10 Soal" icon2={<Arrow />} />
              </TouchableOpacity>
            </View>
          ))}
        </Content>
      </Container>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
