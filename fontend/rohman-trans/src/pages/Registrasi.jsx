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
                <form >
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <InputField
                                label="Nama"
                                name="nama"
                                value={form.nama}
                                onChange={handleChange}
                                placeholder="Masukan Nama Lengkap"
                            />
                        </div>

                         <div className="col-12 col-sm-6 col-lg-12 ">
                            <InputField
                                label="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
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
                                placeholder="Masukan password"
                            />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-12 ">
                            <InputField
                                label="Konfirmasi Password"
                                name="password"
                                type="password"
                                value={form.verfpwd}
                                onChange={handleChange}       
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