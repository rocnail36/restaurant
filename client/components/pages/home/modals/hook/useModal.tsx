"use client"
import { useState } from "react"



export const useModal = () => {

    const [isOpen,setIsopen] = useState(false)

    const openModal = ()  => {
        setIsopen(true)
    }

    const closeModal = () => {
        console.log("ok")
        setIsopen(false)
    }


    return {
        isOpen,
        openModal,
        closeModal
    }

}