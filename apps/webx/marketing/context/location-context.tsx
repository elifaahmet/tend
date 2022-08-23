/**
 * /* WIP - Do not use
 * * Provides location context throughout the app, currently no in use
 * *
 *
 * @format
 */

import React, { useState, useEffect, useRef, createContext } from 'react';

interface IIpLocation {
  ipAddress: string;
  country: string;
  continent: string;
  isProxy: boolean;
  proxyType: string;
}

interface ContextType {
  ipLocation: IIpLocation;
  setIpLocation: (IpLocation: IIpLocation) => void;
}

export const IpLocationContext = createContext(null);

export const IpLocationProvider = (props) => {
  const initialState = {
    ipAddress: '0.0.0.0',
    country: 'Nowhere',
    continent: '',
    isProxy: false,
    proxyType: '',
  };

  const [ipLocation, setIpLocation] = useState<IIpLocation>(initialState);

  const prev = useRef();

  useEffect(() => {
    if (ipLocation.country === 'Nowhere') {
      const localState = JSON.parse(localStorage.getItem('iplocation'));
      if (localState) {
        prev.current = localState.ipAddress;
        setIpLocation(localState);
      }
    } else if (prev.current !== ipLocation.ipAddress) {
      localStorage.setItem('iplocation', JSON.stringify(ipLocation));
    }
  }, [ipLocation]);

  return (
    <IpLocationContext.Provider value={[ipLocation, setIpLocation]}>
      {props.children}
    </IpLocationContext.Provider>
  );
};
