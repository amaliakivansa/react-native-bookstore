import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const TopNavigation = () => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="#fff"
        onPress={() => router.back()}
      />
      <MaterialCommunityIcons
        name="dots-vertical"
        size={24}
        color="#fff"
        onPress={() => console.log('Menu')}
      />
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
