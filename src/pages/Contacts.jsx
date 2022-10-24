import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';

const initialState = {
    name: '',
    email: '',
    tel: '',
};

const Contacts = () => {
    const [state, setState] = useState(initialState);
    const { name, email, tel } = state;

    const [data, setData] = useState({});

    useEffect(() => {
        db.child('contacts').on('value', (snap) => {
            if (snap.val() !== null) {
                setData({...snap.val()});
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !tel) {
            console.log('Пожалуйста, заполните поля');
        } else {
            db.child('contacts').push(state, (e) => {
                if (e) {
                    console.log(e);
                }
            });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({...state, [name]: value});
    }

    return (
        <div>
            <br />
            <h3>Добавить контакт</h3>
            <form onClick={handleSubmit}>
                <label htmlFor={'name'}>Имя</label>
                <input id='name' name='name' onChange={handleChange} value={name}/>
                <label htmlFor={'email'}>Email</label>
                <input id='email' name='email' onChange={handleChange} value={email}/>
                <label htmlFor={'tel'}>Телефон</label>
                <input id='tel' name='tel' onChange={handleChange} value={tel}/>
                <input type='submit' value='Сохранить'/>
            </form>

            <h3 style={{ marginTop: '30px'}}>Контакты</h3>
            <table style={{ marginTop: '10px'}}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Имя</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Телефон</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id) => {
                        return (
                            <tr>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].tel}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;