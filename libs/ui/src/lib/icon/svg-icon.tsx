import React from 'react';

import { get } from '@styled-system/core';
import styled from 'styled-components';
import { layout, color, variant } from 'styled-system';

import theme from '../theme';

interface SVGIconProps {
  iconName: string;
  color?: string;
  colors?: Array<string>;
  svgHeight?: string | Array<string>;
  svgWidth?: string | Array<string>;
  variant?: 'normal';
}

const StyledSVGIcon = styled.svg`
  ${color}
  ${layout}
  ${(props: SVGIconProps) =>
    variant({
      variants: {
        normal: {
          width: props.svgWidth,
          height: props.svgHeight,
        },
      },
    })}
`;

const TendIcon = (props: SVGIconProps) => {
  const color = get(theme, `colors.${props.color}`);
  return (
    <StyledSVGIcon viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" variant="normal" {...props}>
      <path
        d="M8.662.21H0v3.568h8.662V.21zM22.42.209h-8.662v3.567h8.662V.209zM13.248 3.776H9.172V22.63h4.076V3.776z"
        fill={color}
      />
    </StyledSVGIcon>
  );
};

const PlusIcon = (props: SVGIconProps) => {
  const color1 = get(theme, `colors.${props.colors[0]}`);
  const color2 = get(theme, `colors.${props.colors[1]}`);
  const color3 = get(theme, `colors.${props.colors[2]}`);
  const color4 = get(theme, `colors.${props.colors[3]}`);

  return (
    <StyledSVGIcon viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" variant="normal" {...props}>
      <path stroke={color1} strokeWidth={5} d="M45 22.375H28.125" />
      <path stroke={color2} strokeWidth={5} d="M16.875 22.375H0" />
      <path stroke={color3} strokeWidth={5} d="M22.625 45V28.125" />
      <path d="M22.5 16.875V0" stroke={color4} strokeWidth={5} />
    </StyledSVGIcon>
  );
};

const EqualsIcon = (props: SVGIconProps) => {
  const color1 = get(theme, `colors.${props.colors[0]}`);
  const color2 = get(theme, `colors.${props.colors[1]}`);

  return (
    <StyledSVGIcon viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" variant="normal" {...props}>
      <path fill={color1} d="M24 0v4H0V0z" />
      <path fill={color2} d="M24 12v4H0v-4z" />
    </StyledSVGIcon>
  );
};

const InstagramIcon = (props: SVGIconProps) => {
  const color = get(theme, `colors.${props.color}`);
  return (
    <StyledSVGIcon
      viewBox="0 0 31 32"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variant="normal"
      {...props}
    >
      <path
        d="M15.279 3.7c4.079 0 4.562.015 6.172.089 1.49.068 2.299.317 2.837.526a4.733 4.733 0 011.757 1.142 4.733 4.733 0 011.142 1.757c.21.538.458 1.347.526 2.836.074 1.611.09 2.095.09 6.173 0 4.08-.016 4.563-.09 6.173-.068 1.49-.317 2.299-.526 2.837a4.732 4.732 0 01-1.142 1.756 4.734 4.734 0 01-1.757 1.143c-.538.21-1.347.458-2.837.526-1.61.073-2.093.09-6.172.09-4.08 0-4.563-.017-6.173-.09-1.49-.068-2.299-.317-2.837-.526a4.733 4.733 0 01-1.756-1.143 4.733 4.733 0 01-1.143-1.756c-.21-.538-.458-1.347-.526-2.837-.074-1.61-.09-2.094-.09-6.173 0-4.078.016-4.562.09-6.172.068-1.49.317-2.299.526-2.837a4.732 4.732 0 011.143-1.756 4.732 4.732 0 011.756-1.143c.538-.21 1.347-.458 2.837-.526 1.61-.074 2.094-.09 6.173-.09zm0-2.753c-4.15 0-4.67.018-6.299.092-1.626.074-2.736.333-3.708.71a7.489 7.489 0 00-2.706 1.762A7.488 7.488 0 00.804 6.217C.427 7.189.17 8.299.094 9.925c-.074 1.63-.092 2.15-.092 6.298 0 4.15.018 4.67.092 6.299.075 1.626.333 2.736.71 3.708a7.488 7.488 0 001.762 2.706 7.488 7.488 0 002.706 1.762c.972.377 2.082.636 3.708.71 1.63.074 2.15.092 6.299.092 4.148 0 4.669-.018 6.298-.092 1.626-.075 2.736-.333 3.708-.71a7.488 7.488 0 002.706-1.762 7.488 7.488 0 001.762-2.706c.378-.972.636-2.082.71-3.708.074-1.63.092-2.15.092-6.299 0-4.148-.018-4.669-.092-6.298-.074-1.626-.332-2.736-.71-3.708a7.488 7.488 0 00-1.762-2.706 7.488 7.488 0 00-2.706-1.762c-.971-.377-2.082-.636-3.708-.71-1.63-.074-2.15-.092-6.298-.092z"
        fill={color}
      />
      <path
        d="M15.287 8.385a7.844 7.844 0 100 15.69 7.844 7.844 0 000-15.69zm0 12.937a5.092 5.092 0 110-10.184 5.092 5.092 0 010 10.184zM25.276 8.073a1.833 1.833 0 11-3.666 0 1.833 1.833 0 013.666 0z"
        fill={color}
      />
    </StyledSVGIcon>
  );
};

const TwitterIcon = (props: SVGIconProps) => {
  const color = get(theme, `colors.${props.color}`);
  return (
    <StyledSVGIcon
      viewBox="0 0 31 25"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variant="normal"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.073 3.218c-1.075.478-2.233.8-3.447.945a6.017 6.017 0 002.639-3.32 12.02 12.02 0 01-3.811 1.456 6.002 6.002 0 00-10.227 5.474 17.037 17.037 0 01-12.372-6.27 5.97 5.97 0 00-.812 3.017 5.996 5.996 0 002.67 4.995 5.983 5.983 0 01-2.72-.75v.075a6.01 6.01 0 004.815 5.886 6.033 6.033 0 01-2.711.103 6.01 6.01 0 005.607 4.168 12.045 12.045 0 01-7.454 2.57c-.486 0-.964-.028-1.433-.085a16.991 16.991 0 009.2 2.697c11.04 0 17.077-9.145 17.077-17.076 0-.26-.005-.52-.017-.776a12.225 12.225 0 002.996-3.109z"
        fill={color}
      />
    </StyledSVGIcon>
  );
};

const FacebookIcon = (props: SVGIconProps) => {
  const color = get(theme, `colors.${props.color}`);
  return (
    <StyledSVGIcon
      viewBox="0 0 15 30"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variant="normal"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.995 5.375c-.84-.168-1.976-.294-2.69-.294-1.934 0-2.06.84-2.06 2.186v2.394h4.834l-.421 4.96H9.245v15.087H3.194V14.622H.083v-4.96h3.11V6.593c0-4.202 1.976-6.556 6.935-6.556 1.723 0 2.984.252 4.623.589l-.756 4.749z"
        fill={color}
      />
    </StyledSVGIcon>
  );
};

const ArrowUpIcon = (props: SVGIconProps) => {
  const color1 = get(theme, `colors.${props.colors[0]}`);
  return (
    <StyledSVGIcon {...props} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#prefix__clip0)" stroke={color1} strokeWidth={2} strokeLinejoin="bevel">
        <path d="M1.178 12l14-14M11.178-2l14 14" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="transparent" transform="rotate(-90 12.09 11.91)" d="M0 0h24v25.822H0z" />
        </clipPath>
      </defs>
    </StyledSVGIcon>
  );
};

const ArrowDownIcon = (props: SVGIconProps) => {
  const color1 = get(theme, `colors.${props.colors[0]}`);
  return (
    <StyledSVGIcon viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#prefix__clip0)" stroke={color1} strokeWidth={2} strokeLinejoin="bevel">
        <path d="M25 12L11 26M15 26L1 12" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path transform="rotate(90 13 13)" d="M0 0h24v25.822H0z" />
        </clipPath>
      </defs>
    </StyledSVGIcon>
  );
};

const ArrowLeftIcon = (props: SVGIconProps) => {
  const color = get(theme, `colors.${props.color}`);
  return (
    <StyledSVGIcon {...props} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#prefix__clip0)" stroke={color} strokeWidth={2} strokeLinejoin="bevel">
        <path d="M12 24.822l-14-14M-2 14.822l14-14" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path transform="rotate(-180 12 12.911)" d="M0 0h24v25.822H0z" />
        </clipPath>
      </defs>
    </StyledSVGIcon>
  );
};

const ArrowRightIcon = (props: SVGIconProps) => {
  const color = get(theme, `colors.${props.color}`);
  return (
    <StyledSVGIcon {...props} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#prefix__clip0)" stroke={color} strokeWidth={2} strokeLinejoin="bevel">
        <path d="M12 1l14 14M26 11L12 25" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path d="M0 0h24v25.822H0z" />
        </clipPath>
      </defs>
    </StyledSVGIcon>
  );
};

const AuthorProfileIcon = (props: SVGIconProps) => {
  return (
    <StyledSVGIcon {...props} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="14.5" fill="#C4C4C4" stroke="#F79234"/>
        <mask id="mask0_179_442" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="1" y="1" width="28" height="28">
          <circle cx="15" cy="15" r="14" fill="#C4C4C4"/>
        </mask>
        <g mask="url(#mask0_179_442)">
          <circle cx="15" cy="30" r="14" fill="#BDFC4C"/>
        </g>
        <circle cx="15" cy="13" r="6.5" fill="#BDFC4C" stroke="#C4C4C4"/>
    </StyledSVGIcon>
  );
};

const CommentIcon = (props: SVGIconProps) => {
  const color = get(theme, `colors.${props.color}`);
  return (
    <StyledSVGIcon {...props} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.881836H13V13.8818H11.3165L8.89834 11.6438H2.97012V9.85077H9.64629L11.3394 11.73L11.3033 2.68257H1.69309V8.05647H0V0.881836Z" fill={color}/>
    </StyledSVGIcon>
  );
};



const IconList = {
  Tend: TendIcon,
  TendPlus: PlusIcon,
  TendEquals: EqualsIcon,
  ArrowUp: ArrowUpIcon,
  ArrowDown: ArrowDownIcon,
  ArrowLeft: ArrowLeftIcon,
  ArrowRight: ArrowRightIcon,
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  AuthorProfile: AuthorProfileIcon,
  Comment: CommentIcon
};

export const getSvgIcon = (props: SVGIconProps) => {
  return IconList[props.iconName];
};

TendIcon.defaultProps = {
  color: 'neonGreen.0',
  svgHeight: ['0.5rem', '0.5rem', '0.5rem'],
  variant: 'normal',
};

PlusIcon.defaultProps = {
  colors: ['red.0', 'orange.0', 'yellow.0', 'magenta.0'],
  svgHeight: ['1.5625rem', '1.97rem', '2.375rem'],
  svgWidth: ['1.5625rem', '1.97rem', '2.375rem'],
  variant: 'normal',
};

EqualsIcon.defaultProps = {
  colors: ['orange.0', 'red.0'],
  svgHeight: ['1.1875rem', '1.6875rem', '1.5rem'],
  svgWidth: ['0.625rem', '0.8125rem', '1rem'],
  variant: 'normal',
};

FacebookIcon.defaultProps = {
  color: 'neutral.4',
  // svgWidth: ['1rem', '1.2rem', '1.35rem'],
  svgHeight: ['1rem', '1.2rem', '1.35rem'],
  variant: 'normal',
};

InstagramIcon.defaultProps = {
  color: 'neutral.4',
  // svgWidth: ['1em', '1.2em', '1.35em'],
  svgHeight: ['1rem', '1rem', '1.2rem', '1.35rem'],
  variant: 'normal',
};

TwitterIcon.defaultProps = {
  color: 'neutral.4',
  svgWidth: ['1rem', '1rem', '1.2rem', '1.35rem'],
  // svgHeight: ['1rem', '1.2rem', '1.35rem'],
  variant: 'normal',
};

ArrowUpIcon.defaultProps = {
  colors: ['neutral.4'],
  // svgWidth: ['1rem', '1.2rem', '1.35rem'],
  svgWidth: ['1rem', '1rem', '1.2rem', '1.35rem'],
  variant: 'normal',
};

ArrowDownIcon.defaultProps = {
  colors: ['neutral.4'],
  // svgWidth: ['1rem', '1.2rem', '1.35rem'],
  svgWidth: ['1rem', '1.2rem', '1.35rem'],
  variant: 'normal',
};

ArrowLeftIcon.defaultProps = {
  colors: ['neutral.4'],
  // svgWidth: ['1rem', '1.2rem', '1.35rem'],
  svgWidth: ['1rem', '1.2rem', '1.35rem'],
  variant: 'normal',
};

ArrowRightIcon.defaultProps = {
  colors: ['neutral.4'],
  // svgWidth: ['1rem', '1.2rem', '1.35rem'],
  svgWidth: ['1rem', '1.2rem', '1.35rem'],
  variant: 'normal',
};

AuthorProfileIcon.defaultProps = {
  svgWidth: ['1rem', '1.2rem', '1.8rem'],
  variant: 'normal',
};

CommentIcon.defaultProps = {
  width: "13",
  height: "14",
};
