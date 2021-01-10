import React from 'react';

//<div class="w-100 d-none d-sm-block d-md-none"><!-- wrap on sm--></div>
//<div class="w-100 d-none d-md-block d-lg-none"><!-- wrap on md--></div>
//<div class="w-100 d-none d-lg-block d-xl-none"><!-- wrap on lg--></div>
//<div class="w-100 d-none d-xl-block"><!-- wrap on xl--></div>

function Break(props) {
    
    const getBreak = size => {
        const sizes = ["xs", "sm", "md", "lg", "xl"];
        const sizeIndex = sizes.findIndex(e => e === size);
        const higherSize = sizeIndex === -1 || sizeIndex === sizes.length ? "" : sizes[sizeIndex+1]
        return <div key={size} className={"w-100 d-none d-"+size+"-block"+ (higherSize ? " d-"+higherSize+"-none" : "")}></div>
    }

    if(!props.on) return <div className="w-100"></div>
    if(props.on instanceof Array) {
        return props.on.map(e => getBreak(e));
    }
    return getBreak(props.on);
}

export default Break;