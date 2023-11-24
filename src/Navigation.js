import "./style.css"
function Navigation(props){

    let sampleVariable = "Some Sample Value"
    return (
       <ul className={props.className} >
        <li>{sampleVariable}</li>
        <li>{props.menuitem1}</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
    )
}

export default Navigation;