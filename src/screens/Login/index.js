import { Divider, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { PrimaryButton } from "../../components/ButtonComponents";
import { TextInput } from "../../components/InputComponents";
import SocialButtons from "../../components/SocialButtons";
import ContainerWrapper from "../../components/utils/ContainerWrapper";
import useLoginMutations from "../../services/data/users/use-login.mutations";
import { useDispatch } from "react-redux";
import { addProfile, setLogin } from "../../app/reducers/usersReducer";
export default function LoginIndex() {
  const { mutate: login, isLoading } = useLoginMutations();
  const dispatch = useDispatch();

  // Attempt login user
  const handleSubmit = (
    email = "obed.wordpress@gmail.com",
    password = "password"
  ) => {
    login(
      {
        variables: {
          email,
          password,
        },
      },
      {
        onSuccess: () => {
          dispatch(setLogin(true));
          dispatch(
            addProfile({
              email: email,
              name: "Obed Asante",
              status: "online",
              about: "Meta verse",
            })
          );
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  return (
    <ContainerWrapper>
      <View
        style={{
          //   backgroundColor: "#e5e8f1",
          height: "100%",
          paddingTop: 10,
        }}
      >
        <View style={styles.loginWrapper}>
          <Text
            category="h6"
            style={{ textAlign: "center", marginVertical: 10, fontSize: 20 }}
          >
            Hello Again!
          </Text>
          <Text
            style={{ textAlign: "center", fontSize: 15, color: "#797b7f" }}
          >{`Welcome back you've been missed`}</Text>
        </View>
        {/* Input section */}
        <View style={styles.loginWrapper}>
          <TextInput placeholder={"Enter username"} />
          <TextInput placeholder={"Password"} />
          <TouchableOpacity>
            <Text style={{ textAlign: "right" }}>Recover password ?</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <View style={styles.loginWrapper}>
          <PrimaryButton
            text={"Sign In"}
            loading={isLoading}
            onPress={() => handleSubmit()}
          />
        </View>
        {/* Alt text */}
        <View style={styles.loginWrapper}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Divider
              style={{
                flex: 1,
              }}
            />
            <Text category="s2" style={{ marginHorizontal: 20 }}>
              Or continue with
            </Text>
            <Divider
              style={{
                flex: 1,
              }}
            />
          </View>
        </View>
        {/* Social Buttons */}
        <View style={styles.loginWrapper}>
          <SocialButtons />
        </View>
      </View>
    </ContainerWrapper>
  );
}

const styles = StyleSheet.create({
  loginWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
