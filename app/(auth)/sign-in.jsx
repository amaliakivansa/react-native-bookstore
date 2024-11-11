import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import FormField from '../../components/FormField';
import TopNavigation from '../../components/TopNavigation';
import { signIn } from '../../lib/firebase';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const submit = async () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      await signIn(form.email, form.password);
      router.replace('/catalog');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/bg-auth.png')}
          style={styles.image}
          resizeMode="cover"
        >
          <TopNavigation />
          <View style={styles.containerHeading}>
            <Text style={styles.textHeading}>Welcome Back</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.h1}>Sign In</Text>
            <FormField
              name="Email"
              value={form.email}
              onChangeText={(e) =>
                setForm({
                  ...form,
                  email: e,
                })
              }
              otherStyles={{ marginTop: 24 }}
            />
            <FormField
              name="Password"
              value={form.password}
              onChangeText={(e) =>
                setForm({
                  ...form,
                  password: e,
                })
              }
              otherStyles={{ marginTop: 24 }}
            />

            <View style={styles.containerButton}>
              <TouchableOpacity onPress={() => router.push('/sign-in')}>
                <Text style={styles.textSignIn}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={submit}>
                <Text style={styles.textSignUp}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
  },
  containerButton: {
    marginTop: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 24,
    fontFamily: 'SFProDisplay-Medium',
  },
  textSignIn: {
    color: '#FD4D4D',
    fontFamily: 'SFProDisplay-Medium',
  },
  textSignUp: {
    fontFamily: 'SFProDisplay-Medium',
  },
  containerHeading: {
    position: 'absolute',
    top: 100,
    width: '100%',
  },
  textHeading: {
    fontSize: 40,
    color: '#fff',
    paddingLeft: 16,
    paddingTop: 16,
    fontFamily: 'SFProDisplay-Medium',
  },
});
