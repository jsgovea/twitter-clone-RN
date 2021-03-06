import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import Tweet from '../components/Tweet'
import tweets from "../data/tweets";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Tweet tweet={tweets[0]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
