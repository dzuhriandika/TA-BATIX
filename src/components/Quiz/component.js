import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text, View, Button, Card} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from '../AnimButton';
import Style from './styles';

const {width, height} = Dimensions.get('window');
let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option2',
        options: {
          option1: 'Menggambar dengan pensil',
          option2: 'Menuliskan atau menerakan malam pada kain',
          option3: 'Menggambar dengan tinta ',
        },
        question: 'Pembuatan batik dilakukan secara khusus dengan cara ____',
      },
      question2: {
        correctoption: 'option3',
        options: {
          option1: 'OPEC',
          option2: 'APEC',
          option3: 'UNESCO',
        },
        question: 'Batik ditetapkan sebagai budaya Indonesia oleh ___',
      },
      question3: {
        correctoption: 'option1',
        options: {
          option1: '2 Oktober',
          option2: '2 Desember',
          option3: '2 Januari',
        },
        question:
          'Pada tanggal ___ ditetapkan sebagai peringatan Hari Batik Nasional di Indonesia',
      },
      question4: {
        correctoption: 'option3',
        options: {
          option1: 'Batik masa kini',
          option2: 'Batik zaman dahulu',
          option3: 'Batik Tradisional dan Batik Modern',
        },
        question: 'Ciri-ciri batik dibedakan menjadi dua, yaitu ___',
      },
      question5: {
        correctoption: 'option3',
        options: {
          option1: 'Tidak memiliki corak dengan makna simbolik',
          option2: 'Corak batik terdapat variasi persegi, lingkaran, dan garis',
          option3: 'Umumnya motif batik memiliki ciri khas daerah asalnya',
        },
        question: 'Ciri-ciri batik tradisional, yaitu ___',
      },
    },
  },
};
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;

    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(function(k) {
      return jdata[k];
    });
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0,
    };
  }
  prev() {
    if (this.qno > 0) {
      this.qno--;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    } else {
      this.props.quizFinish((this.score * 100) / 5);
    }
  }
  _answer(status, ans) {
    if (status == true) {
      const count = this.state.countCheck + 1;
      this.setState({countCheck: count});
      if (ans == this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({countCheck: count});
      if (this.state.countCheck < 1 || ans == this.state.correctoption) {
        this.score += 0;
      }
    }
  }
  render() {
    let _this = this;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function(k) {
      return (
        <View key={k} style={{margin: 10}}>
          <Animbutton
            countCheck={_this.state.countCheck}
            onColor={'#FF3E71'}
            effect={'tada'}
            _onPress={status => _this._answer(status, k)}
            text={currentOptions[k]}
          />
        </View>
      );
    });

    return (
      <ScrollView
        style={{backgroundColor: 'trasparent', paddingTop: 10, padding: 30}}>
        <Card
          transparent
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}>
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={styles.welcome}>{this.state.question}</Text>
              </View>
              <View>{options}</View>
              <View style={Style.btBox}>
                <Button
                  bordered
                  onPress={() => this.prev()}
                  style={Style.buttonPrev}>
                  <Text style={Style.titleBt}>Sebelumnya</Text>
                </Button>
                <View style={{margin: 15}} />
                <Button
                  rounded
                  onPress={() => this.next()}
                  style={Style.buttonNext}>
                  <Text>Selanjutnya</Text>
                </Button>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: 'black',
    fontFamily: 'Nunito-Bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
