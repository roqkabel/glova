import { Layout } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

export default function ContainerWrapper({ children }) {
  return (
    <View
      style={{
        paddingHorizontal: 2,
      }}
    >
      {children}
    </View>
  );
}
