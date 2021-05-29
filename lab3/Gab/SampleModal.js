import React from 'react';
import {View,
Text,
ScrollView,
Image,
Button, 
Modal, 
StyleSheet} from 'react-native'

const SampleModal = props => {
 return (
   <Modal visible={props.visible}>
      <View styel={styles.container}>
          <ScrollView>
              <Image style={styles.pic}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT199kCgmRqpBqqNmZu28TGYkZLdqn1Fo3AtA&usqp=CAU'}}/>
                        <Text style={styles.text}> 
                            Vision {'\n\n'}
                            The premier university in historic Cavite recognized for excellence in the development of globally competitive and morally upright individuals. {'\n\n'}
                                Mission {'\n\n'}
                                Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction and responsive research and development activities. It shall produce professional, skilled and morally upright individuals for global competitiveness. {'\n\n'}
                                Broken all the pieces I've been shaping lately
                                Focused on the things that didn't make no sense
                                Guess that growing up was never meant to be easy
                                Yeah, I got used to doing everything sideways
                                Didn't really care about how everyone felt
                                Hiding my emotions down in different ashtrays {'\n\n'}
                                Oh, but what is lost ain't gone
                                No, you can't just let go
                                'Cause it's a part of you that will make you strong
                                Embrace your flaws {'\n\n'}
                                I'm not gonna fight back what I've become
                                Yeah, I've got bruises where I came from
                                But I wouldn't change if I could restart
                                I ain't gonna hide these beautiful scars
                                I've been going way too hard on myself
                                Guess that it's the reason that I'm feeling like hell
                                But I wouldn't change if I could restart
                                I ain't gonna hide these beautiful scars
                                {'\n\n'}
                                I went down a road that only got me nowhere
                                I've seen every corner, every inch of this place
                                Being all alone it really got me thinking
                                Maybe overthinking
                                {'\n\n'}
                                That what is lost ain't gone
                                No, you can't just let go
                                'Cause it's a part of you that will make you strong
                                Embrace your flaws
                                {'\n\n'}
                                I'm not gonna fight back what I've become
                                Yeah, I've got bruises where I came from
                                But I wouldn't change if I could restart
                                I ain't gonna hide these beautiful scars
                                I've been going way too hard on myself
                                Guess that it's the reason that I'm feeling like hell
                                But I wouldn't change if I could restart
                                I ain't gonna hide these beautiful scars
                                {'\n\n'}
                                Hide these beautiful scars
                                Hide these beautiful scars
                                {'\n\n'}
                                I'm not gonna fight back what I've become
                                Yeah, I've got bruises where I came from
                                But I wouldn't change if I could restart
                                I ain't gonna hide these beautiful scars
                                I've been going way too hard on myself
                                Guess that it's the reason that I'm feeling like hell
                                But I wouldn't change if I could restart
                                I ain't gonna hide these beautiful scars
                                {'\n\n'}
                                Hide these
                                I ain't gonna hide these
                                Hide these
                                Hide these beautiful scars
                                No
                                    </Text>
                                        <View style={styles.button}>
                                             <Button  title="Close" onPress={props.onClose}/>
                                                 </View>
                                                     </ScrollView>
                                                        </View>
                                                          </Modal>
                                                           );
                                                           }
                                                           const styles= StyleSheet.create({
                                                            container:{
                                                              flex: 1,
                                                                alignItems: 'center',
                                                                  justifyConteny: 'center'
                                                                   }, 
                                                                    text: {
                                                                      textAlign: 'justify'
                                                                       },
                                                                        button: {
                                                                          flex:1 , 
                                                                            justifyContent: 'flex-end',
                                                                              alignItems: 'center'
                                                                               },
                                                                                pic:{
                                                                                 height: 100,
                                                                                  width: 100,
                                                                                   marginLeft: 80,
                                                                                    marginRight:80,
                                                                                     alignItems:'center'
                                                                                      
                                                                                       }
                                                                                       });
                                                                                       export default SampleModal;