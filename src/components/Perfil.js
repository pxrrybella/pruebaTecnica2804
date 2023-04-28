import React from "react";


const Perfil = ({ nombre, iduser, fechaingreso, sueldobruto, division, area, subarea, idlider, niveljerarquico }) => {

    return (
        <div className={niveljerarquico.toLowerCase() + 'profile'}>
            <div className="d-flex">
                    <img class="userphoto" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                        alt="user"
                    />
                <p class="fs-3 text-capitalize m-3">{nombre}</p>
            </div>
            <div>
                <p>
                    ID: {iduser} <br />
                    Fecha Ingreso: {fechaingreso} <br />
                    Sueldo Bruto: {sueldobruto} <br />
                    Division: {division} <br />
                    Area: {area} <br />
                    Subarea: {subarea} <br />
                    ID Lider: {idlider} <br />
                    Nivel Jerarquico: {niveljerarquico} <br />
                </p>
            </div>
        </div>
    )
}

export default Perfil;