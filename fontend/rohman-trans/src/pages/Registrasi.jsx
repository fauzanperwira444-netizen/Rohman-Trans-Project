import { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../elements/InputField"
import '../styles/right-style.css'
export function Registrasi(){

    const [isPwdFocus, setIsPwdFocus]=useState(false);

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
                            <p>
                                Password
                            </p>
                            <input
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