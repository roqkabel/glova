import { useNavigation } from "@react-navigation/native";
import { Avatar, Divider, Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { SCREEN_USER_PROFILE } from "../utils/screens-path";
import { MenuIcon } from "./MenuIcon";
import { useSelector, useDispatch } from "react-redux";
import { addProfile, setLogin } from "../app/reducers/usersReducer";
import authService from "../services/auth.service";

export default function SidebarMenu() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state);

  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(addProfile(null));
    authService.signout();
  };

  let menuList = [
    {
      title: "My Profile",
      icon: <MenuIcon name="information-circle-outline" />,
      action: () => navigation.navigate(SCREEN_USER_PROFILE),
    },
    {
      title: "My Orders",
      icon: <MenuIcon name="basket-outline" />,
    },
    {
      title: "Promocodes",
      icon: <MenuIcon name="pricetags-outline" />,
    },
    {
      title: "F.A.Q",
      icon: <MenuIcon name="ios-help-circle-outline" />,
    },
    {
      title: "Notifications",
      icon: <MenuIcon name="mail-unread-outline" />,
    },
    {
      title: "Delete my account",
      icon: <MenuIcon name="trash-bin-outline" />,
    },
    {
      title: "Logout",
      icon: <MenuIcon name="ios-exit-outline" />,
      action: () => handleLogout(),
    },
  ];

  return (
    <View style={{ height: "100%", padding: 10, paddingTop: 40 }}>
      <View style={{ flexDirection: "row" }}>
        <Avatar
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/D4D35AQErIlL_gTBFsw/profile-framedphoto-shrink_100_100/0/1668153591979?e=1670529600&v=beta&t=U-r1GE7AsapZFLXUFdbT8z69vK3RVAE-CYYtKVKHOeY",
          }}
          size="large"
          style={{
            marginRight: 10,
          }}
        />
        <View>
          <Text category="h6">{user?.profile?.name}</Text>
          <Text category="c1" status="">
            {user?.profile?.status}
          </Text>
        </View>
      </View>
      <Divider style={{ marginVertical: 10 }} />
      <View>
        {menuList.map((menu, index) => {
          return (
            <TouchableOpacity
              onPress={() => (menu?.action ? menu.action() : null)}
              key={index}
            >
              <View
                style={{
                  marginVertical: 5,
                  padding: 10,
                  borderRadius: 5,
                  //   height: 50,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {menu?.icon}
                  <Text category="s2" style={{ fontSize: 16, marginLeft: 10 }}>
                    {menu?.title}
                  </Text>
                </View>
                <Entypo name="chevron-small-right" size={20} />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
