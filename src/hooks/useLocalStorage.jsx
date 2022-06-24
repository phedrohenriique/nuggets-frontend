import React from 'react'

export default function useLocalStorage() {

    const getItem = name => JSON.parse(window.localStorage.getItem(name))
    const setItem = (name, data) => window.localStorage.setItem(name, JSON.stringify(data))
    const removeItem = name => window.localStorage.removeItem(name)
    const clear = () => window.localStorage.clear()

    return {getItem, setItem, removeItem, clear}
}