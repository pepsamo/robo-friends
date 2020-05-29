import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    if(false) {
        throw new Error('Errorrr');
    }
    const cardDetail = robots.map(({ id, name, username, email }) => <Card key={id} id={id} name={name} username={username} email={email} />);
    return (
        <Fragment>
             { cardDetail }
        </Fragment>
    );
};

export default CardList;