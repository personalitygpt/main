/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Hellograymsg1OverridesProps = {
    Hellograymsg1?: PrimitiveOverrideProps<ViewProps>;
    "chat bubble 1"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 41"?: PrimitiveOverrideProps<ViewProps>;
    "Hello! What phrases would you like to learn about?"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Hellograymsg1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Hellograymsg1OverridesProps | undefined | null;
}>;
export default function Hellograymsg1(props: Hellograymsg1Props): React.ReactElement;
