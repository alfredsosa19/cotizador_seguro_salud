import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, add_members_plan } from "../../store/auth/actions";
import history from "../../utils/history";
import InputData from "../components/inputData";
import { useForm } from "react-hook-form";
import detalle from "../../assets/img/detalle_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faCircleNotch,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector((state) => state.auth.userInfo);

  const { register, errors, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    setValue("dni", userInfo.numDocumento);
    setValue("nombres", userInfo.nombres);
    setValue("apePaterno", userInfo.apellidoPaterno);
    setValue("apeMaterno", userInfo.apellidoMaterno);
    setValue("fechaNac", userInfo.fecNacimiento);
    setValue("genero", userInfo.sexo);
  }, []);

  const next = (data) => {
    setLoading(true);
    dispatch(add_members_plan(data.seguro));
    setLoading(false);
    history.push("/select-plan");
  };

  const Logout = async () => {
    history.replace("/");
    await dispatch(logout());
  };

  return (
    <div className="ligth-img">
      <div className="grid_data">
        <div className="grid_letf"></div>
        <div className="grid_rigth">
          <div className="valid_data">
            <div className="div_pasos">
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className="icon icon_bold pointer"
                color="#2f80ed"
                onClick={Logout}
              />
              <p className="text_pasos">
                <span className="principal_color">PASO 1</span> DE 7
              </p>
            </div>

            <p className="title_login">
              Hola, <span className="principal_color">{userInfo.nombres}</span>
            </p>
            <p className="subtitle_login">
              Valida que los datos sean correctos
            </p>
            <form className="form_valid" onSubmit={handleSubmit(next)}>
              <p className="subtitle_login"> Datos personales del titular</p>
              <div className="input_dni">
                <div className="prefix_dni pointer">
                  <span>DNI</span>
                  <FontAwesomeIcon icon={faChevronDown} color="#2f80ed" />
                </div>
                <InputData
                  type="text"
                  placeholder="Nro de documento"
                  name="dni"
                  refer={register({
                    required: {
                      value: true,
                      message: "Campo DNI requerido",
                    },
                    maxLength: {
                      value: 9,
                      message: "Ingrese 8 digitos en su DNI",
                    },
                    minLength: {
                      value: 8,
                      message: "Ingrese 8 digitos en su DNI",
                    },
                  })}
                />
              </div>

              <div className="input_dni">
                <InputData
                  placeholder="Nombres"
                  name="nombres"
                  refer={register()}
                />
              </div>
              <div className="input_dni">
                <InputData
                  placeholder="Apellido Paterno"
                  name="apePaterno"
                  refer={register({
                    required: {
                      value: true,
                      message: "Fecha de Nacimiento es requerido",
                    },
                  })}
                />
              </div>
              <div className="input_dni">
                <InputData
                  placeholder="Apellido Materno"
                  name="apeMaterno"
                  refer={register({
                    required: {
                      value: true,
                      message: "Fecha de Nacimiento es requerido",
                    },
                  })}
                />
              </div>
              <div className="input_dni">
                <InputData
                  placeholder="Fecha de Nacimiento"
                  name="fechaNac"
                  refer={register({
                    required: {
                      value: true,
                      message: "Fecha de Nacimiento es requerido",
                    },
                  })}
                />
              </div>

              <div className="div_genero">
                <p className="subtitle_login"> Género</p>
                <div className="input_radio">
                  <input
                    id="mascu"
                    value="M"
                    name="genero"
                    type="radio"
                    ref={register({
                      required: true,
                    })}
                    disabled
                  />
                  <label htmlFor="mascu" className="label_radio">
                    Masculino
                  </label>
                </div>
                <div className="input_radio">
                  <input
                    id="feme"
                    value="F"
                    name="genero"
                    type="radio"
                    ref={register({
                      required: true,
                    })}
                    disabled
                  />
                  <label htmlFor="feme" className="label_radio">
                    Femenino
                  </label>
                </div>
              </div>

              <div className="div_genero">
                <p className="subtitle_login"> ¿A quién vamos a asegurar?</p>
                <div className="input_radio">
                  <input
                    id="propio"
                    value="propio"
                    name="seguro"
                    type="radio"
                    className="pointer"
                    ref={register({
                      required: true,
                    })}
                  />
                  <label htmlFor="propio" className="label_radio pointer">
                    Solo a mí
                  </label>
                </div>
                <div className="input_radio">
                  <input
                    id="familia"
                    value="familia"
                    name="seguro"
                    type="radio"
                    className="pointer"
                    ref={register({
                      required: true,
                    })}
                  />
                  <label htmlFor="familia" className="label_radio pointer">
                    A mí y a mi familia
                  </label>
                </div>
              </div>
              {errors.seguro && (
                <p className="error_input">
                  Elija su plan de salud antes de continuar
                </p>
              )}
              <div className="div_button justify-content-end">
                <button type="submit" className="btn_next pointer">
                  <span>Continuar</span>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faChevronRight}
                    color="#ffffff"
                  />
                  {loading ? (
                    <FontAwesomeIcon
                      className="rotating"
                      icon={faCircleNotch}
                    />
                  ) : null}
                </button>
              </div>
            </form>
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
