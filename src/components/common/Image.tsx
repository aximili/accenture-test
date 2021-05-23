import React, { useState } from 'react';

type Props = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    /** If src is not found, it will use this as the src */
    fallbackSrc?: string,
}

const Image = ({
    fallbackSrc, alt, ...props
}: Props) => {

    const [errorHandled, setErrorHandled] = useState(false);

    function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
        if(fallbackSrc && !errorHandled) {
            setErrorHandled(true);  // prevents infinite loop when fallbackSrc not found
            e.currentTarget.src = fallbackSrc;
        }
    }

    return (
        <img
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
};

export default Image;