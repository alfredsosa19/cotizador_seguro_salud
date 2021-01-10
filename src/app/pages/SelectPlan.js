import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add_plan_price } from "../../store/auth/actions";
import history from "../../utils/history";
import RadioPlan from "../components/radioPlan";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dinero from "../../assets/img/dinero.png";
import detalle from "../../assets/img/detalle_img.png";
import {
  faChevronRight,
  faChevronDown,
  faCircleNotch,
  faChevronCircleLeft,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "react-collapse";

const Login = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isServicios, setIsServicios] = useState(false);
  const [isExclusiones, setIsExclusiones] = useState(false);
  const { register, errors, handleSubmit, watch } = useForm({
    defaultValues: { plan: "BÁSICO" },
  });
  const watchPlan = watch("plan", props.plan);
  const [data, setData] = useState([]);

  const listaPlanes = [
    {
      id: "1",
      plan: "BÁSICO",
      precio: "160",
      type: "mensual",
    },
    {
      id: "2",
      plan: "AVANZADO",
      precio: "200",
      type: "mensual",
    },
    {
      id: "3",
      plan: "PREMIUN",
      precio: "250",
      type: "mensual",
    },
    {
      id: "4",
      plan: "FULL",
      precio: "500",
      type: "mensual",
    },
  ];

  useEffect(() => {
    switch (watchPlan) {
      case "BÁSICO":
        setData({
          plan: "BÁSICO",
          mm: "1",
          beneficios: 2,
        });
        break;
      case "AVANZADO":
        setData({
          plan: "AVANZADO",
          mm: "5",
          beneficios: 4,
        });
        break;
      case "PREMIUN":
        setData({
          plan: "PREMIUN",
          mm: "10",
          beneficios: 5,
        });
        break;
      case "FULL":
        setData({
          plan: "FULL",
          mm: "20",
          beneficios: 6,
        });
        break;
      default:
        break;
    }
  }, [watchPlan]);

  const comprarPlan = (data) => {
    setLoading(true);
    dispatch(add_plan_price(data.plan));
    setLoading(false);
    history.push("/registered");
  };

  const Return = async () => {
    history.replace("/valid-data");
  };

  const collServicios = () => {
    setIsServicios(!isServicios);
  };

  const collExclusiones = () => {
    setIsExclusiones(!isExclusiones);
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
                onClick={Return}
              />
              <p className="text_pasos">
                <span className="principal_color">PASO 2</span> DE 7
              </p>
            </div>
            <p className="title_login">
              Elige <span className="principal_color">tu protección</span>
            </p>
            <p className="subtitle_login">Selecciona tu plan de salud ideal.</p>
            <form className="form_valid" onSubmit={handleSubmit(comprarPlan)}>
              <div className="justify-content-center ">
                {listaPlanes.map((element) => {
                  return (
                    <RadioPlan
                      key={element.id}
                      name="plan"
                      typePlan={element.type}
                      plan={element.plan}
                      precioPlan={element.precio}
                      refer={register({
                        required: true,
                      })}
                    />
                  );
                })}
              </div>
              <div className="div_cobertura">
                <p className="text_beneficios">Cuentas con estos beneficios:</p>
                <div className="grid_cobertura">
                  <div className="grid_plan">
                    <div>
                      <p className="text_cobertura">Cobertura máxima</p>
                      <p className="text_number">S/{data.mm}MM</p>
                      <button className="button_plan">PLAN {data.plan}</button>
                    </div>
                    <hr className="line_vertical" color="#c4cce3" />
                    <div className="div_img">
                      <img className="img_dinero" src={dinero} alt="Dinero" />
                    </div>
                  </div>
                  <hr className="line_horizontal" color="#c4cce3" />
                  <div className="div_list">
                    <div className="text_list">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHeart}
                        color="#2f80ed"
                      />
                      <p>
                        <span className="text-bold">Lima</span> (zona de
                        cobertura)
                      </p>
                    </div>
                    <div className="text_list">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHeart}
                        color="#2f80ed"
                      />
                      <p>
                        <span className="text-bold">+30 clínicas</span> (en red
                        afiliada)
                      </p>
                    </div>
                    <div className="text_list">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHeart}
                        color={data.beneficios >= 4 ? "#2f80ed" : " #dce0ee"}
                      />
                      <p className={data.beneficios >= 4 ? null : "text_muted"}>
                        Médico a domicilio
                      </p>
                    </div>
                    <div className="text_list">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHeart}
                        color={data.beneficios >= 4 ? "#2f80ed" : " #dce0ee"}
                      />
                      <p className={data.beneficios >= 4 ? null : "text_muted"}>
                        Chequeos preventivos
                      </p>
                    </div>
                    <div className="text_list">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHeart}
                        color={data.beneficios >= 5 ? "#2f80ed" : " #dce0ee"}
                      />
                      <p className={data.beneficios >= 5 ? null : "text_muted"}>
                        Reembolso nacional
                      </p>
                    </div>
                    <div className="text_list">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faHeart}
                        color={data.beneficios >= 6 ? "#2f80ed" : " #dce0ee"}
                      />
                      <p className={data.beneficios >= 6 ? null : "text_muted"}>
                        Reembolso internacional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div_servicios">
                <p>Revisa Nuestros</p>
                <p className="principal_color">servicios y exclusiones</p>
              </div>
              <hr className="line_vertical" color="#c4cce3" />
              <div className="div_servicios">
                <div
                  className="justify-content-between pointer"
                  onClick={collServicios}
                >
                  <p>Servicios Brindados</p>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faChevronDown}
                    color="#2f80ed"
                  />
                </div>

                <Collapse isOpened={isServicios}>
                  <div className="div_servicios principal_color">
                    -Lista de Servicios Brindados
                  </div>
                </Collapse>
              </div>
              <hr className="line_vertical" color="#c4cce3" />
              <div className="div_servicios">
                <div
                  className="justify-content-between pointer"
                  onClick={collExclusiones}
                >
                  <p>Esclusiones</p>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faChevronDown}
                    color="#2f80ed"
                  />
                </div>

                <Collapse isOpened={isExclusiones}>
                  <div className="div_servicios principal_color">
                    -Lista de exclusiones
                  </div>
                </Collapse>
              </div>
              {errors.plan && (
                <p className="error_input">Seleccione el plan de salud</p>
              )}
              <div className="div_button justify-content-end">
                <p className="principal_color">ENVIAR COTIZACIÓN POR CORREO</p>
                <button type="submit" className="btn_next pointer">
                  <span>Comprar Plan</span>
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
