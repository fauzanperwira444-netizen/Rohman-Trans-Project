import { useState } from "react";
import { Link } from "react-router-dom";
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
                            Buat akun Rohman Trans milikmu
                        </p>
                    </div>
                    <div className="row">

                         <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <p>Nama</p>
                            <input type="text" placeholder="Masukan nama" />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <p>Email</p>
                            <input type="text" placeholder="nama@gmail.com" />
                        </div>

                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <p>
                                Password
                            </p>
                            <input
                                type="password"
                                placeholder="Masukan Password"
                                onFocus={()=>setIsPwdFocus(true)}
                                onBlur={()=>setIsPwdFocus(false)}
                              />
                            {isPwdFocus && (
                                <div className="password-hint">
                                    <p>Password minimal 8 karakter</p>
                                    <p>Harus mengandung huruf dan angka</p>
                                </div>
                            )}

                        </div>

                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                            <p>
                                konfirmasi Password
                            </p>
                            <input type="password" placeholder="Masukan Password" />
                        </div>
                    </div>

                    <div className="cta-css">
                        <button>
                            <p>Buat Akun </p>
                        </button>
                    </div>

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