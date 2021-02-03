import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

  const ReviewsData = [
    {
      id: "1",
      name: "Susan Smith",
      job: "Web Developer",
      img: {
        uri:  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      },
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: "2",
      name: "Anna Johnson",
      job: "Web Designer",
      img: {
        uri: 
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      },
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: "3",
      name: "Peter Jones",
      job: "Intern",
      img: {
        uri: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      },
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: "4",
      name: "Bill Anderson",
      job: "The Boss",
      img: {
        uri: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      },
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const Item = ({ name, job, text }) => (
  <>
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.job}>{job}</Text>
      <Text style={styles.title}>{text}</Text>
    </View>
  </>
);

const ReviewList = () => {
  const renderReviews= ({ item }) => (
    <>
      <Image
          style={styles.image}
          source={item.img}
        />
        <Text style={styles.author}>{item.name}</Text>
        <Text style={styles.job}>{item.job}</Text>
        <Text style={styles.title}>{item.text}</Text>
    </>
  );

  return (
    <>
    <FlatList
        data={ReviewsData}
        renderItem={renderReviews}
        keyExtractor={item => item.id}
      />
    </> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  item: {
    padding: 5,
  },
  title: {
    fontSize: 25,
    marginBottom: 10
  },
  author: {
    fontSize: 50,
  },

  job: {
    marginBottom: 30,
    textTransform: 'uppercase',
    color: "#00ffff",
    fontSize: 30
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 50
  },
});

export default ReviewList;