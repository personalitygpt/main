/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Aftertestmsg(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="400px"
      height="94.21px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Aftertestmsg")}
      {...rest}
    >
      <Icon
        width="400px"
        height="83px"
        viewBox={{ minX: 0, minY: 0, width: 400, height: 83 }}
        paths={[
          {
            d: "M0 41.5C0 18.5802 18.5802 0 41.5 0L358.5 0C381.42 0 400 18.5802 400 41.5L400 41.5C400 64.4198 381.42 83 358.5 83L41.5 83C18.5802 83 0 64.4198 0 41.5L0 41.5Z",
            fill: "rgba(42,132,252,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="11.9%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "chat bubble 4")}
      ></Icon>
      <View
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="88.74%"
        bottom="-4.66%"
        left="85%"
        right="11.25%"
        transformOrigin="top left"
        transform="rotate(-45deg)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(42,132,252,1)"
        {...getOverrideProps(overrides, "Rectangle 71")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.17px"
        width="317px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10.61%"
        bottom="22.52%"
        left="14.25%"
        right="6.5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="I just took the test and was deemed neurotic. What does this mean and is it bad?"
        {...getOverrideProps(
          overrides,
          "I just took the test and was deemed neurotic. What does this mean and is it bad?"
        )}
      ></Text>
    </View>
  );
}
