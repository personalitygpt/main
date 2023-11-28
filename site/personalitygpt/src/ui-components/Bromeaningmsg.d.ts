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
export declare type BromeaningmsgOverridesProps = {
    Bromeaningmsg?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 65"?: PrimitiveOverrideProps<ViewProps>;
    "chat bubble 5"?: PrimitiveOverrideProps<IconProps>;
    "\u201CBro\u201D refers to a general audience and is a signal for an informal conversation. \u201Clol\u201D or \u201Claugh out loud\u201D is used to indicate when one finds a remark funny."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BromeaningmsgProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BromeaningmsgOverridesProps | undefined | null;
}>;
export default function Bromeaningmsg(props: BromeaningmsgProps): React.ReactElement;
