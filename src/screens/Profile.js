import { Button, StyleSheet, Text, View } from 'react-native'

export const Profile = ({ navigation }) => {
  const goToPage = (screen) => {
    return navigation.navigate(screen)
  }
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={() => goToPage('Home')} title="home" />
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
