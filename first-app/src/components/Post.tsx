import { View, Text, StyleSheet } from "react-native";
import Footer from "./Footer";

interface PostProps {
    title: string;
}

const Post = ( { title }: PostProps ) => {
    return (
        <View style={{marginVertical: 15}}>
            <Text style={styles.title}>{title}</Text>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "#f1f1f1"
    }
});

export default Post;