import React from "react"

const Square = ({value, index, handleGameplay}) => {
  const handleClick = () => {
    handleGameplay(index)
  }

  return (
    <>
      <div className="square" onClick={handleClick}>
        {value}
      </div>
    </>
  )
}
export default Square