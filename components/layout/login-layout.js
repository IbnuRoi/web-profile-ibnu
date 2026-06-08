import React from 'react'

const loginPage = () => {
    return (
        <div className="w-full flex justify-center items-center min-h-screen">
            <div className="container justify-center items-center mx-auto w-full">
                <form className="fieldset bg-slate-800 border-base-300 rounded-box w-xs border px-4 py-10 mx-auto">
                    <h3 className="text-center text-2xl font-bold text-cyan-400">Log In</h3>
                    <fieldset className="fieldset">
                        <label className="label text-lg text-slate-300 font-semibold">Username</label>
                        <input type="username" className="input validator bg-slate-700 text-white" placeholder="username" required />
                        <p className="validator-hint hidden">Invalid username or password!</p>
                    </fieldset>

                    <label className="fieldset">
                        <span className="label text-lg text-slate-300 font-semibold">Password</span>
                        <input type="password" className="input validator bg-slate-700 text-white" placeholder="password" required />
                        <span className="validator-hint hidden">Invalid username or password!</span>
                    </label>

                    <button className="btn btn-ghost mt-4 font-semibold text-slate-900 hover:text-cyan-400 hover:bg-slate-900 bg-cyan-400" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default loginPage