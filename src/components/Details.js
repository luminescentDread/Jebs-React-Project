import React from 'react';
import {
 View,  //to create container elements - like div elements in web dev
 Text,  //to display texts 
 TouchableOpacity, //to create fading effect when certain buttons are pressed such as order button
 Image, //to display images
} from 'react-native';
import {COLOURS} from '../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; //link for fontawesome5 for fonts
import Entypo from 'react-native-vector-icons/Entypo'; //also for third party icons
import AntDesign from 'react-native-vector-icons/AntDesign'; //for icons and design components

const Details = ({route, navigation}) => {
  const {                                  //the details func component uses object destructuring to extract the food details from the route.params object
    name,
    price,
    image,
    delivery,
  } = route.params;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,     //design for the main details page when clicked
        position: 'relative',
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',  //design for the top section of the details screen
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLOURS.lightGray,  //design for the back button on top left of the screen 
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="angle-left"
            style={{                         //left arrow icon imported using the FontAwesome library
              fontSize: 16,
              color: COLOURS.black,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: COLOURS.accent,  //design for the favorite icon on the top right of the screen 
            justifyContent: 'center',
            alignItems: 'center',             //star icon imported using the React UI library
          }}>
          <AntDesign name="star" style={{fontSize: 15, color: COLOURS.white}}/> 
        </View> 
      </View>
      <Text
        style={{
          fontSize: 38,
          color: COLOURS.black,
          fontWeight: '800',
          paddingHorizontal: 20,              //design for the name of the food item 
          maxWidth: 310,
        }}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',                //design for the price section of the food item 
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: COLOURS.accentRed,
            fontWeight: '900',                 //design for the currency section of the price for the food item 
            paddingRight: 5,
            paddingBottom: 8,
          }}>
          GMD
        </Text>
        <Text
          style={{
            fontSize: 38,
            color: COLOURS.accentRed,         //design for the actual price in digits for the food item
            fontWeight: '900',
          }}>
          {price}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          maxHeight: 300,
          width: '100%',                      //design for the food details and the image
         // alignItems: 'center',
        }}>
        <View 
        style={{paddingHorizontal: 20}}
        >
          <View style={{paddingVertical: 20, paddingTop: 30}}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,        //design for "Delivery"
                opacity: 0.5,
              }}>
              Delivery
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '600',           //design for actual delivery time (in min)
              }}>
              {delivery} min
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 380,                     //design for the image of the food item
            height: 380,
          }}>
          <Image
            source={image}
            style={{
              width: '80%',                 //design for the actual image of the food  
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 0,                      //design for "Place an Order"
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}  //go back one single page to the main menu when the "Place an Order" is pressed
          style={{
            width: '90%',
            height: 80,
            backgroundColor: COLOURS.accent,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,             //design for yellow banner which is placed on "Place your order"
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: COLOURS.black,             //design for "Place your order"
              letterSpacing: 1,
              marginRight: 10,
            }}>
            Place on Order
          </Text>
          <Entypo
            name="chevron-right"
            style={{fontSize: 16, color: COLOURS.black}}   //design for right arrow imported from Entypo icon library
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
