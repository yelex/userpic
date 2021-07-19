import React from 'react';
import '../index.css';

function ColoredUserpic(props) {

    const [ isHover, setIsHover ] = React.useState(false);
    const [ styleContainer, setStyleContainer ] = React.useState({
        width: `${props.size}px`,
        height: `${props.size}px`,
        borderWidth: `${props.colorWidth}px`,
        borderStyle: 'solid',
        borderImage: 'linear-gradient(to right, red, rgba(0, 0, 0, 0)) 1 100%', 
        borderRadius: '50%',
        boxSizing: 'border-box',
        padding: `${props.margin}px`,
        background: `linear-gradient(${props.backgroundColor},${props.backgroundColor}) padding-box,
                    linear-gradient(to right, ${props.colors[0]} , ${props.colors[1]})`,
    });

    React.useEffect(()=>{
        const styleContainerCopy = JSON.parse(JSON.stringify(styleContainer));
        styleContainerCopy.background = isHover ? `linear-gradient(${props.backgroundColor},${props.backgroundColor}) padding-box, linear-gradient(to right, ${props.hoverColors[0]} , ${props.hoverColors[1]})` : `linear-gradient(${props.backgroundColor},${props.backgroundColor}) padding-box, linear-gradient(to right, ${props.colors[0]} , ${props.colors[1]})`;
        setStyleContainer(styleContainerCopy);
    }, [ isHover ]);

    function handleHover(){
        setIsHover(!isHover);
    }

    return (
        <div className="image__container" style={ styleContainer }>
            <img className="image" 
            alt={ 'avatar' } 
            src={ props.src } 
            style={{maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '50%'}}
            onMouseOver={ handleHover }
            onMouseOut={ handleHover }/>
        </div>
    )
}

export default ColoredUserpic;