import React from 'react'

const Content = () => {
      function handleNameChange() {
        let names = ["Earn", "Grow", "Give"];
        let randomNames = Math.floor(Math.random() * names.length);
        return names[randomNames];
      }
      // let handleClick = () => {
      //   console.log("Thankyou Guys");
      // }

      // let handleClick2 = () => {
      //   console.log("Thankyou Guys");
      // }

      // let handleClick3 = (name) => {
      //   console.log(`Thankyou ${name}`);
      // }

      // let handleClick4 = (e) => {
      //   console.log(e.target);
      // }

      // let handleClick5 = (e) => {
      //   console.log(e.target);
      // }

      // let handleClick6 = (e) => {
      //   console.log(e.target);
      // }

       let handleClick5 = (e) => {
        console.log(e.target.innerText);
      }

  return (
    <div>    
    <p>Lets {handleNameChange()} Money</p>
    {/* <button onClick={handleClick}>Subscribe</button> */}
    {/* <button onClick={handleClick2()}>Subscribe</button> */}
    {/* <button onClick={() => handleClick3("Vijay")}>Subscribe</button> */}
    {/* <button onClick={(e) => handleClick4(e)}>Subscribe</button> */}
    {/* <button onClick={() => handleClick5(e)}>Subscribe</button> */}
    {/* <button onClick={handleClick6}>Subscribe</button> */}
    <button onClick={(e) => handleClick5(e)}>Subscribe</button>
    </div>
  )
}

export default Content
