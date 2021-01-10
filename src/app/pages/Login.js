import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { initProcess } from "../../store/auth/actions";
import InputText from "../components/inputText";
import InputFecha from "../components/inputFecha";
import CheckBox from "../components/checkBox";
import detalle from "../../assets/img/detalle_img.png";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleNotch,
  faShieldAlt,
  faMobileAlt,
  faMoneyCheckAlt,
  faHospitalAlt,
} from "@fortawesome/free-solid-svg-icons";
import TextList from "../components/textList";

const Login = (props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, errors, handleSubmit, watch } = useForm({
    defaultValues: {
      dni: "",
      celular: "",
    },
  });
  const watchDni = watch("dni", props.dni);
  const watchCelular = watch("celular", props.celular);

  const clickInit = (data) => {
    setLoading(true);
    dispatch(initProcess()).catch((err) => {
      setLoading(false);
      if (err) {
        setErrorMessage("Algo salió mal. Por favor intente nuevamente");
      }
    });
  };
  const comprobarCampoDni = () => {
    if (watchDni === "") {
      return false;
    }
    return true;
  };

  const comprobarCampoCelular = () => {
    if (watchCelular === "") {
      return false;
    }
    return true;
  };

  return (
    <div className="base-img">
      <div className="grid_principal">
        <div className="grid_letf">
          <p className="title_principal">
            Seguro de <br /> <span className="font-weigth-bold">Salud</span>
          </p>
          <TextList
            text="Cómpralo de manera fácil y rápida"
            icon={faShieldAlt}
          />
          <TextList
            text="Cotiza y compra tu seguro 100% digital"
            icon={faMobileAlt}
          />
          <TextList
            text="Hasta S/.12 millones de cobertura anual"
            icon={faMoneyCheckAlt}
          />
          <TextList
            text="Más de 300 clínicas en todo el Perú"
            icon={faHospitalAlt}
          />
        </div>
        <div className="grid_rigth">
          <div className="login">
            <p className="title_login">
              Obten tu <span className="principal_color">seguro ahora</span>
            </p>
            <p className="subtitle_login">Ingresa los datos para comenzar</p>
            <form onSubmit={handleSubmit(clickInit)}>
              <div className="input_dni">
                <div className="prefix_dni pointer">
                  <span>DNI</span>
                  <FontAwesomeIcon icon={faChevronDown} color="#2f80ed" />
                </div>
                <InputText
                  type="number"
                  placeholder="Nro de documento"
                  name="dni"
                  valid={comprobarCampoDni()}
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
                <InputFecha
                  type="date"
                  placeholder="Fecha de nacimiento"
                  name="fechaNac"
                  refer={register({
                    required: {
                      value: true,
                      message: "Fecha de Nacimiento es requerido",
                    },
                  })}
                />
              </div>
              <div className="input_dni">
                <InputText
                  type="number"
                  placeholder="Celular"
                  name="celular"
                  valid={comprobarCampoCelular()}
                  refer={register({
                    required: {
                      value: true,
                      message: "Celular es requerido",
                    },
                    maxLength: {
                      value: 9,
                      message: "Ingrese los 9 digitos de su celular",
                    },
                    minLength: {
                      value: 9,
                      message: "Ingrese los 9 digitos de su celular",
                    },
                  })}
                />
              </div>
              <div className="div_terminos">
                <CheckBox
                  name="check_1"
                  refer={register({
                    required: {
                      value: true,
                      message: "Debe aceptar los Términos y condiciones",
                    },
                  })}
                  check="check_1"
                  label="Acepto la Política de Protección de Datos Personales y los
                  Terminos y Condiciones"
                />
              </div>
              <div className="div_terminos">
                <CheckBox
                  name="check_2"
                  refer={register({
                    required: {
                      value: true,
                      message:
                        "Debe aceptar la Política de envío de comunicaciones",
                    },
                  })}
                  check="check_2"
                  label="Acepto la Política de Envío de Comunicaciones Comerciales"
                />
              </div>
              {errorMessage && <p className="error_request">{errorMessage}</p>}
              {errors.dni && errors.dni.message && (
                <p className="error_input">{errors.dni.message}</p>
              )}
              {errors.fechaNac && errors.fechaNac.message && (
                <p className="error_input">{errors.fechaNac.message}</p>
              )}
              {errors.celular && errors.celular.message && (
                <p className="error_input">{errors.celular.message}</p>
              )}
              {errors.check_1 && errors.check_1.message && (
                <p className="error_input">{errors.check_1.message}</p>
              )}
              {errors.check_2 && errors.check_2.message && (
                <p className="error_input">{errors.check_2.message}</p>
              )}
              <div className="div_button">
                <button
                  type="submit"
                  className="btn_next pointer"
                  disabled={loading}
                >
                  <span>COMENCEMOS</span>
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
      <div className="fixed_icon_login">
        <img src={detalle} alt="detalle_img" />
      </div>
    </div>
  );
};
export default Login;
