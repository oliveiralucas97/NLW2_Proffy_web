import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/55281503?s=460&u=02c66130b15a6fa543eb2681ee60948568950936&v=4" alt=""/>
                <div>
                    <strong>Lucas Oliveira</strong>
                    <span>Programação de Computadores</span>
                </div>
            </header>
                
            <p>
                Desenvolvedor e tester sempre em busca de aprendizado.
                <br /><br />
                Em busca de novos conhecimentos em fron-end e back-end com ReactJS, ReactNative e NodeJS.
            </p>

            <footer>
                <p>
                    Preço/Hora 
                    <strong>R$ 50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;