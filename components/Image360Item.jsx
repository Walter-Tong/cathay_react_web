function Image360Item({path}) {
    const handleClick = () => {
        window.open(window.location.href + "?" + path)
    }

    return (
        <div onClick={handleClick}>
            {path}
        </div>
    )
}

export default Image360Item