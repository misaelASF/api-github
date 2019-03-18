import React from 'react';
import Spinner from '../Spinner';

const Form = ({ user, ChangeUser, loading, error, buttonAction}) => (
    <div className="formContainer">
       <input type="text" 
              className="userInput"
              value={user}
              placeholder="Usuário da organização"
              onChange={e => ChangeUser(e.target.value)}
        />
        <button className='searchButton' onClick={buttonAction}>
          {loading ? <Spinner /> : "Buscar"}
        </button>

        <p className="errorText">{error}</p>
    </div>
);

export default Form;