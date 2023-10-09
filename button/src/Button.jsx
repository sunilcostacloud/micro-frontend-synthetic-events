const Button = () => {
    const emitEvent = () => {
        const eventData = { testData: "Sunil" };
        const event = new CustomEvent('microfrontendEvent', {
            detail: {
                type: 'buttonClick',
                data: eventData,
            },
        });

        document.dispatchEvent(event);
    };
    return (
        <button onClick={emitEvent}>
            Click me to toggle
        </button>
    )
}

export default Button