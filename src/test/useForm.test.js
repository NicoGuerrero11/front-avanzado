import { useForm } from "../hooks/useForms.js"
import { renderHook, act } from "@testing-library/react"

describe('useForm Hook', () => {
    const initialValues = {
        name: '',
        email: '',
        date: '',
        country: '',
        age: '',
    };

    test('Esta prueba debe de inicializar con los valores proporcionados', () => {
        const { result } = renderHook(() => useForm(initialValues));
        const [values] = result.current;

        expect(values).toEqual(initialValues)
    });

    test('Debe de actualizar los valores al llamar a la funcion handleChange', () => {
        const { result } = renderHook(() => useForm(initialValues));
        const [, handleChange] = result.current;

        act(() => {
            handleChange({ target: { name: 'name', value: 'fulano' } })
        });

        const [values] = result.current
        expect(values.name).toBe('fulano');
    });

}

)