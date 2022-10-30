import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from 'yup';
import { loginApi } from "../../../api/user";
import "./LoginForm.css";
export const Loginform = () => {
  const formik= useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:Yup.object(validationSchema()),
    onSubmit: async(formValue)=>{
      try {
      const response = await loginApi(formValue)
      return response
      } catch (error) {
        console.log('ERROR')
        console.log('first')
        
      }
    }

  })

  return (
    <div className="container">
      <Form className="login-form-admin"  onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <input type="email"  name='email' className="form-control" placeholder="Email..."  aria-describedby="basic-addon1" value={formik.values.email} onChange={formik.handleChange}
        
        />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <input type="password"  name='password' className="form-control" placeholder="Password..."  aria-describedby="basic-addon1" value={formik.values.password} onChange={formik.handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="d-grid gap-2 col-6 mx-auto">
          Entrar
        </Button>
      </Form>
    </div>
  );
};


function validationSchema (){
  return{
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),

  }
}