/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Hellograymsg1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="288px"
      height="90.21px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Hellograymsg1")}
      {...rest}
    >
      <Icon
        width="288px"
        height="80px"
        viewBox={{ minX: 0, minY: 0, width: 288, height: 80 }}
        paths={[
          {
            d: "M0 40C0 17.9086 17.9086 0 40 0L248 0C270.091 0 288 17.9086 288 40L288 40C288 62.0914 270.091 80 248 80L40 80C17.9086 80 0 62.0914 0 40L0 40Z",
            fill: "rgba(217,217,217,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="11.32%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "chat bubble 1")}
      ></Icon>
      <View
        width="15px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="88.24%"
        bottom="-4.87%"
        left="12.15%"
        right="82.64%"
        transformOrigin="top left"
        transform="rotate(-45deg)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 41")}
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
        width="256px"
        height="63px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18.84%"
        bottom="11.32%"
        left="8.33%"
        right="2.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Hello! What phrases would you like to learn about?"
        {...getOverrideProps(
          overrides,
          "Hello! What phrases would you like to learn about?"
        )}
      ></Text>
    </View>
  );
}
