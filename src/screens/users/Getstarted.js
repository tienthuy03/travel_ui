import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import color from '../../../../contains/color'
const Getstarted = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLets}>Lets Get Started</Text>
            <Text style={styles.textFind}>Find the right ticket and what you want only in myticket  </Text>
            <Pressable>
                <TextInput placeholder="Sign Up Email" style={styles.TextInput} />
                <Image style={styles.icon} source={require('../../../../../../assets/images/email.png')} />
            </Pressable>
            <Text style={styles.textOr}>Or Use Instant Sign Up</Text>
            <Pressable style={styles.button} >
                <Image style={styles.fbgg} source={require('../../../../../../assets/images/google.png')} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Sign In With Google</Text>
            </Pressable>
            <Pressable style={styles.button} >
                <Image style={styles.fbgg} source={require('../../../../../../assets/images/facebook.png')} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Sign In With FaceBook</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textAready}>Already Have An Acount?  </Text>
                <Text style={{ color: color.primaryColor, fontWeight: 'bold' }} onPress={() => { console.log('Sign Up') }}>Sign In </Text>
            </View>
        </View >
    )
}

export default Getstarted


const styles = StyleSheet.create({
    textAready: {
        fontSize: 14,
        fontWeight: '400',
        color: color.black
    },
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
        margin: 30,
        marginTop: 8,
        fontWeight: '500',
        color: color.textHint,
        textAlign: 'center'
    },
    icon: {
        position: 'absolute',
        top: 68,
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
        backgroundColor: color.colorView,
        paddingLeft: 48,
        position: 'relative',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16,
        marginTop: 48
    },
    textFind: {
        fontSize: 14,
        fontWeight: '500',
        color: color.textHint,
        width: 260,
        textAlign: 'center',
        marginTop: 8,
        justifyContent: 'center',
        marginLeft: 48
    },
    textLets: {
        fontSize: 32,
        fontWeight: '500',
        color: color.black,
        marginTop: 120,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: color.white,
        padding: 24
    }
})