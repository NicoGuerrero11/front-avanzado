
import React from 'react'
import { Box, Typography, Grid2, TextField, Button, MenuItem } from '@mui/material'
import useForm from '../hooks/useForms'



function Form() {
    const [formData, handleChange, resetForm] = useForm({
        name: '',
        email: '',
        date: '',
        country: '',
        age: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/\S+@\S+.\S+/.test(formData.email)) {
            alert("Por favor ingresa un correo valido")
            return;
        }

        const age = parseInt(formData.age);
        if (isNaN(age) || age < 0 || age > 150) {
            alert("La edad debe estar entre 0 y 150");
            return;
        }

        if (age < 18) {
            alert("Usted está chiquit@, no puede usar este formulario. ¡Ve a mimir!");
            return;
        }

        console.log("Datos del formulario: ", formData);
        resetForm();
    }
    return (
        <Box sx={{ maxWodth: 400, margin: 'auto', mt: 5 }}>
            <Typography variant='h4' align='center' gutterBottom>
                Formulario en REACT Avanzado
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Nombre"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="Correo"
                            name="email"
                            type='email'
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="fecha"
                            name="date"
                            type='date'
                            value={formData.date}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            select
                            label="pais"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            fullWidth
                            required
                        >
                            <MenuItem value="Mexico">México</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Canada">Canadá</MenuItem>
                            <MenuItem value="Argentina">Argentina</MenuItem>
                        </TextField>
                    </Grid2>
                    <Grid2 item xs={12}>
                        <TextField
                            label="edad"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid2>
                    <Grid2 item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            enviar
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
        </Box>
    );
};

export default Form