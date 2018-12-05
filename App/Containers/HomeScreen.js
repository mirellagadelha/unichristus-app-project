import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Thumbnail,
  Button,
  Left,
  Body,
} from 'native-base';
import styles from './Styles/HomeScreenStyles';
import ServiceNews from '../Services/ServiceNews';

export default class HomeScreen extends Component {
  async componentDidMount() {
    ServiceNews.getDataFromAPIAndSave();
    const teste = await ServiceNews.getDataFromDB();
    console.log(teste);
  }
  vou pra aula oh amor, queria nao ): ta fznd oq?
  render() {
    return (
      <Container>
        <Content>
          <Card style={styles.cardContent}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../Images/news.png')} />
                <Body>
                  <Text>Lorem ipsum dolor sit amet</Text>
                  <Text note>5 de Novembro, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image style={styles.imageLogo} source={require('../Images/news.png')} />
                <Text style={styles.textBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  {' '}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="ios-heart" style={{ color: '#ED4A6A' }} />
                  <Text style={styles.iconLike}>245</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={styles.cardContent}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../Images/news.png')} />
                <Body>
                  <Text>Lorem ipsum olor sit amet</Text>
                  <Text note>5 de Novembro, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image style={styles.imageLogo} source={require('../Images/news.png')} />
                <Text style={styles.textBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  {' '}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="ios-heart" style={{ color: '#ED4A6A' }} />
                  <Text style={styles.iconLike}>306</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
