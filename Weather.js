import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  SKY_A01: {
    iconName: "weather-sunny",
    gradient: ["#EDE574", "#E1F5C4"]
  },
  SKY_A02: {
    iconName: "weather-partlycloudy",
    gradient: ["#134E5E", "#71B280"]
  },
  SKY_A03: {
    iconName: "weather-cloudy",
    gradient: ["#16222A", "#3A6073"]
  },
  SKY_A04: {
    iconName: "weather-rainy",
    gradient: ["#348F50", "#56B4D3"]
  },
  SKY_A05: {
    iconName: "weather-snowy",
    gradient: ["#8e9eab", "#eef2f3"]
  },
  SKY_A06: {
    iconName: "weather-snowy-rainy",
    gradient: ["#E6DADA", "#274046"]
  },
  SKY_A07: {
    iconName: "weather-fog",
    gradient: ["#B993D6", "#8CA6DB"]
  },
  SKY_A08: {
    iconName: "weather-rainy",
    gradient: ["#348F50", "#56B4D3"]
  },
  SKY_A09: {
    iconName: "weather-snowy",
    gradient: ["#8e9eab", "#eef2f3"]
  },
  SKY_A10: {
    iconName: "weather-snowy-rainy",
    gradient: ["#E6DADA", "#274046"]
  },
  SKY_A11: {
    iconName: "weather-lightning",
    gradient: ["#3a6186", "#89253e"]
  },
  SKY_A12: {
    iconName: "weather-weather-lightning-rainy",
    gradient: ["#bdc3c7", "#2c3e50"]
  },
  SKY_A13: {
    iconName: "weather-weather-lightning-rainy",
    gradient: ["#bdc3c7", "#2c3e50"]
  },
  SKY_A14: {
    iconName: "weather-weather-lightning-rainy",
    gradient: ["#bdc3c7", "#2c3e50"]
  }
};

export default Weather = ({ temp, condition, conditionName }) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <Text
        style={{
          backgroundColor: "transparent",
          fontSize: 15,
          color: "#fff"
        }}
      >
        Sign in with Facebook
      </Text>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={106}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.sky}>{conditionName}</Text>
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  conditionName: PropTypes.string.isRequired,
  condition: PropTypes.oneOf([
    "SKY_A01",
    "SKY_A02",
    "SKY_A03",
    "SKY_A04",
    "SKY_A05",
    "SKY_A06",
    "SKY_A07",
    "SKY_A08",
    "SKY_A09",
    "SKY_A10",
    "SKY_A11",
    "SKY_A12",
    "SKY_A13",
    "SKY_A14"
  ]).isRequired
};

// 하늘상태 코드명
// SKY_A01:맑음,
// SKY_A02구름조금,
// SKY_A03:구름많음,
// SKY_A04:구름많고 비,
// SKY_A05:구름많고 눈,
// SKY_A06:구름많고 비 또는 눈,
// SKY_A07:흐림,
// SKY_A08:흐리고 비,
// SKY_A09:흐리고 눈,
// SKY_A10:흐리고 비 또는 눈,
// SKY_A11 : 흐리고 낙뢰
// SKY_A12:뇌우/비,
// SKY_A13:뇌우/눈,
// SKY_A14:뇌우/비 또는 눈

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  sky: {
    fontSize: 36,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
