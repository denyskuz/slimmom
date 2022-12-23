import { useState } from 'react';

export const useDiaryIdHook = () => {
  const [id, setId] = useState(' ');
  //   console.log('HOOK:', id);
  return { id, setId };
};
