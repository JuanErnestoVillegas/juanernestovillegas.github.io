import { useState } from "react";


const ComplaintForm = () => {
    const [complaint, setComplaint] = useState({
        name: '',
        complaint: ''
    })

    const handleForm = (e) => {
        setComplaint({
        ...complaint, //Operador express toma lo que haya antes
            [e.target.name]:e.target.value
         })
    }
     
    return (
        <form>
            <label htmlFor="name">Nombre</label>
            <input onKeyUp={(e)=>handleForm(e)} type="text" id="name" name="name"/>
            <br />
            <label htmlFor="complaint">Queja</label>
            <input onKeyUp={(e)=>handleForm(e)} type="text" id="complaint" name="complaint"/>
        </form>
    );
}

export default ComplaintForm;