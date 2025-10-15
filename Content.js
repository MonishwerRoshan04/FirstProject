import React from 'react'

const Content = () => {
      function handleNameChange() {
        let names = ["Earn", "Grow", "Give"];
        let randomNames = Math.floor(Math.random() * names.length);
        return names[randomNames];
      }

  return (
    <p>Lets {handleNameChange()} Money</p>
  )
}

export default Content