"use client";

import { receberDados } from "@/actions/receber-dados";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export const Form = () => {
    const initialState = {
        msg: "",
    }

    const [state, formAction] = useActionState(receberDados, initialState)
    const {pending} = useFormStatus();

    return (
        <form action={formAction}>
            <input disabled={pending} type="text" name="name" placeholder="Nome" />
            <input disabled={pending} type="number" name="age" placeholder="Idade" />
            <button disabled={pending} type="submit" >Enviar</button>
            <p>MSG: {state.msg}</p>
        </form>
    );
}