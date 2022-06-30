import React from "react";

const Context = React.createContext({
    name: 'without-a-provider',
    learning: true
})

export { Context }