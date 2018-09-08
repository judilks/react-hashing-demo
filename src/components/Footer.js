import React from 'react'

const Footer = ({page}) => {
    return(
        <div style={footer}>
            &copy; Justin Dilks, Kohle Helle
        </div>
    )
}

const style = {
    margin:"auto"
}

const footer = {
    bottom:'0',
    opacity:0.5,
    fontSize:12,
    marginTop:15
}

export default Footer;