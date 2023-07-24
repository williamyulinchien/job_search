import React from "react";
import { View, Text, Image,Linking,TouchableOpacity, Alert  } from "react-native";
import { useRouter } from "expo-router";
import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, location ,companyLink,companyReviews}) => {
  router = useRouter()
  const handlePress = () => {
    if (companyLink) {
      Linking.openURL(companyLink);
    } else {
      Alert.alert('Error', 'Website does not exist!');
      return
    }
  };
  const review = companyReviews
  console.log(review)
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.logoBox} onPress={handlePress}>
              <Image
                source={{
                  uri: checkImageURL(companyLogo)
                    ? companyLogo
                    : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                }}
                style={styles.logoImage}
              />
      </TouchableOpacity>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}/ </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
