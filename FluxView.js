/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var FluxView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={require('./flux.png')} />
          <Text style={styles.flux}>
            Flux
          </Text>
        </View>
        <Text>
          This image was loaded using
          <Text style={styles.code}>
            {' require(\'./flux.png\') '}
          </Text>
          syntax.
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    fontWeight: 'bold',
  },
  flux: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = FluxView;
