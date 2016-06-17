/**
 * MainView
 * 主视图
 */
import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 Image,
 NavigatorIOS,
 TouchableHighlight,
 ScrollView,
 StatusBar,
} from 'react-native';

import Util from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Course1 from '../component/course1';
import Course2 from '../component/course2';
import Course3 from '../component/course3';
import Course4 from '../component/course4';
import Course5 from '../component/course5';
import Course6 from '../component/course6';
import Course7 from '../component/course7';

export default class extends Component{
 constructor() {
   super();
   this.state = {
     courses:[
       { key:0, title: "View", component: Course1, isFA: false, icon: "ios-paper", size: 50, color: "#ff856c", hideNav: false, }
      ,{ key:1, title: "Text", component: Course2, isFA: false, icon: "ios-text", size: 50, color: "#90bdc1", hideNav: false, }
      ,{ key:2, title: "Image", component: Course3, isFA: false, icon: "ios-images", size: 50, color: "#2aa2ef", hideNav: false, }
      ,{ key:3, title: "InputText", component: Course4, isFA: false, icon: "ios-create", size: 50, color: "#FF9A05", hideNav: true, }
      ,{ key:4, title: "ProgressViewIOS", component: Course5, isFA: false, icon: "ios-fastforward", size: 50, color: "#00D204", hideNav: false, }
      ,{ key:5, title: "ScrollView", component: Course6, isFA: false, icon: "ios-sync", size: 50, color: "#777", hideNav: false, }
      ,{ key:6, title: "Switch&PickerIOS", component: Course7, isFA: false, icon: "ios-switch", size: 50, color: "#5e2a06", hideNav: false, }
    ]
   }
 }

 componentWillMount() {
 }

 _jumpToCourses(index){
   this.props.navigator.push({
     title: this.state.courses[index].title,
     component: this.state.courses[index].component,
     navigationBarHidden: this.state.courses[index].hideNav,
   })
 }

 render() {
   var onThis = this;
   var boxs = this.state.courses.map(function(elem, index) {
     return(
       <TouchableHighlight key={elem.key} style={[styles.touchBox, index%4==3?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToCourses(index)}>
         <View style={styles.boxContainer}>
           <Text style={styles.boxText}>Course{index+1}</Text>
           {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:<Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
         </View>
       </TouchableHighlight>
     );
   })
   return(
     <ScrollView>
       <Swiper height={150} showsButtons={false} autoplay={true}
         activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
         <TouchableHighlight onPress={()=> onThis._jumpToCourses(0)}>
           <View style={styles.slide}>
             <Image style={styles.image} source={{uri:'course1'}}></Image>
             <Text style={styles.slideText}>Course1: View</Text>
           </View>
         </TouchableHighlight>
         <TouchableHighlight onPress={()=> onThis._jumpToCourses(1)}>
           <View style={styles.slide}>
             <Image style={styles.image} source={{uri:'course2'}}></Image>
             <Text style={styles.slideText}>Course2: Text</Text>
           </View>
         </TouchableHighlight>
       </Swiper>
       <View style={styles.touchBoxContainer}>
         {boxs}
       </View>
     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
 touchBox:{
   width: Util.size.width/4-0.33334,//Util.size.width/3-0.33334,
   height:Util.size.width/4,
   backgroundColor:"#fff",
 },
 touchBoxContainer:{
   flexDirection: "row",
   flexWrap:"wrap",
   width: Util.size.width,
   borderTopWidth: Util.pixel,
   borderTopColor:"#ccc",
   borderLeftWidth: Util.pixel,
   borderLeftColor:"#ccc",
   borderRightWidth: Util.pixel,
   borderRightColor:"#ccc",
 },
 touchBox1:{
   borderBottomWidth: Util.pixel,
   borderBottomColor:"#ccc",
   borderRightWidth: Util.pixel,
   borderRightColor:"#ccc",
 },
 touchBox2:{
   borderBottomWidth: Util.pixel,
   borderBottomColor:"#ccc",
   borderLeftWidth: Util.pixel,
   borderLeftColor:"#ccc",
 },
 boxContainer:{
   alignItems:"center",
   justifyContent:"center",
   width: Util.size.width/4,
   height:Util.size.width/4,
 },
 boxIcon:{
   position:"relative",
   top:-10
 },
 boxText:{
   position:"absolute",
   bottom:10,
   width:Util.size.width/4,
   textAlign:"center",
   left: 0,
   backgroundColor:"transparent"
 },
 slide: {
   flex: 1,
   height: 150,
   justifyContent: 'center',
   alignItems: 'center',
 },
 slideText:{
   position:"absolute",
   bottom: 0,
   paddingTop:5,
   paddingBottom:5,
   backgroundColor:"rgba(255,255,255,0.5)",
   width: Util.size.width,
   textAlign:"center",
   fontSize: 12
 },
 image:{
   width: Util.size.width,
   flex: 1,
   alignSelf: 'stretch',
 },
});