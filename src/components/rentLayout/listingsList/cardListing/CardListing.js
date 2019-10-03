import React, { Component } from "react";
import TimeAgo from "react-timeago";
import styled, { css } from "styled-components";

import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Stack
} from "grommet";

const CardListing = (props) => {
    return (
       <Box round="xxsmall" elevation="small" overflow="hidden">
        <Box height="small" width="26vw">
          <Stack anchor="top-left">
          <Image src={props.home.image} fit="cover" />
          <Box background="dark-3">
           <TimeAgo date={props.home.date}/>
          </Box>
          </Stack>
        </Box>
      <Box pad={{ horizontal: "small", vertical: "small" }}>
        <Box
          margin={{ top: "small" }}
          direction="row"
          align="center"
          justify="between"
        >
          <Box>
            <Heading level="3" margin="none">
              {props.home.pricing}
            </Heading>
            <Text color="dark-5" size="small">
              {props.home.address} &#8226; {props.home.rooms}
            </Text>
          </Box>
          {/* <Box
            round="xsmall"
            pad={{ vertical: "xxsmall", horizontal: "xxsmall" }}
            background="brand"
          >
            <Text size="xsmall">NEW</Text>
          </Box> */}
        </Box>
        <Text
          size="small"
          color="dark-5"
          margin={{ vertical: "small" }}
          truncate
        >
          {props.home.niceInfo}
        </Text>
      </Box>
      </Box>
    );
  };


export default CardListing;
