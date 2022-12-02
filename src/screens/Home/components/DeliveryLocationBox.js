import { Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MenuIcon } from "../../../components/MenuIcon";
import Entypo from "react-native-vector-icons/Entypo";
import { brandColor } from "../../../utils/colors";

export default function DeliveryLocationBox() {
  return (
    <TouchableOpacity>
      <View
        style={{
          // minHeight: 50,
          borderRadius: 5,
          padding: 10,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <MenuIcon
              size={20}
              color={brandColor.primaryColor}
              name={"location-outline"}
            />
            <Text category="s2">Accra, Ghana</Text>
          </View>
          <Entypo name="chevron-small-down" size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
