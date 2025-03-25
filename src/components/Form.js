
import React from 'react'
import { Box, Typography, Grid2, TextField } from '@mui/material'
import useForm from '../hooks/useForms'



function Form() {
    const [formData, handleChange, resetForm] = useForm({ name: '', email: '', date: '', country: '', age: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        resetForm();
    }
    return (
        <Box component="section" sx={{ maxWodth: 400, margin: 'auto', mt: 5 }}>
            <Typography variant='h4' align='center' gutterBottom>
                Formulario en REACT Avanzado
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                    <TextField
                        label="Nombre"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        required

                    />
                </Grid2>
            </form>
        </Box>
    )
}

export default Form