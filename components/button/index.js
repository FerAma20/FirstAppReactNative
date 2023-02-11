import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

class Button extends Component {

    render() {
        const {label, action} = this.props;
        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={action}>

                <Text style={styles.btnText}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

Button.PropTypes = {
    label: PropTypes.string,
    action: PropTypes.func
}

const styles = StyleSheet.create({

    btn: {
        width: 55,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c8d6e5',
        borderRadius: 25
    },
    btnText: {
        fontSize: 18,
        color: '#8395a7',
        fontWeight: 'bold'
    }

});

export default Button;