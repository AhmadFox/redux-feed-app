import React from 'react'

const Container = (props) => {
  return (
	<div className="container px-4 mx-auto w-full md:w-10/12 xl:w-9/12 max-w-[1300px]">
	  {props.children}
	</div>
  )
}

export default Container
