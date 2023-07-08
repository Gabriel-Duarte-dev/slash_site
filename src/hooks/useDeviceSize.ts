import { useMemo } from "react";

export const useDeviceSize = () => {
  const innerWidth = window.innerWidth;

  const isMobile = useMemo(() => {
    return innerWidth < 768;
  }, [innerWidth]);

  const isTablet = useMemo(() => {
    return innerWidth >= 768;
  }, [innerWidth]);

  const isDesktop = useMemo(() => {
    return innerWidth >= 1024;
  }, [innerWidth]);

  const isBigDesktop = useMemo(() => {
    return innerWidth >= 1440;
  }, [innerWidth]);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigDesktop,
  };
};
