
import { Outlet } from "react-router-dom";
import '../styles/right-style.css';
import '../styles/left-style.css';
import logo from '../assets/logo-rohman-trans.jpg';
export function AuthLayout(){
return(
    <div className="container-fluid  custom-container">
         <div className="row hight-100">

            <div className="col-12 col-lg-6 left-custom-grid ">
                <div className="row info-box">

                    <div className="col-12 col-sm-6 col-lg-12 logo-css"> 
                        <div className="logo">
                             <img  src={logo}/>
                        </div>
                         <div className="nama-logo">
                            <p> ROHMANS TRANS</p> 
                            <p>Yogyakarta</p>
                        </div>
                    </div >

                    <div className="member-area d-none d-lg-flex">
                        <div className="line"></div>
                        <span>MEMBER AREA</span>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-12 d-none d-sm-block tagline-css ">
                        <p>
                            Kelola Perjalananmu
                        </p>
                        <p>
                            Lebih <span>Mudah & Cepat </span> 
                        </p>
                    </div >
                    <div className="features d-none d-lg-block">
                         <ul>
                            <li>Booking online tanpa perlu hubungi admin</li>
                            <li>Riwayat transaksi tersimpan otomatis</li>
                            <li>Notifikasi status booking real-time</li>
                            <li>Upload bukti pembayaran langsung dari akun</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="col-12 col-lg-6 right-custom-grid  ">
                <div className="login-box-custom">
                     <Outlet />
                </div>
            </div>
         </div>
    </div>
)
}