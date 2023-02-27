import gsap from "gsap"
import React from "react"
import { useRef, useEffect } from "react"

export const IntroPage = () =>{
    const h1 = useRef(null);
    useEffect(() =>{
        gsap.to('h1', {x:400})
    })
    return(
      <>
          <h1 ref = {h1}>Hello GSAP</h1>
      </>
    )
}