import React, {useState} from 'react'; // import useState hook
import {
  View,  //to create container elements - like div elements in web dev
  Text,  //to display texts 
  ScrollView,  //to enable scrolling for long lists
  Image, //to display images
  TouchableOpacity, //to create fading effect when certain buttons are pressed such as order button
  TextInput, //to allow users to key in data... such as searching for restaurants etc
  FlatList, //to display the scrolling list 
} from 'react-native';
import {restaurants, fonts, COLOURS} from '../database/items'; //importing variables and data stored in the items.js file
import Material from 'react-native-vector-icons/MaterialIcons'; //for vector icons
import Ionicons from 'react-native-vector-icons/Ionicons'; //for importing icons from ionicons component
import FontAwesome from 'react-native-vector-icons/FontAwesome5'; //link for fontawesome5 for fonts
import Entypo from 'react-native-vector-icons/Entypo'; //also for third party icons
import AntDesign from 'react-native-vector-icons/AntDesign'; //for icons and design components



const Home = ({navigation}) => {
  const [currentSelected, setCurrentSelected] = useState([0]);   //home function used for navigation with useState hook.. currentSel set at 0 and updated using setCurrentSel

  const renderrestaurants = ({item, index}) => {    //to render list of restaurants 
    return (
      <TouchableOpacity                                //When the TouchableOpacity is pressed, the setCurrentSelected function is called with the index value, 
        activeOpacity={0.9}                            //which updates the state to reflect the currently selected restaurant.
        onPress={() => setCurrentSelected(index)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,   //design for restaurant logo component which is based on the index of currentSelected
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={{width: 60, height: 60}}>
            <Image
              source={item.image}
              style={{
                width: '100%',                        //design for restaurant logo 
                height: '100%',
                resizeMode: 'center',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLOURS.black,
              fontWeight: '600',                       //design for the restaurant name on logo component
            }}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.accentRed,    //design for circle on arrow icon on restaurant logo component which is also based on the index of currentSelected
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-right"
              style={{                                                           //design for the arrow icon on restaurant logo component which is based on the index of currentSelected
                fontSize: 12,
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (data, index) => {     //function to render details of restaurants 
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: '100%',                     //design for restaurant food when pressed
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.push('details', {     //onPress event handler to push restaurant details to the details page for specific item when clicked
            name: data.name,
            price: data.price,
            image: data.image,
            delivery: data.delivery,
            navigation: navigation,
          })
        }>
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: 'relative',                     //design for restaurant details 
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginBottom: 50}}>
            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: 'bold',                   //design for the name of the restaurant food items
                paddingTop: 10,
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,                 //design for the price of the restaurant food items
                opacity: 0.5,
              }}>
              GMD {data.price}
            </Text>
          </View>
          <View style={{width: 150, height: 150, marginRight: -45}}>
            <Image
              source={data.image}
              style={{                                //design for the image of the restaurant food items
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 85,
                height: 50,
                backgroundColor: COLOURS.accent,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,                     //design for the plus (+) icon on foods for users to add the food item to their cart
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="plus"
                style={{fontSize: 18, color: COLOURS.black}}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',                                   
        height: '100%',
      }}> 
      <ScrollView showsVerticalScrollIndicator={false}>     
        <View
          style={{
            width: '100%',  
            height: '100%',
            backgroundColor: COLOURS.white,         //disabling the vertical scrolling indicator and design for the main page
            position: 'relative',
          }}>
       
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: COLOURS.accent,
              padding: 20,                           //design for top screen with profile photo and icons bar (notifications, cart, and profile)
              paddingTop: 50,
              height: 95
            }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
              }}>
              <Image
                source={require('../database/images/profile.png')}
                style={{
                  width: '100%',
                  height: '100%',                      //design for profile photo on top left of the screen
                  resizeMode: 'contain',
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>
            <View
            style={{
              flexDirection: 'row',
              //justifyContent: 'space-between'
            }}>
            <TouchableOpacity>
              <Material
                name="notifications"                    //notifications icon imported from the material component library
                style={{                         
                  fontSize: 28,
                  color: COLOURS.black,
                  paddingRight: 15
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Material
                name="add-shopping-cart"               //add to cart icon imported from the material component library
                style={{
                  fontSize: 28,
                  color: COLOURS.black,
                  paddingRight: 15
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Material
                name="person"                          //profile icon imported from the material component library
                style={{
                  fontSize: 28,
                  color: COLOURS.black,
                }}
              />
            </TouchableOpacity>
          </View>
            </View>
            
          <View style={{padding: 20}}>
            
            <Text
              style={{
                fontSize: 40,
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 1,                   //Foodjoint design on top left of the page
                fontFamily: fonts.arial
              }}>
              Foodjoint
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name="search"
              style={{fontSize: 20, color: COLOURS.black, opacity: 0.8}}    //search icon imported from the ionicons component library
            />
            <TextInput
              placeholder="Search your fav restaurants here..."
              style={{
                color: COLOURS.black,
                fontSize: 16,
                paddingVertical: 5,
                borderBottomWidth: 1,                         //design for search text input to search for foods / restaurants
                borderBottomColor: COLOURS.black + 20,
                width: '90%',
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 30,
              fontWeight: '700',
              color: COLOURS.black,                          //design for "Top Restaurant Picks"
              letterSpacing: 1,
            }}>
            Top Restaurant Picks
          </Text>
          <FlatList
            horizontal={true}
            data={restaurants}
            renderItem={renderrestaurants}                 //creating a FlatList component that displays the horizontal list of restaurants 
            showsHorizontalScrollIndicator={false}         //using the data in the restaurants array and the renderrestaurants function to render each item in the list.
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,                                //design for "Popular"
              fontWeight: '700',
              color: COLOURS.black,
            }}>
            Popular
          </Text>
          {restaurants[currentSelected].details.map(renderItems)}   
          <TouchableOpacity                                       //The "map" method is used to iterate the "details" array for each of the restaurants and render each item in the list.
            style={{
              margin: 30,
              justifyContent: 'center',                
              alignItems: 'center',
              opacity: 0.5,
            }}>
            <Text
              style={{
                fontSize: 16,                                   //design for "End of Page"
                color: COLOURS.black,
                borderBottomWidth: 1,
                borderBottomColor: COLOURS.black,
              }}>
              End of Page
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
