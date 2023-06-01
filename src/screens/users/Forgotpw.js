import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import color from '../../../../contains/color'

const Forgotpw = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewBack}>
                <Image style={styles.icBack}
                source={require('../../../../../../assets/images/icBack.png')}/>
            </View>
            <Text style={styles.textForgot}>Forgot Password?</Text>
            <Text style={styles.textType}>Type your email, we will send you vertification code via email </Text>
            <Pressable>
                <TextInput placeholder="Email" style={styles.TextInput} />
                <Image style={styles.icon} source={require('../../../../../../assets/images/email.png')} />
            </Pressable>

            <Pressable style={styles.buttonSignIn} >
                <Text style={styles.textSignIn}>Sign In</Text>
            </Pressable>
        </View >
    )
}

export default Forgotpw;

const styles = StyleSheet.create({
    textSignIn: {
        fontSize: 20,
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
        marginTop: 24,
    },
    icon: {
        position: 'absolute',
        top: 20,
        left: 16,
        width: 16,
        height: 16
    },
    TextInput: {
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
    textType: {
        fontWeight: '500',
        marginTop: 16,
        textAlign: 'center',
        marginBottom: 56
    },
   
    textForgot: {
        fontSize: 24,
        fontWeight: '500',
        color: color.black,
        marginTop: 160,
        textAlign: 'center', 
    },
    viewBack: {
        width: 40,
        height: 40,
        backgroundColor: color.primaryColor,
        borderRadius: 50,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: color.white
    }
})