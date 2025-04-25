import { receberDados } from "@/actions/receber-dados";

const Page = () => {
   

    return (
        <div>
            <h1>Dashboard</h1>
            <form action={receberDados}>
                <input type="text" name="name" placeholder="Digite seu nome"/>
                <input type="number" name="age" placeholder="Digite sua idade"/>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Page;