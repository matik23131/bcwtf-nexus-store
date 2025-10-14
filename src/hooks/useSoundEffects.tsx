import { useCallback } from 'react';

// Sound effect URLs (using free sound APIs or you can host your own)
const sounds = {
  click: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTQKGGe88OihUBELTKXh8bllHAU2jdXywn0pBSh+yvDeijkKE121' as const,
  hover: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTQKGGe88OihUBELTKXh8bllHAU2jdXywn0pBSh+yvDeijkKE121' as const,
  purchase: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTQKGGe88OihUBELTKXh8bllHAU2jdXywn0pBSh+yvDeijkKE121' as const,
};

export const useSoundEffects = () => {
  const playSound = useCallback((soundType: keyof typeof sounds) => {
    try {
      const audio = new Audio(sounds[soundType]);
      audio.volume = 0.3; // Keep it subtle
      audio.play().catch(() => {
        // Ignore errors if user hasn't interacted with page yet
      });
    } catch (error) {
      // Silently fail if sound can't play
    }
  }, []);

  return { playSound };
};
