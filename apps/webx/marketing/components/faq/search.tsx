/** @format */

import React, { useState } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { variant, layout } from 'styled-system';

import {
  TCrossbarLayout,
  Grid,
  Row,
  Col,
  Layout,
  Paragraph,
  Input,
  InputProps,
  Button,
  Rule,
} from '@tend/ui';
import Space from '../layout/space';

const GridRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

interface StyledInputProps extends InputProps {
  variant: 'normal';
}

const StyledInput = styled(Input)<StyledInputProps>`
  ${layout}
  border-width: 0;
  padding: 0 0.1rem;
  ${variant({
    variants: {
      normal: {
        height: 'smallButtonHeight',
      },
    },
  })}
`;

export const Search = () => {
  const { t } = useTranslation('faq');
  const [input, setInput] = useState<string>('');
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <TCrossbarLayout
        variant="left"
        leftLineColor="defaultMagenta"
        rightLineColor="defaultOrange"
        whenShrink="left"
        upperBg="defaultGreen"
        marginBottom={['1.1875rem', '1.1875rem', '1.1875ren', '1.875rem']}
      />
      <Layout bg="defaultGreen">
        <Space>
          <Grid>
            <Row paddingTop="1.5rem" paddingBottom="1.5rem">
              <Col
                paddingBottom="1rem"
                justify="flex-start"
                align="flex-start"
                xs={4}
                sm={4}
                md={4}
                lg={4}
              >
                <Paragraph variant="b3" color="white">
                  {t('search.headline')}
                </Paragraph>
              </Col>
              <Col
                justify="flex-start"
                align="flex-start"
                xs={4}
                sm={8}
                md={8}
                lg={8}
              >
                <GridRowDiv>
                  <StyledInput
                    variant="normal"
                    borderBottomColor="defaultTransparent"
                    placeholder="Search for help"
                    value={input}
                    onChange={onInputChange}
                    id="searchForHelp"
                    name="searchForHelp"
                    type="text"
                    textTransform="none"
                    bg="white"
                  />
                  <Button
                    variant="small"
                    bg="defaultMagenta"
                    color="black"
                    hoverBg="black"
                    hoverColor="white"
                    onClick={() => {
                      return;
                    }}
                    textTransform="uppercase"
                  >
                    Search
                  </Button>
                </GridRowDiv>
              </Col>
            </Row>
            <Row paddingTop="1.5rem">
              <Rule size={16} ruleColor="defaultRed" />
            </Row>
          </Grid>
        </Space>
      </Layout>
    </>
  );
};

export default Search;
