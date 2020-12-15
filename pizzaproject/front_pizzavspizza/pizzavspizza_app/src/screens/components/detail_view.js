import React, { useState, useEffect } from 'react';
import {View, Text, Image, FlatList } from 'react-native';
import client from './../../api/client';
import styles from './detail_styles';

const DetailView = ({ navigation, route }) => {
  const [detail, setDetail] = useState(" ");
  const { objurl } = route.params;

  const getDetail = async (url) => {
    console.log(url);
    try {
      const response = await client.get(url);
      if (!response.ok) {
        console.log(response);
        setDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail(objurl);
  }, []);

  return (
    <View style={styles.center}>
      <FlatList
        horizontal={true}
        data={detail.pizzeria_images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.pizzaImage}
              source={{
                uri: item.image,
              }}
            />
          );
        }}
      />
      <Text style={styles.title}>{detail.pizzeria_name}</Text>
      <Text style={styles.details}>{detail.street}</Text>
      <Text style={styles.details}>City: {detail.city}, {detail.state},{detail.zip_code}</Text>
      <Text style={styles.details}>{detail.website}</Text>
      <Text style={styles.details}>{detail.email}</Text>
      <Text style={styles.details}>Ph: {detail.phone_number}</Text>
      <Text style={styles.details}>{detail.description}</Text>
    </View>
  );
};

export default DetailView;