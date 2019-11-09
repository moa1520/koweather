import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "da6eaebf-a2a0-46c6-96bf-d883fae0fc12";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: { weather }
    } = await axios.get(
      `https://apis.openapi.sk.com/weather/current/minutely?lat=${latitude}&lon=${longitude}&appKey=${API_KEY}`
    );
    this.setState({
      isLoading: false,
      condition: weather.minutely[0].sky.code,
      conditionName: weather.minutely[0].sky.name,
      temp: weather.minutely[0].temperature.tc
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // Send to API and get weather
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, conditionName } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        conditionName={conditionName}
      />
    );
  }
}
