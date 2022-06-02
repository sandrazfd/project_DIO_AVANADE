
import { StyleSheet, Text, View,SafeAreaView,
  StatusBar, Image, Pressable,Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageGithub = 'https://avatars.githubusercontent.com/u/56775340?v=4';
const urlToMyGithub = 'https://github.com/sandrazfd';

export default function App() {
  const handlePressGoToGithub= async ()=>{
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      console.log('link aprovado');
      console.log('abrindo o link ....')
      await Linking.openURL(urlToMyGithub)
    }
  }
  return (
<SafeAreaView style={styles.container}>
<StatusBar  barStyle={"light-content"} backgroundColor= {colorGithub} />
    
<View style={styles.content}>
  <Image 
  accessibilityLabel='foto de uma mulher branca sorrindo' 
  style={styles.avatar} 
  source= {{uri:imageGithub}}/>
  <Text accessibilityLabel='Nome Sandra Santos' 
  style= {[styles.defaultText,styles.name]}>Sandra Santos</Text>
  <Text accessibilityLabel='Nickname sandrazfd' 
  style= {[styles.defaultText,styles.nickName]}>sandrazfd</Text>
  <Text accessibilityLabel='estudante de analise e desenvolvimento de sistemas' 
  style= {[styles.defaultText,styles.description]}>Sou estudante de Analise Desenvolvimento de Sistemas.</Text>
      </View> 
      <Pressable onPress={handlePressGoToGithub}>
        <View style={styles.button}>
          <Text style={[styles.defaultText,styles.textButton]}> Open in Github</Text>
        </View> 
      </Pressable>
     
</SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {// por padrão o container é column
    flex: 1, // expandir para tela cheia
    backgroundColor: colorGithub,
    justifyContent: 'center',
    alignItems:'center',
    //flexDirection: 'row'
   
  },
    avatar:{
    width:200,
    height:200,
    borderRadius: 100,
    borderColor:'white',
    borderWidth:2,
  },
  content:{
    alignItems:'center',
    padding:20,
  },
  defaultText:{
    color:colorFontGithub,
  },
  name:{
    marginTop:20,
    fontWeight:'bold',
    fontSize:24,
  },
  nickName:{
    color: colorDarkFontGithub,
    fontSize:18,
  },
  description:{
    fontWeight:'bold',
    fontSize:14,
  },
  button:{
    marginTop:20,
    backgroundColor: colorDarkFontGithub,
    borderRadius:10,
    padding:20,
  },
  textButton:{
    fontWeight:'bold',
    fontSize:16,
  }
});

