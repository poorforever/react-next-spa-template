import {userService} from "@/src/service/user/user-service";

export default function layout() {
    async function checkCredentials(formData: FormData) {
        'use server'

        const user = userService.checkUser(
            formData.get('email'),
            formData.get('password')
        )
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-6">
            <div className="w-6/12 m-3 flex flex-col justify-center items-center rounded-xl bg-white text-black">
                <div>Login</div>
                <form className="flex flex-col items-center" action={checkCredentials}>
                    <input className="m-2 px-5 rounded-xl bg-gray-200"
                           type={"email"}
                           name="email"
                           placeholder={"Entrez votre email"}></input>
                    <input className="m-2 px-5 rounded-xl bg-gray-200"
                           type={"password"}
                           name="password"
                           placeholder={"Entrez votre mot de passe"}></input>
                    <button className="w-8/12 m-2 rounded-xl bg-gray-200" type={"submit"}>Se connecter</button>
                </form>
            </div>
        </div>
    );
}