// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/8841dfc744bce6b2d3e075f7ace25c0c1e664c17/react-responsive/index.d.ts
declare module "react-responsive" {
    import * as React from "react";

    namespace MediaQuery {
        export interface MediaQueryProps {
            query?: string;
            // matchers
            orientation?: "portrait" | "landscape";
            scan?: "progressive" | "interlace";
            aspectRatio?: string;
            deviceAspectRatio?: string;
            height?: number | string;
            deviceHeight?: number | string;
            width?: number | string;
            deviceWidth?: number | string;
            color?: boolean;
            colorIndex?: boolean;
            monochrome?: boolean;
            resolution?: number | string;
            // types
            minAspectRatio?: string;
            maxAspectRatio?: string;
            minDeviceAspectRatio?: string;
            maxDeviceAspectRatio?: string;
            minHeight?: number | string;
            maxHeight?: number | string;
            minDeviceHeight?: number | string;
            maxDeviceHeight?: number | string;
            minDeviceWidth?: number | string;
            maxDeviceWidth?: number | string;
            minWidth?: number | string;
            maxWidth?: number | string;
            minColor?: number;
            maxColor?: number;
            minColorIndex?: number;
            maxColorIndex?: number;
            minMonochrome?: number;
            maxMonochrome?: number;
            minResolution?: number | string;
            maxResolution?: number | string;
            // types
            all?: boolean;
            grid?: boolean;
            aural?: boolean;
            braille?: boolean;
            handheld?: boolean;
            print?: boolean;
            projection?: boolean;
            screen?: boolean;
            tty?: boolean;
            tv?: boolean;
            embossed?: boolean;
        }
    }

    class MediaQuery extends React.Component<MediaQuery.MediaQueryProps, any> { }
    export = MediaQuery;

}