import { StyleSheet, Text, View, TextInput, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import color from '../../../../contains/color'

const SignUp = (props) => {
    const [hidePassword, setHidePassword] = useState(true);
    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textHello}>Create an account</Text>
             <Pressable >
                <TextInput placeholder="Password" style={styles.inputContainer} />
                <Image style={styles.icon} source={require('../../../../../../assets/images/password.png')} />
            </Pressable>

            <Pressable >
                <TextInput placeholder="Email" style={styles.inputContainer} />
                <Image style={styles.icon} source={require('../../../../../../assets/images/email.png')} />
            </Pressable>

            <Pressable>
                <TextInput placeholder="Comfirm Password" style={styles.inputContainer} />
                <Image style={styles.icon} source={require('../../../../../../assets/images/email.png')} />
                <Image style={styles.iconEye} source={require('../../../../../../assets/images/eye.png')} />
            </Pressable>

            <Text style={styles.textForgot}>Forgot Password?</Text>
            <Pressable style={styles.buttonSignIn}>
                <Text style={styles.textSignIn}>Sign In</Text>
            </Pressable>
            <Text style={styles.textOr}>Or</Text>
            <Pressable style={styles.button} >
                <Image style={styles.fbgg} source={require('../../../../../../assets/images/google.png')} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Sign In With Google</Text>
            </Pressable>
            <Pressable style={styles.button} >
                <Image style={styles.fbgg} source={require('../../../../../../assets/images/facebook.png')} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Sign In With FaceBook</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textDont} >Dont Have An Acount?  </Text>
                <Text style={{ color: color.primaryColor, fontWeight: 'bold' }} onPress={() => { console.log('Sign Up') }}>Sign Up </Text>
            </View>
        </View >
    )
}

export default SignUp;

const styles = StyleSheet.create({

    button: {
        borderWidth: 1,
        height: 56,
        width: '100%',
        borderColor: color.textHint,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    fbgg: {
        marginRight: 50,
        marginLeft: 20,
        height: 40,
        width: 40,
    },
    textOr: {
        fontSize: 16,
        fontWeight: '400',
        margin: 30,
        color: color.black,
        textAlign: 'center',
    },
    textSignIn: {
        fontSize: 16,
        fontWeight: '500',
        color: color.white
    },
    buttonSignIn: {
        backgroundColor: color.primaryColor,
        height: 56,
        width: '100%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24
    },
    textForgot: {
        marginTop: 8,
        color: color.black,
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        top: 20,
        left: 16,
        width: 16,
        height: 16
    },
    iconEye: {
      position: 'absolute',
      top: 20,
      right: 32,
  },
  icon: {
      position: 'absolute',
      top: 20,
      left: 16,
      width: 16,
      height: 16
  },
    inputContainer: {
        width: '100%',
        height: 56,
        borderRadius: 16,
        borderColor: color.background,
        borderWidth: 1,
        backgroundColor: color.colorInput,
        paddingLeft: 56,
        position: 'relative',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16
    },
    textWelcome: {
        textAlign: 'center',
        fontWeight: '500',
        justifyContent: 'center',
        marginTop: 16,
        fontSize: 16,
        marginBottom: 32
    },
    textHello: {
        fontSize: 24,
        fontWeight: 'bold',
        color: color.black,
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 48
    },
    container: {
        flex: 1,
        backgroundColor: color.white,
        padding: 24
    }
})