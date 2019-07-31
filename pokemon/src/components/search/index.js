import React from 'react'
import { Button } from '../../styles/global';
import { Search } from './styles';
import { Grid, Row } from 'react-flexbox-grid';

export default ({ value, onChange, onKeyPress, onSubmit }) => {
    return (
        <Grid>
            <Search>
                <Row center='xs'>
                    <input
                        type='text' id='search' value={value} placeholder='Digite o nome ou número'
                        onChange={onChange} onKeyPress={onKeyPress}>
                    </input>
                    <Button onClick={onSubmit}/>
                </Row>
            </Search>
        </Grid>
    )
}
