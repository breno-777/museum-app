import { Text } from "native-base";
import React from "react";

export function WelcomeStyledTitle({ title, subtitle, ...rest }) {
  return (
    <Text {...rest} fontFamily={"greatVibes"}>
      {title}
      {"\n"}
      <Text
        fontSize={"4xl"}
        fontFamily={"greatVibes"}
        color={"brown.600"}
        lineHeight={40}
      >
        {subtitle}
      </Text>
    </Text>
  );
}
