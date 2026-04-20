import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TestTaskScreen } from './src/screens/TestTaskScreen';
import { colors } from './src/tokens';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.background.app} />
      <SafeAreaView style={styles.container}>
        <TestTaskScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.app,
    flex: 1,
  },
});

export default App;
