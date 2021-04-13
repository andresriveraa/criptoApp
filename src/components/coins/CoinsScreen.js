import React from 'react';
import { View, FlatList, StyleSheet, Text, Pressable, ActivityIndicator } from 'react-native';
import Colors from '../../res/color'
import Http from 'bike/src/libs/http'

class CoinsScreen extends React.Component {

  state = {
    coins: [],
    loading: true    
  }

  componentDidMount = async () => {
    const responseCoins = await Http.instance.get('https://api.coinlore.net/api/tickers/')
    this.setState({ coins: responseCoins.data, loading: false })
  }

  handlePress = () => {
    console.log(this.props.navigation.navigate("CoinsDetails"));
  }

  render() {
    const { coins, loading } = this.state;

    return (
      <View style={styles.container}>
        {
          loading ?
          <ActivityIndicator color="black" size="large" />
          : null
        }
        <FlatList data={coins}
          renderItem={({ item }) => 
          <View style={styles.cardGrid}>
            <View style={styles.card}>
              <Text style={styles.name}>{item.symbol}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price_btc}</Text>
            </View>

            <View style={styles.row }>
              <Text style={styles.price}>{item.percent_change_1h}</Text>
            </View>
            
          </View>
          } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: Colors.blackPearl,
    flexDirection: 'row'
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 12,
  },
  price: {
    color: "#fff",
    fontSize: 14
  },  
  cardGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  row: {
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default CoinsScreen;