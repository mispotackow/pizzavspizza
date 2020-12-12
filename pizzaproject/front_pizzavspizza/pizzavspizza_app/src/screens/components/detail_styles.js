import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: "Roboto",
    margin: 10,
    marginBottom: 5,
    color: "red",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  pizzaImage: {
    width: 400,
    height: 400,
    borderRadius: 20
  },
  details: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default styles;