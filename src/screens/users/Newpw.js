import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import color from '../../../../contains/color'


const Newpw = () => {
    return (
        <Pressable style={styles.container}>
            <Pressable style={styles.viewBack}>
                <Image style={styles.icBack}
                    source={require('../../../../../../assets/images/icBack.png')} />
            </Pressable>
            <Text style={styles.textNew}>New Password</Text>
            <Text style={styles.textCreate}>Create your new password to Login </Text>
            <Pressable>
                <TextInput placeholder="Email" style={styles.TextInput} />
                <Image style={styles.icon} source={require('../../../../../../assets/images/email.png')} />
                <Image style={styles.iconEye} source={require('../../../../../../assets/images/eye.png')} />
            </Pressable>

            <Pressable>
                <TextInput placeholder="Password" style={styles.TextInput} />
                <Image style={styles.icon} source={require('../../../../../../assets/images/password.png')} />
                <Image style={styles.iconEye} source={require('../../../../../../assets/images/eye.png')} />
            </Pressable>

            <Pressable style={styles.buttonSignIn} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Reset Password</Text>
            </Pressable>

        </Pressable>
    )
}

export default Newpw


const styles = StyleSheet.create({

    buttonSignIn: {
        backgroundColor: color.primaryColor,
        height: 56,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    TextInput: {
        width: '100%',
        height: 56,
        borderRadius: 16,
        borderColor: color.background,
        borderWidth: 1,
        backgroundColor: color.colorView,
        paddingLeft: 56,
        position: 'relative',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 16
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
    textCreate: {
        fontWeight: '700',
        marginTop: 16,
        color: color.textHint,
        textAlign: 'center',
        paddingBottom: 48
    },
    textNew: {
        fontSize: 24,
        fontWeight: '500',
        color: color.black,
        marginTop: 120,
        textAlign: 'center'
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