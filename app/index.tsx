import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from './context/ThemeContext';
import { themeStyles } from './constants/theme';
import ThemeToggle from '../components/ThemeToggle';

const profile = {
  name: 'นางสาวณัฐวรรณ พวงมะลัย',
  id: 'เลขที่นักศึกษา:653450089-1',
  faculty: 'สหวิทยาการ',
  course: 'วิทยาการคอมพิวเตอร์และสารสนเทศ',
  university: 'มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย',
};
const skills = ['html', 'JavaScript', 'UI/UX Design', 'Figma', 'C#'];

export default function ProfileScreen({ navigation }) {
  const { theme } = useTheme();
  const T = themeStyles[theme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: T.BG }]}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Poo2.jpg')}
          style={[styles.avatar, { borderColor: T.ACCENT }]}
        />
        <Text style={[styles.name, { color: T.TEXT }]}>{profile.name}</Text>
        <Text style={[styles.id, { color: T.ACCENT }]}>{profile.id}</Text>
      </View>

      <View style={[styles.details, { backgroundColor: T.CARD }]}>
        <Text style={[styles.label, {color:T.ACCENT}]}>คณะ <Text style={{color:T.TEXT}}>{profile.faculty}</Text></Text>
        <Text style={[styles.label, {color:T.ACCENT}]}>หลักสูตร <Text style={{color:T.TEXT}}>{profile.course}</Text></Text>
        <Text style={[styles.label, {color:T.ACCENT}]}>มหาวิทยาลัย <Text style={{color:T.TEXT}}>{profile.university}</Text></Text>
      </View>

      <View style={styles.skillsSection}>
        <Text style={[styles.skillsTitle, { color: T.ACCENT }]}>สกิล</Text>
        <FlatList
          data={skills}
          keyExtractor={item => item}
          horizontal
          renderItem={({item}) => (
            <View style={[styles.skillTag, {backgroundColor:T.SKILL_BG}]}>
              <Text style={{color:T.SKILL_TEXT, fontWeight:'bold'}}>{item}</Text>
            </View>
          )}
        />
      </View>

      <View style={{marginTop:24}}>
        <ThemeToggle />
        <View style={{height:16}}/>
        <Text
          onPress={()=>navigation.navigate("About")}
          style={{color:T.ACCENT, textAlign:'center', textDecorationLine:'underline'}}
        >ไป About</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { alignItems: 'center', marginTop: 36, marginBottom: 22 },
  avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, marginBottom: 18 },
  name: { fontSize: 22, fontWeight: '700' },
  id: { fontSize: 14, fontWeight: '400', marginTop: 4 },
  details: { borderRadius: 15, marginVertical: 14, padding: 16 },
  label: { fontSize: 16, fontWeight:'600', marginBottom: 7 },
  skillsSection: { marginTop: 10, marginBottom: 14 },
  skillsTitle: { fontSize: 17, fontWeight: '700', marginBottom: 10 },
  skillTag: { borderRadius: 16, paddingVertical: 8, paddingHorizontal: 18, marginHorizontal: 7 }
});