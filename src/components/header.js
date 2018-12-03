import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>Marvel Universe</Text>
        </View>
    );
    
};

const styles = {
    viewStyle : {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'grey',
        shadowOffset: { width:0, height:10 },
        shadowOpacity: 0.5,
        elevation:2,
        position: 'relative' 
    },
    textStyle : {
        fontSize: 20

    }
}
export default Header;

