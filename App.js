import React, { Component } from 'react'
import { AppRegistry, Text } from 'react-native';
import { DefaultTheme, BottomNavigation, Provider as PaperProvider } from 'react-native-paper'
import Games from "./Components/Games"

const SettingsRoute = () => <Text>Asetukset</Text>

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red'
  }
}

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'games', title: 'Ottelut', icon: 'list' },
      { key: 'settings', title: 'Asetukset', icon: 'settings' }
    ],
  }

  _handleIndexChange = index => this.setState({ index })

  _renderScene = BottomNavigation.SceneMap({
    games: Games,
    settings: SettingsRoute
  })

  render() {
    return (
      <PaperProvider theme={theme}>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </PaperProvider>
    )
  }
}

AppRegistry.registerComponent('app', () => App)
