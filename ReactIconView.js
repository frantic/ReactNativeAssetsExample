/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  NativeModules,
} = React;

// Don't use this module in your code
var resolveAssetSource = require('resolveAssetSource');

var FluxView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./react_icon.png')} />
        <Text>
          This image was loaded using
          <Text style={styles.bold}>
            {'\nrequire(\'./react_icon.png\')\n'}
          </Text>
          syntax.{'\n\n'}
          <Text style={styles.bold}>Plaform</Text>: {Platform.OS}
          {'\n'}
          <Text style={styles.bold}>Loaded from:</Text> {NativeModules.SourceCode.scriptURL}
          {'\n'}
          <Text style={styles.bold}>Resolved to: </Text>
          {JSON.stringify(resolveAssetSource(require('./react_icon.png')))}
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
    backgroundColor: '#F5FCFF',
  },
  image: {
    alignSelf: 'center',
    margin: 10,
    // Note: there is no explicit width/height, it's inferred from
    // actual file name and content
  },
  bold: {
    fontWeight: 'bold',
  },
});

module.exports = FluxView;
