function AspectSelectionAspectBox({ val, aspect, setAspect, index }) {
  const handleClick = () => {
    setAspect(index)
  }

  const className =
    'flex justify-center p-2 text-[#005D63 w-full ' +
    (aspect === index ? 'bg-[#005D63] bg-opacity-10' : '')

  return (
    <div onClick={handleClick} className={className}>
      {val}
    </div>
  )
}

export default AspectSelectionAspectBox
