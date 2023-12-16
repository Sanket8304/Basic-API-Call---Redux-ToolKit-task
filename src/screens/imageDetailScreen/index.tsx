import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { reSetImageDetail } from "../../redux/features/imageDeatil-slic";

const ImageDetailScreen = () => {
  const dispatch = useAppDispatch();

  const { imageDetail } = useAppSelector((state) => state.imageDetails);

  useEffect(() => {
    return () => {
      dispatch(reSetImageDetail());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageDetail?.url }} resizeMode="cover" style={styles.deviceImage} />

      <View style={[styles.flexDirectionRow, styles.marginTop]}>
        <Text style={styles.titleText}>{"Title: "}</Text>

        <Text style={styles.text1}>{imageDetail.title}</Text>
      </View>

      <View style={styles.imageDetailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{"ImageId: "}</Text>

          <Text style={styles.text}>{imageDetail.id}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{"AlbumId: "}</Text>

          <Text style={styles.text}>{imageDetail.albumId}</Text>
        </View>
      </View>

      <View style={styles.flexDirectionRow}>
        <Text style={styles.titleText}>{"ThumbnailUrl: "}</Text>

        <Text style={styles.text1}>{imageDetail.thumbnailUrl}</Text>
      </View>

      <View style={styles.flexDirectionRow}>
        <Text style={styles.titleText}>{"ImageUrl: "}</Text>

        <Text style={styles.text1}>{imageDetail.url}</Text>
      </View>
    </View>
  );
};

export default ImageDetailScreen;
