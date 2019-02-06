/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <WebView
        source={{uri: 'https://10s.kr'}}
        style={{marginTop: 0}}
      />
    );
  }
}
