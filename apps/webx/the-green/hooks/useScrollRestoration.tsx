import { useEffect } from 'react';

const saveScrollPos = (url) => {
  const scrollPos = { x: window.scrollX, y: window.scrollY };
  sessionStorage.setItem(url, JSON.stringify(scrollPos));
};

const restoreScrollPos = (url) => {
  const scrollPos = JSON.parse(sessionStorage.getItem(url));
  if (scrollPos) {
    window.requestAnimationFrame(() => window.scrollTo(scrollPos.x, scrollPos.y));
  }
};

const useScrollRestoration = (router) => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      let savedBeforeUnload = false;
      restoreScrollPos(router.asPath);

      const onRouteChangeStart = event => {
        if(!savedBeforeUnload) saveScrollPos(router.asPath);
        savedBeforeUnload = true;
        delete event['returnValue'];
      };

      const onRouteChangeComplete = url => {
        savedBeforeUnload = false;
      };


      const onPopState = () => {
        restoreScrollPos(router.asPath);
      };

      router.events.on('routeChangeStart', onRouteChangeStart);
      router.events.on('routeChangeComplete', onRouteChangeComplete);
      window.addEventListener('popstate', onPopState);

      return () => {
        router.events.off('routeChangeStart', onRouteChangeStart);
        router.events.off('routeChangeComplete', onRouteChangeComplete);
        window.removeEventListener('popstate', onPopState);
      };
    }
  }, [router]);
};

export default useScrollRestoration;
