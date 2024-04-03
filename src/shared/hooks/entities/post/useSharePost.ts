import { Inform } from '@/shared/service/log/log.service';

export const useShare = () => {
  const shareFunction = async () => {
    const location = window.location.href;

    await navigator.clipboard.writeText(location);
    Inform.log('Saved to buffer!', { position: 'top-center' });
  };

  return shareFunction;
};
