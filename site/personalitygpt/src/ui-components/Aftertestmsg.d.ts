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
export declare type AftertestmsgOverridesProps = {
    Aftertestmsg?: PrimitiveOverrideProps<ViewProps>;
    "chat bubble 4"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 71"?: PrimitiveOverrideProps<ViewProps>;
    "I just took the test and was deemed neurotic. What does this mean and is it bad?"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AftertestmsgProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AftertestmsgOverridesProps | undefined | null;
}>;
export default function Aftertestmsg(props: AftertestmsgProps): React.ReactElement;
