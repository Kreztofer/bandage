'use client';
import { Toaster } from 'react-hot-toast';
const ToasterProvider = () => {
  return (
    <div>
      <Toaster position='bottom-right' />
    </div>
  );
};

export default ToasterProvider;
