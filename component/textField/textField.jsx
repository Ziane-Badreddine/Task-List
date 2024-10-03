function textField(props){
    return <>
            <label>{props.nameLabel}</label>
            <input name = {props.inputName} type="text"/>
            <div>{props.children}</div> 
        </>
}

export default textField