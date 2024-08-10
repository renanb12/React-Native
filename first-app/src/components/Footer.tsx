const { View, Text, StyleSheet } = require("react-native");

const Footer = () => {
    return (
        <View>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: '"#f1f1f1"'
    }
});

export default Footer;