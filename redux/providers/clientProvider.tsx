'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { setupInterceptor } from '@/api/configs/axiosConfig';

interface ClientProviderProps {
  children: ReactNode;
}
setupInterceptor(store);

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ClientProvider;
