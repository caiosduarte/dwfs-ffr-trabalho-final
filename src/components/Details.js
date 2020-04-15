import React from "react";
import {Link} from 'react-router-dom';




export const Details = () => {
    return (
        <header id="mySidenav" class="lateral">
            <h1 class="secao__titulo">Marcador de Pontos Georreferenciados</h1>
            <a href="javascript:void(0)" class="lateral__btnfechar" onclick="fechaLateral()">&times;</a>
            
            <section id="aqui" class="secao">
                <h2 class="secao__titulo secao__titulo--secundario">Geolocalização Atual</h2>
                <form id="form-ponto" class="ponto-form">
                    <dl>
                        <dt class="ponto-form__label ponto-form__label--requerido"><label for="descricao"> Descrição do Ponto</label></dt>
                        <dd>
                            <input id="descricao" name="descricao" class="ponto-form__campo" type="text" required/>                        
                        </dd>
        
                        <dt class="ponto-form__label">Latitude</dt>
                        <dd>
                            <table class="ponto-form__coordenadas">
                                <thead>
                                    <tr>
                                        <th class="ponto-form__label ponto-form__label--sub">Aproximada</th>
                                        <th class="ponto-form__label ponto-form__label--sub">Precisa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input id="lat-aproximada" name="lat-aproximada" class="ponto-form__campo ponto-form__campo--desabilitado" size="10 " disabled/></td>
                                        <td><input id="lat-precisa" name="lat-precisa" class="ponto-form__campo ponto-form__campo--desabilitado" size="10 " disabled/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </dd>
                        <dt class="ponto-form__label">Longitute</dt>
                        <dd class="ponto-form__coordenadas">
                            <table class="ponto-form__coordenadas">
                                <thead>
                                    <tr>
                                        <th class="ponto-form__label ponto-form__label--sub">Aproximada</th>
                                        <th class="ponto-form__label ponto-form__label--sub">Precisa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input id="lon-aproximada" name="lon-aproximada" class="ponto-form__campo ponto-form__campo--desabilitado" size="10" disabled/></td>
                                        <td><input id="lon-precisa" name="lon-precisa" class="ponto-form__campo ponto-form__campo--desabilitado" size="10" disabled/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                    <br/>
                    <button id="btn-marcar" class="ponto-form__botao" aria-label="Marca ponto no mapa">Marcar Ponto</button>
                </form>
                <section id="pontos" class="secao">
                        <h2 class="secao__titulo secao__titulo--secundario">Pontos</h2>
                        <ol id="lista-pontos" class="pontos">
                        </ol>
                </section>
            
            </section>

        </header>        
 
    );
};