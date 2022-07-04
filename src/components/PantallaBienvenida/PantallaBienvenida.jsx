import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Clouds from 'vanta/dist/vanta.clouds.min';

const PantallaBienvenida = ({ children }) => {
  const refDiv = useRef(null);
  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: refDiv.current,
        })
      );
    }

    return () => {
      if (vanta) vanta.destroy();
    };
  }, [vanta]);

  return (
    <div className="full" ref={refDiv}>
      {children}
    </div>
  );
};

PantallaBienvenida.propTypes = {
  children: PropTypes.node,
};

export default PantallaBienvenida;
