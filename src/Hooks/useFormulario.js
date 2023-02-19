import { useState } from "react"




export const useFormulario = ( initialValue ) => {

    const [formularioInputs, setFormularioInputs] = useState( initialValue )


    const onInputChanged = ( {target} ) => {
        setFormularioInputs({
        ...formularioInputs,
        [target.id] : target.value
      });
      //console.log(formularioInputs);
     }

     

     const ResetFormularioInputs = () => {
        setFormularioInputs(initialValue);
     }



    return {
        ...formularioInputs, 
        onInputChanged,
        setFormularioInputs,
        ResetFormularioInputs,
    }





}