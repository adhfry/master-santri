import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const darkMode = ref(false);

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('darkMode');
    darkMode.value = savedTheme === 'true';
    applyTheme();
  };

  const toggleTheme = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem('darkMode', darkMode.value);
    applyTheme();
  };

  const applyTheme = () => {
    document.documentElement.classList.toggle('dark', darkMode.value);
  };

  return { darkMode, initializeTheme, toggleTheme };
});
