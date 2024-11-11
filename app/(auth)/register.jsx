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
import { signUp } from '../../lib/firebase';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: null,
    password: '',
  });

  const submit = async () => {
    if (
      form.name === '' ||
      form.email === '' ||
      form.password === '' ||
      form.phone === ''
    ) {
      Alert.alert('Error', 'Please fill in all fields');
    }
    await signUp(form.email, form.password, form.name, form.phone);
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
            <Text style={styles.textHeading}>Let's Start</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.h1}>Sign Up</Text>
            <FormField
              name="Name"
              value={form.name}
              onChangeText={(e) =>
                setForm({
                  ...form,
                  name: e,
                })
              }
              otherStyles={{ marginTop: 24 }}
            />
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
              name="Phone Number"
              value={form.phone}
              onChangeText={(e) =>
                setForm({
                  ...form,
                  phone: e,
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
                <Text style={styles.textSignIn}>Already have an account? </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={submit}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;

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
