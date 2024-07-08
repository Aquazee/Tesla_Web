import React from 'react';
import { NoDataFound } from 'utils/Images';

const NoResultsFound = React.memo(() => {
    return (
        <div className='text-center'>
            <img src={NoDataFound} alt="no-data-found-Ekart-web" style={styles.imgStyle} /><br />
            <div style={styles.content} >No results found</div>
        </div>
    )
})

const styles = {
    noContentFonudcontainer: { display: 'flex', justifyContent: 'center' },
    imgStyle: { 'maxWidth': '24rem' },
    content: { fontSize: '2rem', color: 'grey' }
}

export default NoResultsFound;

