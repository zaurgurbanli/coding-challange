import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TransactionScreen, SingleTransactionScreen } from "../screens";
const { Navigator, Screen } = createStackNavigator();

export const TransactionScreenStack = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="TransactionScreen" component={TransactionScreen} options={{ headerShown: false }} />
        <Screen name="SingleTransactionScreen" component={SingleTransactionScreen} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
};
