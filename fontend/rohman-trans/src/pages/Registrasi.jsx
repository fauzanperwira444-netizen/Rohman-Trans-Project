import { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../elements/InputField"
import '../styles/right-style.css'
export function Registrasi(){

    //const [isPwdFocus, setIsPwdFocus]=useState(false);

    const[form, setForm] = useState({
    nama:"",
    email:"",
    password: "",
    verfpwd:""
    });

    function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
     });
    }
     function validate(form) {
        const errors = {};

        
        if (!form.nama) {
            errors.nama = "Nama wajib diisi";
        } 
        if (!form.email) {
            errors.email = "Email wajib diisi";
        } else if (!form.email.includes("@")) {
            errors.email = "Format email tidak valid";
        }

        if (!form.password) {
            errors.password = "Password wajib diisi";
        } else {
        const pwdRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[._!])[A-Za-z0-9._!]{8,20}$/;
        if (!pwdRegex.test(form.password)) {
            errors.password = "Password harus 8-20 karakter, mengandung minimal 1 huruf besar, 1 angka, dan 1 simbol (.,_!)";
        }
    }
        if (!form.verfpwd) {
            errors.verfpwd = "Lakukan konfirmasi password";
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
                         <p>Selamat datang</p>
                    </div>

                    <div className="h2">
                        <p>
                            Buat akun Rohman Trans milikmu
                        </p>
                    </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <InputField
                                label="Nama"
                                name="nama"
                                value={form.nama}
                                onChange={handleChange}
                                error={errors.nama}
                                placeholder="Masukan Nama Lengkap"
                            />
                        </div>

                         <div className="col-12 col-sm-6 col-lg-12 input-css ">
                            <InputField
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                error={errors.email}
                                placeholder="nama@gmail.com"
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <InputField
                                label="Password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange} 
                                error={errors.password}    
                                placeholder="Masukan password"
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <InputField
                                label="Konfirmasi Password"
                                name="verfpwd"
                                type="password"
                                value={form.verfpwd}
                                onChange={handleChange} 
                                error={errors.verfpwd}      
                                placeholder="Masukan password"
                            />  
                        </div>

                    </div>

                     <div className="cta-css">
                        <button>
                            <p>Buat Akun </p>
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
                            Sudah punya akun? <Link to="/login">Login Sekarang</Link>
                        </p>
                    </div>    
        </>
    )
}