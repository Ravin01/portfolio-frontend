import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";


const Particle = () => {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

  return (
    <>
    {init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: '#040404',
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode : 'parallax'
                        },
                        resize: true,
                    },
                    modes: {
                        parallax : {
                            enable : true,
                            force : 2,
                            smooth : 10,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        direction: "top-right",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 180,
                    },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />}
    </>
  )
}

export default Particle