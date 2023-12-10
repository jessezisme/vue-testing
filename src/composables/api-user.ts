import { ref, onMounted, onUnmounted } from 'vue';

// by convention, composable function names start with "use"
export function useApiUser() {
  const login = (data: { name: string; password: string }) => {
    return {
      firstName: 'Lloyd',
      lastName: 'Christmas',
    };
  };

  return { login };
}
