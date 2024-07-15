import { Ionicons } from "@expo/vector-icons";
import { RootSiblingParent } from "react-native-root-siblings";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import Toast from "react-native-root-toast";
import * as LocalAuthentication from "expo-local-authentication";

type LocalAuthenticationResult = {
  success: boolean;
  error?: string;
  warning?: string;
};
type IconName = "finger-print" | "happy" | "eye";

export const Balance = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [authType, setAuthType] = useState<IconName>("finger-print");
  const [error, setError] = useState(false);

  useEffect(() => {
    logAuthDetails();
  }, []);

  const logAuthDetails = async () => {
    const hasHW = await LocalAuthentication.hasHardwareAsync();
    console.log({ hasHW });

    const authType =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log({ authType });
    switch (authType[0]) {
      case 1:
        setAuthType("finger-print");
        break;

      case 2:
        setAuthType("happy");
        break;

      case 3:
        setAuthType("eye");
        break;
      default:
        break;
    }
  };

  const authenticateUser = async () => {
    const authResult: LocalAuthenticationResult =
      await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate to show your balance",
      });
    console.log(authResult);

    return authResult;
  };

  const onToggle = async () => {
    console.log({ showBalance });

    await logAuthDetails();

    let msg: string = "Auth error";

    if (!showBalance) {
      const { success, error, warning } = await authenticateUser();

      console.log({ success, error, warning });

      if (success) {
        msg = "Showing balance";
        setShowBalance(true);
        setError(false);
      } else if (error) {
        setError(true);
        msg = `${warning}`;
      }
    } else {
      msg = "Balance hidden";
      setShowBalance(false);
    }

    Toast.show(msg, {
      duration: Toast.durations.SHORT,
    });
  };

  return (
    <RootSiblingParent>
      <View style={styles.balancePage}>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Wallet</Text>
          {showBalance ? (
            <Text style={styles.balanceText}>$5, 100.00</Text>
          ) : (
            <View style={styles.balanceTextSkeleton}>
              {Array(5)
                .fill(null)
                .map((_, _i) => (
                  <View
                    key={`${_i}-dot`}
                    style={styles.balanceTextSkeletonDot}
                  />
                ))}
            </View>
          )}
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Withdraw</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.depositButton]}>
              <Text style={styles.buttonText}>Deposit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={[
              styles.fingerprintButton,
              error && { borderColor: "red" },
              showBalance && { borderColor: "limegreen" },
            ]}
            onPress={() => onToggle()}
          >
            <View>
              <Ionicons
                name={showBalance ? "lock-open" : `${authType}`}
                size={64}
                style={
                  error
                    ? { color: "red" }
                    : showBalance && { color: "limegreen" }
                }
              />
            </View>
          </TouchableOpacity>
          <Text style={error && { color: "red" }}>
            {!error
              ? showBalance
                ? "Hide balance"
                : "Show balance"
              : "Try again"}
          </Text>
        </View>
      </View>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  balancePage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  balanceContainer: {
    backgroundColor: "#3D3F47",
    padding: 20,
    borderRadius: 10,
    width: "100%",
  },
  balanceTitle: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  balanceText: {
    fontSize: 50,
    color: "#FFF",
  },
  balanceTextSkeleton: {
    fontSize: 50,
    width: "100%",
    height: 50,
    flexDirection: "row", // Arrange dots horizontally
    justifyContent: "space-around", // Distribute dots evenly
    alignItems: "center",
    marginVertical: 5,
  },

  balanceTextSkeletonDot: {
    width: 40, // Dot width
    height: 40, // Dot height
    borderRadius: 50, // Round corners for circular dots
    backgroundColor: "#ccc", // Light gray for dots
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  depositButton: {
    backgroundColor: "#2ECC71",
  },
  fingerprintButton: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderBlockColor: "black",
    borderWidth: 2,
  },
});
