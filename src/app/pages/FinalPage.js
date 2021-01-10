import React from "react";
import { useDispatch } from "react-redux";
import history from "../../utils/history";
import { logout } from "../../store/auth/actions";
import detalle from "../../assets/img/detalle_img.png";

const Login = () => {
  const dispatch = useDispatch();

  const Logout = async () => {
    history.replace("/");
    await dispatch(logout());
  };

  return (
    <div className="ligth-img">
      <div className="grid_data">
        <div className="grid_letf"></div>
        <div className="grid_rigth final_page">
          <div className="valid_data">
            <p className="title_login">
              ¡Gracias por{" "}
              <span className="principal_color">confiar en nosotros!</span>
            </p>
            <p className="subtitle_login">
              Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
              <span className="font-weigth-bold">se pondrá en contacto</span>{" "}
              contigo en las siguientes{" "}
              <span className="font-weigth-bold">48 horas</span>
            </p>
            <div className="div_button justify-content-end">
              <button
                type="button"
                onClick={Logout}
                className="btn_next pointer"
              >
                <span>IR A SALUD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed_icon_valid">
        <img src={detalle} alt="detalle_img" />
      </div>
    </div>
  );
};
export default Login;
