import Header from "./Header";
import AuthForm from "./AuthForm";
import InfoToolTip from './InfoToolTip';
import React from "react";

function Register(props) {

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
          [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
          return;
        }
        props.handleRegistration(formData);
        setFormData({ email: '', password: '' });
      }

    return (
        <section className="auth">
            <Header 
                hidden={true}
            />
            <AuthForm 
                title="Регистрация" 
                buttonText="Зарегистрироваться" 
                visibility="" 
                onSubmit={handleSubmit}
                emailValue={formData.email}
                passwordValue={formData.password}
                onChange={handleChange}
                status="Уже зарегистрированы?"
                toDo="Войти"
                path="/signin"
            />
            <InfoToolTip 
                onClose={props.onClose} 
                isOpen={props.isOpen} 
                title={props.message} 
                image={props.imageToolTip}
            />
        </section>
    )
}

export default Register;