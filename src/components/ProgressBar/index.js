import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ProgressBar as PaperProgressBar, Colors } from "react-native-paper";

class ProgressBar extends Component {
  render() {
    const {
      backgroundColor,
      color,
      currentValue,
      maxValue,
      _height,
    } = this.props;

    if (maxValue <= 0) {
      var x = 1;
    } else {
      var x = maxValue;
    }
    return (
      <PaperProgressBar
        progress={currentValue / x}
        color={color}
        backgroundColor={backgroundColor}
        style={{ height: _height, backgroundColor }}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProgressBar;
