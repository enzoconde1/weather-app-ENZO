import { Paper } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import AppFrame from '../components/AppFrame/AppFrame';
import ListaCiudades from './../components/ListaCiudades';

const ciudades = [
    { ciudad: 'Buenos Aires', pais: 'Argentina'},
    { ciudad: 'Rio de Janeiro', pais: 'Brasil'},
    { ciudad: 'Madrid', pais: 'España'},
    { ciudad: 'Miami', pais: 'Estados Unidos'},
    { ciudad: 'Lisboa', pais: 'Portugal'}
]

const MainPage = () => {

    const history = useHistory()

    const handleOnClick = () => {
        history.push('/city')
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <ListaCiudades 
                    ciudades={ciudades}
                    onClickCiudad={handleOnClick} 
                />
            </Paper>
        </AppFrame>
    )
}

export default MainPage