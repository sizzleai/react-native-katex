import { StyleProp, ViewStyle } from 'react-native';
export interface TrustContext {
    command: string;
    url: string;
    protocol: string;
}
export interface KatexOptions {
    displayMode?: boolean;
    output?: 'html' | 'mathml' | 'htmlAndMathml';
    leqno?: boolean;
    fleqn?: boolean;
    throwOnError?: boolean;
    errorColor?: string;
    macros?: any;
    minRuleThickness?: number;
    colorIsTextColor?: boolean;
    maxSize?: number;
    maxExpand?: number;
    strict?: boolean | string | Function;
    trust?: boolean | ((context: TrustContext) => boolean);
    globalGroup?: boolean;
}
export interface ContentOptions extends KatexOptions {
    inlineStyle?: string;
    expression?: string;
}
export interface KatexProps extends ContentOptions {
    style: StyleProp<ViewStyle>;
    onLoad: any;
    onError: any;
}
declare function Katex({ style, onLoad, onError, ...options }: KatexProps): JSX.Element;
declare namespace Katex {
    var defaultProps: {
        expression: string;
        displayMode: boolean;
        throwOnError: boolean;
        errorColor: string;
        inlineStyle: string;
        style: {
            root: {
                height: number;
            };
        };
        macros: {};
        colorIsTextColor: boolean;
        onLoad: BooleanConstructor;
        onError: BooleanConstructor;
    };
}
export default Katex;
