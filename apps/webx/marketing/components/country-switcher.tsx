/** @format */

import React from 'react';
import styled from 'styled-components';
import { get } from '@styled-system/core';
import { useRouter } from 'next/router';

import { Theme } from '@tend/ui';

const USFlag = (props) => {
  const color = get(Theme, `colors.${props.color}`);
  return (
    <svg
      height="1.5rem"
      width="1.5rem"
      fill={color}
      fillOpacity={props.opacity}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49 33"
    >
      <title>{'svg/241-USA--United States of America'}</title>
      <g fill={color} fillRule="nonzero">
        <path d="M0 0h49v33H0V0zm1 1v31h47V1H1z" />
        <path d="M25 1.5h23V1H25v.5zM24 0h25v2.5H24V0zM25 11.667h23v-.5H25v.5zm-1-1.5h25v2.5H24v-2.5zM1 21.833h47v-.5H1v.5zm-1-1.5h49v2.5H0v-2.5zM25 6.583h23v-.5H25v.5zm-1-1.5h25v2.5H24v-2.5zM25 16.75h23v-.5H25v.5zm-1-1.5h25v2.5H24v-2.5zM1 26.917h47v-.5H1v.5zm-1-1.5h49v2.5H0v-2.5zM1 31.5v.5h47v-.5H1zm-1-1h49V33H0v-2.5z" />
        <path d="M0 0h25v17.75H0V0zm1 1v15.75h23V1H1z" />
        <path d="M2.5 3.5l-.588.309.112-.654-.475-.464.657-.096L2.5 2l.294.595.657.096-.475.464.112.654zM6.5 3.5l-.588.309.112-.654-.475-.464.657-.096L6.5 2l.294.595.657.096-.475.464.112.654zM10.5 3.5l-.588.309.112-.654-.475-.464.657-.096L10.5 2l.294.595.657.096-.475.464.112.654zM14.5 3.5l-.588.309.112-.654-.475-.464.657-.096L14.5 2l.294.595.657.096-.475.464.112.654zM18.5 3.5l-.588.309.112-.654-.475-.464.657-.096L18.5 2l.294.595.657.096-.475.464.112.654zM20.5 6.5l-.588.309.112-.654-.475-.464.657-.096L20.5 5l.294.595.657.096-.475.464.112.654zM4.5 6.5l-.588.309.112-.654-.475-.464.657-.096L4.5 5l.294.595.657.096-.475.464.112.654zM8.5 6.5l-.588.309.112-.654-.475-.464.657-.096L8.5 5l.294.595.657.096-.475.464.112.654zM12.5 6.5l-.588.309.112-.654-.475-.464.657-.096L12.5 5l.294.595.657.096-.475.464.112.654zM16.5 6.5l-.588.309.112-.654-.475-.464.657-.096L16.5 5l.294.595.657.096-.475.464.112.654zM22.5 3.5l-.588.309.112-.654-.475-.464.657-.096L22.5 2l.294.595.657.096-.475.464.112.654zM2.5 9.5l-.588.309.112-.654-.475-.464.657-.096L2.5 8l.294.595.657.096-.475.464.112.654zM6.5 9.5l-.588.309.112-.654-.475-.464.657-.096L6.5 8l.294.595.657.096-.475.464.112.654zM10.5 9.5l-.588.309.112-.654-.475-.464.657-.096L10.5 8l.294.595.657.096-.475.464.112.654zM14.5 9.5l-.588.309.112-.654-.475-.464.657-.096L14.5 8l.294.595.657.096-.475.464.112.654zM18.5 9.5l-.588.309.112-.654-.475-.464.657-.096L18.5 8l.294.595.657.096-.475.464.112.654zM20.5 12.5l-.588.309.112-.654-.475-.464.657-.096L20.5 11l.294.595.657.096-.475.464.112.654zM4.5 12.5l-.588.309.112-.654-.475-.464.657-.096L4.5 11l.294.595.657.096-.475.464.112.654zM8.5 12.5l-.588.309.112-.654-.475-.464.657-.096L8.5 11l.294.595.657.096-.475.464.112.654zM12.5 12.5l-.588.309.112-.654-.475-.464.657-.096L12.5 11l.294.595.657.096-.475.464.112.654zM16.5 12.5l-.588.309.112-.654-.475-.464.657-.096L16.5 11l.294.595.657.096-.475.464.112.654zM22.5 9.5l-.588.309.112-.654-.475-.464.657-.096L22.5 8l.294.595.657.096-.475.464.112.654zM2.5 15.5l-.588.309.112-.654-.475-.464.657-.096L2.5 14l.294.595.657.096-.475.464.112.654zM6.5 15.5l-.588.309.112-.654-.475-.464.657-.096L6.5 14l.294.595.657.096-.475.464.112.654zM10.5 15.5l-.588.309.112-.654-.475-.464.657-.096L10.5 14l.294.595.657.096-.475.464.112.654zM14.5 15.5l-.588.309.112-.654-.475-.464.657-.096L14.5 14l.294.595.657.096-.475.464.112.654zM18.5 15.5l-.588.309.112-.654-.475-.464.657-.096L18.5 14l.294.595.657.096-.475.464.112.654zM22.5 15.5l-.588.309.112-.654-.475-.464.657-.096L22.5 14l.294.595.657.096-.475.464.112.654z" />
      </g>
    </svg>
  );
};

const MXFlag = (props) => {
  const color = get(Theme, `colors.${props.color}`);
  return (
    <svg
      height="1.5rem"
      width="1.5rem"
      fill={color}
      fillOpacity={props.opacity}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49 33"
    >
      <title>{'svg/146-MEX--Mexico'}</title>
      <g fill={color} fillRule="nonzero">
        <path d="M49 0v33H0V0h49zM1 1v31h15V1H1zm16 0v31h15V1H17zm16 0v31h15V1H33z" />
        <path d="M17.5 15.5a7 7 0 1014 0 .5.5 0 10-1 0 6 6 0 11-12 0 .5.5 0 00-1 0z" />
        <path d="M24.5 16.902c-.262-.192-.39.648-1.302.25-.17-.074-.262-.148-.305-.224a2.802 2.802 0 00-.553-.069.648.648 0 01-.22-.033c-.347.222-.759.34-1.055.235-.252-.09-.36-.24-.456-.526-.152-.454-.242-.603-.63-.863-.31-.207-.339-.425-.258-.846.017-.09.024-.134.027-.18.012-.174-.058-.276-.375-.404a.25.25 0 01.187-.463c.51.205.714.503.687.902a1.84 1.84 0 01-.035.24c-.046.24-.041.277.046.336.5.334.642.57.825 1.12.052.154.076.187.15.213.142.05.389-.043.61-.182-.012-.109-.007-.22-.007-.308 0-.103.007-.231.046-.351l-.038-.007c-.433-.084-.685-.22-.807-.566-.191-.542 0-.914.503-1.38l.17-.158c.059-.055.102-.098.137-.137.082-.093.107-.149.1-.188-.016-.1-.177-.16-.562-.172a9.006 9.006 0 00-.211-.004c-.574-.006-.7-.024-.808-.263-.249-.554-.095-1.044.43-1.387a.25.25 0 01.274.418c-.323.211-.394.438-.248.763-.024-.053.116-.033.358-.03l.187.002c.044-.123.142-.264.307-.417.07-.371.958-2.16 2.983-.258.392-.923-1.406-.656-.936-1.41.656-.862 4.143.507 4.757 1.492.266.427 1.883 2.933.967 5.565-.967-2.111-3.558-3.102-3.542-3.066.205.442.365.82.39 1.277.023.453 2.533 1.364 2.426 1.79-.076.304-1.603.486-2.427.07a.234.234 0 01-.078.108c.336.147.625.4.787.641.889-.13 1.056-.429 1.35.044.393.632-.39 1.29-2.402.883a.748.748 0 00-.387.145A.5.5 0 0126 20v.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V20a.5.5 0 01.5-.5h.956c.012-.067.027-.138.044-.211-2.872.402-5.005-1.625-5.005-1.901 0-.277.166-.925.773-.494.342.241 1.608 1.07 4.146 1.33.131-.202.392-.419.792-.513-.269-.296-.578-.715-.706-.809zm-2.06-3.67c.037.218-.047.406-.22.6-.046.053-.099.106-.167.17l-.173.16c-.371.345-.477.55-.371.847.045.13.155.189.43.242l.107.02c.161.029.288.058.39.098.288 0 .527.312.694.655.007-.16-.04-.342-.196-.551-.859-1.155.256-2.42.115-2.975-.021-.085-.415.391-.879.308.147.09.238.227.27.426zm1.462 2.995c.088-.053.19-.1.3-.127a.922.922 0 01.772.158c.11.082.199.175.336.335.06.07.284.342.285.344l.06.07.135-.467a.967.967 0 01-.297-.675c-.014-.266-.09-.496-.315-.983-.126-.436-.126-.436.22-.958.328-.175.328-.175.463-.178.155.004.155.004.206.015a1 1 0 01.105.028c.064.021.064.021.13.046.1.04.222.092.354.155.346.163.72.371 1.09.617.424.28.815.588 1.163.925-.055-.675-.25-1.36-.556-2.039a7.536 7.536 0 00-.554-1.023c-.172-.276-1.025-.786-1.946-1.106a6.722 6.722 0 00-.447-.137c.147.317.143.685-.012 1.05l-.448 1.056-.836-.785a5.251 5.251 0 00-.268-.236c.173 1.02-.431 1.181-.431 2.295 0 .501.584.501.491 1.62z" />
      </g>
    </svg>
  );
};

const FlagButton = styled.div`
  text-align: left;
  display: flex;
  padding: 0;
  justify-content: flex-start;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  & :hover {
    background-color: transparent;
  }
  & > svg {
    & :hover {
      fill-opacity: 1;
    }
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  > * {
    margin-right: 0.5rem;
  }
  & :last-child {
    margin-right: 0rem;
  }
`;

export const CountrySwitcher = () => {
  const router = useRouter();
  const { locale } = router;
  const isLocaleMX = !!locale.match(/mx/i);

  const changeCountry = (switcherLocale) => {
    // TODO: verify environment variables being set / readable in prod with Justin or Nathan and refactor to support all
    //       environments (including dev)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.location = `${window.location.protocol}//tend.${
      switcherLocale.match(/mx/i) ? 'mx' : 'money'
    }`;
  };

  return (
    <Div>
      <FlagButton
        role="button"
        aria-label="United States"
        onClick={() => changeCountry('en-US')}
        onKeyDown={() => changeCountry('en-US')}
      >
        <USFlag color="white" opacity={!isLocaleMX ? 1 : 0.3} />
      </FlagButton>
      <FlagButton
        role="button"
        aria-label="Mexico"
        onClick={() => changeCountry('es-MX')}
        onKeyDown={() => changeCountry('es-MX')}
      >
        <MXFlag color="white" opacity={isLocaleMX ? 1 : 0.3} />
      </FlagButton>
    </Div>
  );
};

export default CountrySwitcher;
