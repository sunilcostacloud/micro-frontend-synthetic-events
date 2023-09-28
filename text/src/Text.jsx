import { useEffect, useState } from "react";

const Text = () => {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const handleEvent = (event) => {
            if (event.detail.type === 'buttonClick') {
                setIsActive((prevIsActive) => !prevIsActive);
            }
        };

        document.addEventListener('microfrontendEvent', handleEvent);

        return () => {
            document.removeEventListener('microfrontendEvent', handleEvent);
        };
    }, []);

    return (
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    )
}

export default Text