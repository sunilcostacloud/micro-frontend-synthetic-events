const Button = () => {
    const emitEvent = () => {
        const event = new CustomEvent('microfrontendEvent', {
            detail: { type: 'buttonClick' },
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