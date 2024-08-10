import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Post from "../components/Post";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>E os guri</Text>
        <Post title="Texto 1"/>
        <Post title="Texto 2"/>
        <Post title="Texto 3"/>
        <Post title="Texto 4"/>
        <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 34,
        backgroundColor: '#252525',
        flex: 1,
        alignItems: "center",    
        justifyContent: "space-between",  
    },

    title: {
        color: "#f1f1f1",
        fontSize: 34
    }
});

export default Home;