import { css } from 'styled-components';

const makeMedia = (media) => {
  return (...args: TemplateStringsArray) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const style = css(...args);
    return css`@media ${media} {${style}}`;
  };
};

const media = (Theme: Record<string, unknown>) => {
  return Object.keys(Theme.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = Theme.breakpoints[breakpoint];
    media[breakpoint] = makeMedia(
      [
        Theme.mediaQuery,
        breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`
      ]
        .filter(Boolean)
        .join(' and ')
    );
    return media;
  }, {});
};

export default media;
