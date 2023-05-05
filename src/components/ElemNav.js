import React from 'react'

export default function ElemNav({ listaElementos }) {
    return (

        <>

            {listaElementos.map((item, index) => (

                

                <li className="nav-item pl-1" key={index}>
                    <a className="nav-link" href="#"><i class="fa fa-home fa-fw mr-1"></i>{listaElementos[index]}</a>
                </li>





            ))}











        </>



    )
}
