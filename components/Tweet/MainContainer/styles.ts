import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tweetHeaderNames: {
        flexDirection: 'row'
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    username: {
        marginHorizontal: 5,
        color: 'grey'
    },
    createdAt: {
        marginHorizontal: 5,
    },
    moreIcon: {
        alignSelf: 'flex-end'
    }
})

export default styles