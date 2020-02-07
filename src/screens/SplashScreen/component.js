import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import IMAGES from '../../config/image';

export default class Login extends Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={IMAGES.appLogo}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>
    );
  }
}
