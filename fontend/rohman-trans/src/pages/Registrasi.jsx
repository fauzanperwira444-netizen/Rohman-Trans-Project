import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { InputField } from "../elements/InputField"
import { registerUser } from "../services/authService";
import '../styles/right-style.css'
export function Registrasi(){

    //const [isPwdFocus, setIsPwdFocus]=useState(false);
    const navigate=useNavigate();

    const[form, setForm] = useState({
    name:"",
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

        
        if (!form.name) {
            errors.name = "Nama wajib diisi";
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
            errors.verfpwd = "Password tidak sesuai!";
        } 
        else if (form.verfpwd !== form.password) {
            errors.verfpwd = "Password tidak sesuai!";
        } 

        return errors;
    }
    
     const [errors, setErrors] = useState({});
     const [loading, setLoading] = useState(false);
     const [success, setSuccess] = useState(false);
     const [serverError, setServerError] = useState(false);
     

    async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
     return;
    }

    setErrors({});
    setSuccess(false);
    setServerError(false);
    try{
        setLoading(true);
        const result = await registerUser({
            name: form.name,
            email: form.email,
            password: form.password
        })
      
       console.log(result.data);

        if (result.ok){
            setSuccess(true);
            navigate("/login", { replace: true });
        }
        else{
            setServerError(true);
        }

    }
    catch (error) {
    console.log(error);
    setServerError(true);
  }
    finally {
    setLoading(false);
  }
    }

    return(
        <>
            <div className="h1">
                         <p>Selamat datang</p>
                    </div>

                    <div className="h2">
                        <p>
                            Buat akun Rohman Trans Anda
                        </p>
                    </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <InputField
                                label="Nama"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                error={errors.name}
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
                        <button type="submit" disabled={loading}>
                            {loading ? "Loading..." : "Buat Akun"}
                        </button>
                        {success && <p>Rigistrasi Berhasil</p>}
                        {serverError && <p>Rigistrasi gagal</p>}
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