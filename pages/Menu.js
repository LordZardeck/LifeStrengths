import React, {Component} from 'react';
import {View, Text, Image, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;


const MenuButton = (props) => (
    <Touchable style={{width: '100%', height: 60}} onPress={() => {
    }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{
                width: 40,
                height: 40,
                margin: 10,
                marginRight: 20,
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                {props.children ? props.children :
                    (<MaterialCommunityIcons name={props.iconName}
                                             style={{color: props.iconColor ? props.iconColor : '#000'}} size={38}/>)}
            </View>
            <View style={{flex: 1, alignContent: 'center'}}>
                <Text style={{lineHeight: 60, fontSize: 16}}>{props.title}</Text>
            </View>
        </View>
    </Touchable>
);

export default Menu = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#EEE'}}>
            <View style={{backgroundColor: '#00BCD4', height: 170, padding: 20, paddingTop: 30, width: '100%'}}>
                <Image style={{
                    width: 64,
                    height: 64,
                    borderRadius: 64 / 2,
                    marginBottom: 30
                }}
                       source={{uri: 'https://picsum.photos/256/256.jpg?random'}}/>
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Yolanda Thorton</Text>
            </View>
            <MenuButton title='I Need Help' iconName='alert-decagram' iconColor='red'/>
            <MenuButton title='Profile' iconName='account'/>
            <MenuButton title='Wish List'>
                <SimpleLineIcons name='magic-wand' style={{marginLeft: 5}} size={30}/>
            </MenuButton>
            <MenuButton title='Settings' iconName='settings'/>
            <MenuButton title='Log Out'>
                <MaterialCommunityIcons name='logout' style={{marginLeft: 5}} size={38}/>
            </MenuButton>
        </View>
    );
};