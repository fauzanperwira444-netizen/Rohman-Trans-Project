import { Link } from "react-router-dom";
import '../styles/right-style.css'
export function Login(){
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
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-12 input-css">
                        <p>Email</p>
                        <input type="text" placeholder="nama@gmail.com" />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-12 input-css">
                        <p>
                            Password
                        </p>
                        <input type="password" placeholder="Masukan Password" />
                        <p className="right-text">
                            Lupa Password
                        </p>
                    </div>
                    </div>

                    <div className="cta-css">
                        <button>
                            <p>Masuk Ke Akun </p>
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
                            Belum punya akun? <Link to="/register">Daftar Sekarang</Link>
                        </p>
                    </div>    
        </>
    )
}