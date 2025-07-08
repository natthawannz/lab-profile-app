import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../app/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      title={`เปลี่ยนเป็น${theme === 'light' ? 'โหมดมืด' : 'โหมดสว่าง'}`}
      onPress={toggleTheme}
    />
  );
}