import React, { useContext } from "react";
import { Formik, Form, FormikHelpers, FormikProps } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as Yup from 'yup';
import { AppContext } from "../context";

const GameAdd = () => {
    //const dispatch: Dispatch<any> = useDispatch()
    const { state, dispatch } = useContext(AppContext)
    return (
        <Formik
            initialValues={{
                id: 42,
                nomDuJeu: "Le nom du jeu",
            }}
            onSubmit={(values : Game, {setSubmitting} :
                FormikHelpers<Game>) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        //dispatch({type: 'ADD_GAME', values});
                        dispatch({type: 'ADD_GAME', values: values})
                        setSubmitting(false);
                    }, 500);
                }}
            validationSchema= {Yup.object().shape({
                nomDuJeu: Yup.string()
                            .min(5, 'Le nom du jeu doit faire au moins 5 caractères')
                            .required('Le champs est obligatoire')
            }
            )}
            >
                {(props: FormikProps<Game>) => 
                {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting}
                     = props
                
                return (
                    <Form>
                        <div>
                        <TextField
                            id="nomDuJeu"
                            name="nomDuJeu"
                            placeholder="Nom du jeu placeholder"
                            value={values.nomDuJeu}
                            helperText={
                                errors.nomDuJeu && touched.
                                nomDuJeu
                                    ? errors.nomDuJeu 
                                    : 'Entrer le nom du jeu'
                            }
                            error={
                                errors.nomDuJeu && touched.
                                nomDuJeu
                                    ? true
                                    :false
                            }
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                )}
            }
            

            </Formik>
    )
}

export default GameAdd