import React, { useState } from 'react';

type Props = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    /** If src is not found, it will use this as the src */
    fallbackSrc?: string,
}

const Image = ({
    fallbackSrc, alt, ...props
}: Props) => {

    const [errored, setErrored] = useState(false);

    function handleError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
        if(fallbackSrc && !errored) {
            setErrored(true);
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