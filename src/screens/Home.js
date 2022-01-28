import { Button, StyleSheet, Text, View } from 'react-native'

export const Home = ({ navigation }) => {
  const goToPage = (screen) => {
    return navigation.navigate(screen)
  }
  return (
    <View style={styles.container}>
      <Text>Home🏠</Text>
      <Button onPress={() => goToPage('Profile')} title="Profile" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
