import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useApiUser } from '@/composables/api-user';

export const useUserStore = defineStore('user', () => {
  const user = ref<null | { firstName: string; lastName: string }>(null);
  const isLoggedIn = computed(() => {
    return !!user?.value;
  });

  const login = (data: { name: string; password: string }) => {
    user.value = useApiUser().login(data);
  };

  const logout = () => {
    user.value = null;
  };

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
});
