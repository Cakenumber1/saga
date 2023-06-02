import React, {FunctionComponent} from "react";

interface Props {
    isLoading: { [key: string]: boolean; }
}
const LoaderComponent: FunctionComponent<Props> = ({
    isLoading
}) => {
    const showLoading = Object.values(isLoading).some((val) => val)

    if (showLoading) {
        return (<div className="Loader"/>)
    }
};

export default LoaderComponent;
