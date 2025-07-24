import { computed } from 'vue';
import { useRoute } from 'vue-router'; 


export function actualRoute() {
  const route = useRoute();

  const segments = computed(() => {
    const path = route.path;

    return path.split('/').filter(Boolean);
  });

  return {
    segments,
  };
}

