import { useEffect, useState } from "react";

const Text = () => {
    const [isActive, setIsActive] = useState(true);
    const [text, setText] = useState("");

    useEffect(() => {
        const handleEvent = (event) => {
            if (event.detail.type === 'buttonClick') {
                setIsActive((prevIsActive) => !prevIsActive);
                setText(event.detail.data)
            }
        };

        document.addEventListener('microfrontendEvent', handleEvent);

        return () => {
            document.removeEventListener('microfrontendEvent', handleEvent);
        };
    }, []);

    return (
        <>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
            {text?.testData}
        </>

    )
}

export default Text