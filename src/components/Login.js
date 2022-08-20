import Header from "./Header";
import AuthForm from "./AuthForm";
import React from "react";

function Login(props) {

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
        props.handleLogin(formData);
        setFormData({ email: '', password: '' });
      }

    return (
        <section className="auth">
            <Header 
                hidden={true}
            />
            <AuthForm 
                title="Вход" 
                buttonText="Войти" 
                visibility="_invisible" 
                onSubmit={handleSubmit}
                emailValue={formData.email}
                passwordValue={formData.password}
                onChange={handleChange}
                status="Еще не зарегистрированы?"
                toDo="Зарегистрироваться"
                path="/signup"
            />{/*
            <InfoToolTip 
                onClose={props.onClose} 
                isOpen={props.isOpen} 
                title="Что-то пошло не так! Попробуйте еще раз." 
                image={props.imageToolTip}
            />
            */}
        </section>
    )
}

export default Login;