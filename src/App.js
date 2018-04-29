import React from 'react';

const App = ({vertices, color})=>{
    const pathData = [
        "M", vertices[0][0], vertices[0][1],
        "L", vertices[1][0], vertices[1][1],
        "L", vertices[2][0], vertices[2][1],
        'Z'
    ].join(' ');

    const styles = {
        animation: 'bounce 1.2s ease both infinate',
        transformOrigin: '50% 100%',
    }

    return(
    <React.Fragment>
         <path d={ pathData } fill={ color } style={styles} />
    </React.Fragment>)
}


export default App;



