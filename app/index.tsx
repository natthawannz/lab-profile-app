import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';

// Profile Data
const profile = {
  name: 'นางสาวณัฐวรรณ พวงมะลัย',
  id: 'เลขที่นักศึกษา:653450089-1',
  faculty: 'สหวิทยาการ',
  course: 'วิทยาการคอมพิวเตอร์และสารสนเทศ',
  university: 'มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย',
  avatarUrl: './assets/Poo2.jpg' // ไม่ได้ใช้เพราะใช้ local image
};

const skills = ['html', 'JavaScript', 'UI/UX Design', 'Figma', 'C#'];

const Avatar = () => (
  <View style={styles.avatarWrapper}>
    <Image
      source={require('../assets/Poo2.jpg')}
      style={styles.avatar}
    />
  </View>
);

function ProfileItem({ label, value }: { label: string, value: string }) {
  return (
    <View style={styles.profileItem}>
      <Text style={styles.profileLabel}>{label}</Text>
      <Text style={styles.profileValue}>{value}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  const profileDetails = [
    { label: 'คณะ', value: profile.faculty },
    { label: 'หลักสูตร', value: profile.course },
    { label: 'มหาวิทยาลัย', value: profile.university },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Avatar />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.id}>{profile.id}</Text>
      </View>

      <View style={styles.details}>
        {profileDetails.map((item, idx) => (
          <React.Fragment key={item.label}>
            <ProfileItem label={item.label} value={item.value} />
            {idx !== profileDetails.length - 1 && <View style={styles.separator} />}
          </React.Fragment>
        ))}
      </View>

      <View style={styles.skillsSection}>
        <Text style={styles.skillsTitle}>ความสามารถ / สกิล</Text>
        <FlatList
          data={skills}
          keyExtractor={(item) => item}
          numColumns={3}
          contentContainerStyle={styles.skillsContainer}
          renderItem={({ item }) => (
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const DARK_BG = '#1E1E2E';
const DARK_CARD = '#2A2A40';
const DARK_TEXT = '#E0E0E0';
const ACCENT_BLUE = '#2694AB';
const ACCENT_PEACH = '#E59572';
const BORDER_GRAY = '#3E3E5E';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BG,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
    marginTop: 50,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: ACCENT_BLUE,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    shadowColor: ACCENT_BLUE,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: DARK_BG,
    resizeMode: 'cover'
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: DARK_TEXT,
    textAlign: 'center'
  },
  id: {
    fontSize: 14,
    color: ACCENT_BLUE,
    marginTop: 5,
    textAlign: 'center'
  },
  details: {
    backgroundColor: DARK_CARD,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginVertical: 12,
    shadowColor: ACCENT_PEACH + '66',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 5,
    paddingVertical: 2,
  },
  profileLabel: {
    minWidth: 86,
    fontWeight: '700',
    color: ACCENT_PEACH,
    fontSize: 15,
    marginRight: 10,
  },
  profileValue: {
    flex: 1,
    fontWeight: '400',
    color: DARK_TEXT,
    fontSize: 15,
    lineHeight: 22,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_GRAY,
    marginVertical: 2,
    marginLeft: 4,
  },
  skillsSection: {
    marginTop: 21,
    marginBottom: 8,
  },
  skillsTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    color: ACCENT_BLUE
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: '#30384D',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
    minWidth: 86,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: ACCENT_BLUE,
  },
  skillText: {
    color: DARK_TEXT,
    fontWeight: '600',
    fontSize: 13,
  }
});
