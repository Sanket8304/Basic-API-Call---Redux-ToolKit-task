import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import styles from "./styles";
import { getImageList } from "../../redux/apis/home";
import { useAppSelector } from "../../redux/hooks";
import { HORIZONTAL_DIMENS } from "../../constants";
import { resetHomeStates } from "../../redux/features/home-slice";
import { setImageDetail } from "../../redux/features/imageDeatil-slic";

interface Objectany {
  [key: string]: number | string;
}

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const { imageList } = useAppSelector((state) => state.home);

  const [startAt, setStartAt] = useState<number>(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleNavigation = (image: Objectany) => {
    dispatch(setImageDetail(image));
    navigation.navigate("ImageDetailScreen");
  };

  const handleRefresh = async () => {
    await dispatch(resetHomeStates());
    handleFetchImages(true);
  };

  const handleFetchImages = (isCleanFetch: boolean) => {
    const requestBody = {
      _start: isCleanFetch ? 0 : startAt,
      _limit: 5,
    };
    dispatch(getImageList(requestBody));
    setStartAt(requestBody._start + 5);
  };

  useEffect(() => {
    dispatch(resetHomeStates());
    handleFetchImages(true);

    return () => {
      dispatch(resetHomeStates());
    };
  }, []);

  const renderItems = useCallback(
    ({ item }: any) => {
      return (
        <View style={styles.imageContainer}>
          <Text style={styles.listTitleText}>{item.title}</Text>

          <TouchableOpacity onPress={() => handleNavigation(item)} style={styles.imageContainer}>
            <View style={styles.imageTile}>
              <Image source={{ uri: item.url }} resizeMode="cover" style={styles.deviceImage} />
            </View>
          </TouchableOpacity>
        </View>
      );
    },
    [imageList]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        keyExtractor={(item) => `${item.id} + ${Math.random()}`}
        style={styles.imageFlatlistStyle}
        renderItem={renderItems}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        onEndReachedThreshold={0.2}
        onEndReached={() => handleFetchImages(false)}
      />
    </View>
  );
};

export default Home;
