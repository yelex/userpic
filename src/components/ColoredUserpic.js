import React from 'react';
import '../index.css';

function ColoredUserpic(props) {

    const [ isHover, setIsHover ] = React.useState(false);
    const [ styleOuterContainer, setStyleOuterContainer ] = React.useState({
        width: `${props.size}px`,
        height: `${props.size}px`,
        border: `double ${props.colorWidth}px transparent`,
        borderRadius: '50%',
        boxSizing: 'border-box',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
        backgroundImage: `linear-gradient(white, white), linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`,
    });

    const [ styleInnerContainer, setStyleInnerContainer ] = React.useState({
        maxWidth: `100%`,
        maxHeight: `100%`,
        border: `solid ${props.margin}px red`,
        borderRadius: '50%',
        boxSizing: 'border-box',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
    });

    React.useEffect(()=>{
        const styleOuterContainerCopy = JSON.parse(JSON.stringify(styleOuterContainer));
        styleOuterContainerCopy.backgroundImage = isHover ? `linear-gradient(white, white), linear-gradient(to right, ${props.hoverColors[0]}, ${props.hoverColors[1]})` : `linear-gradient(white, white), linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]})`;
        setStyleOuterContainer(styleOuterContainerCopy);
    }, [ isHover ]);

    function handleHover(){
        setIsHover(!isHover);
    }

    return (
        <div className="image__container_type_outer" style={ styleOuterContainer }>
            <div className="image__container_type_inner" style={ styleInnerContainer }>
                <img className="image__pic" 
                    alt={ 'avatar' } 
                    src={ props.src } 
                    style={{ maxWidth: '100%',
                        maxHeight: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover' }}
                    onMouseOver={ handleHover }
                    onMouseOut={ handleHover }/>
            </div>
        </div>
    )
}

export default ColoredUserpic;