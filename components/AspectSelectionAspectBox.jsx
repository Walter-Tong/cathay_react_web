function AspectSelectionAspectBox({val, aspect, setAspect, index}) {
    const handleClick = () => {
        setAspect(index)
    }

    const className = ((aspect === index) ? "w-1/5 bg-[#005D63] p-2 rounded-2xl" : "w-1/5 p-2 rounded-2xl")

    return (
        <div onClick={handleClick} className={className}>
            {val}
        </div>
    )
}

export default AspectSelectionAspectBox