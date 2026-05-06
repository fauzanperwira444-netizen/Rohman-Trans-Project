import { Link } from "react-router-dom";
import { InputField } from "../elements/InputField"
import '../styles/right-style.css'
import { useState } from "react";
export function Login(){
    const[form, setForm] = useState({
    email:"",
    password: ""
    });

    function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
     });
    }

    function validate(form) {
        const errors = {};

        if (!form.email) {
            errors.email = "Email wajib diisi";
        } else if (!form.email.includes("@")) {
            errors.email = "Format email tidak valid";
        }

        if (!form.password) {
            errors.password = "Password wajib diisi";
        } else if (form.password.length < 6) {
            errors.password = "Password minimal 6 karakter";
        }

        return errors;
    }

    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    console.log("Form valid:", form);
    }
    return(
        <>
            <div className="h1">
                         <p>Selamat datang kembali</p>
                    </div>

                    <div className="h2">
                        <p>
                            Masuk ke akun Rohman Trans milikmu
                        </p>
                    </div>

                <form onSubmit={handleSubmit}> 
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-12 ">
                            <InputField
                                label="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                error={errors.email}
                                placeholder="nama@gmail.com"
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-12 ">
                            <InputField
                                label="Password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange} 
                                error={errors.password}      
                                placeholder="Masukan password"
                                tambahan={
                                    <p className="right-text">
                                        Lupa Password
                                    </p>
                                }
                            />
                            
                        </div>
                    </div>
                    
                       <div className="cta-css">
                        <button type="submit" >
                            Masuk Ke Akun
                        </button>
                        </div> 
                 </form>

                    <div className="divider">
                        <span>atau</span>
                    </div>

                    <button className="google-btn">
                        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google Logo"/>

                        <span>Lanjutkan dengan Google</span>
                    </button>


                    <div className="to-registration">
                        <p>
                            Belum punya akun? <Link to="/register">Daftar Sekarang</Link>
                        </p>
                    </div>    
        </>
    )
}