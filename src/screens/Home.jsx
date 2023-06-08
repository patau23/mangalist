import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import appStyles from "../../styles";
//

export default function HomeScreen({ navigation }) {
  return (
    <View style={[appStyles.body, styles.screenContainer]}>
      <View style={[]}>
        <Text style={[appStyles.font, styles.title]}>Popular new titles</Text>
        {/* комопонент слайдер с новыми тайтлами */}
        <Text style={[appStyles.font, styles.subtitle]}>
          relise update to: 18-11-2022
        </Text>
      </View>

      <View style={[]}>
        <Text style={[appStyles.font, styles.title]}>Popular new titles</Text>
        {/* комопонент слайдер с новыми тайтлами */}
        <Text style={[appStyles.font, styles.subtitle]}>
          relise update to: 18-11-2022
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 14,
  },
});
