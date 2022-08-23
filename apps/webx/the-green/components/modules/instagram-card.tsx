import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";


export interface InstagramCardProps {
  post: string;
}

const StyledInstagramCard = styled.div`
  iframe {
    min-width: 100% !important;
  }
`;

const InstagramCard = (props: InstagramCardProps) => {

  const ref = useRef();
  const { locale } = useRouter();
  useEffect(() => {
    if(ref) {
      const container = ref.current;
      if(typeof window !== 'undefined' && Object.hasOwnProperty.bind(window, 'ElfsightEmbedSDK')()) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { ElfsightEmbedSDK } = window;
        /**
         * @tech-debt
         *
         * hardcoded widget id to be added as env variables
         */
        if(locale === "en-US")
          ElfsightEmbedSDK.displayWidget(container, 'e85cee16-e430-4f6a-adf5-1d226b46f9e5');
        else if(locale === "es-MX") ElfsightEmbedSDK.displayWidget(container, '1c1ce231-bad0-48af-b492-2b64d625e69f');
      }
    }
  }, [locale]);

  return (
    <>
      <script src="https://elfsight.com/embed-sdk.js"></script>
      <StyledInstagramCard id="instagram-container" ref={ref} />
    </>
  );
};

export default InstagramCard;
