import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import mapMarketImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketImg} alt="Happy"/>

                    <h2>Escolha um orfanato</h2>
                    <p>Muitas crianças estão te esperando!</p>

                </header>

                <footer>
                        <strong>Criciúma</strong>
                        <span>Santa Catarina</span>
           

                </footer>
            </aside>

            <Map 
                center={[-28.6798448,-49.4046475]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}>
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
            </Map>
            

            <Link to="" className="create-orphanage">
                <FiPlus size = {32} color ="#FFF"></FiPlus>
            </Link>

        </div>
    );

}

export default OrphanagesMap;