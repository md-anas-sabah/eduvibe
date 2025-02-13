import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect } from "expo-router";

export default function index() {
  const [loggedInUser, setLoggedInUser] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const subscription = async () => {
      const token = SecureStore.getItem("token");
      setLoggedInUser(token ? true : false);
      setLoading(false);
    };

    subscription();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? "/(routes)/onboarding" : "/(tabs)"} />
      )}
    </>
  );
}
