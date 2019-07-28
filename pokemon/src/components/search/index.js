import React from 'react'
import { Label, Button } from '../../styles';
import { Search } from './styles';
import { Grid, Row } from 'react-flexbox-grid';

export default ({ value, onChange, onKeyPress, onSubmit }) => {
    return (
        <Grid>
            <Search>
                <Row center='xs'>
                    <Label color='#3537b3'>Digite o nome ou número</Label>
                </Row>
                <Row center='xs'>
                    <input
                        type='text' id='search' value={value}
                        onChange={onChange} onKeyPress={onKeyPress}>
                    </input>
                    <Button onClick={onSubmit}>Buscar</Button>
                </Row>
            </Search>
        </Grid>
    )
}
