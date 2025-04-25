"use server"

export async function receberDados(formData: FormData) {

    const name = formData.get("name");
    const age = formData.get("age");

    console.log(name, age);
}
