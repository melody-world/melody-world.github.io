import { useEffect, useRef } from "react";
import Matter, {
  World,
  Engine,
  Render,
  Bodies,
  Composites,
  Mouse,
  MouseConstraint,
} from "matter-js";

import styles from "./project.module.scss";

export default function Gravity() {
  const containerRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const innerWidth = window.innerWidth;
    let engine = Engine.create();
    let render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: innerWidth,
        height: 480,
        background: "#fff",
        showAngleIndicator: false,
        wireframes: false,
      },
    });

    var options = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
      },
    };

    World.add(engine.world, [
      Bodies.rectangle(0, 0, innerWidth * 2, 100, options),
      Bodies.rectangle(0, 480, innerWidth * 2, 100, options),
      Bodies.rectangle(innerWidth, 480 / 2, 100, 480, options),
      Bodies.rectangle(0, 0, 100, 480 * 2, options),
    ]);

    var i = 0;
    var stack = Composites.stack(24, 24, 10, 5, 0, 0, function (x, y) {
      i++;

      if (i < 16) {
        return Bodies.rectangle(x, y, 180, 46, {
          render: {
            sprite: {
              texture: `/images/project/icon_bg_${i}.png`,
              xScale: 0.25,
              yScale: 0.25,
            },
          },
        });
      }
    });

    World.add(engine.world, stack);

    var word = Bodies.rectangle(300, 200, 100, 200, {
      restitution: 0.95,
      friction: 0.05,
      density: 0.0005,
      render: {
        fillStyle: "transparent",
        text: {
          content: "Test",
          color: "blue",
          size: 16,
          family: "Papyrus",
        },
      },
    });

    World.add(engine.world, word);

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    Matter.Runner.run(engine);
    Render.run(render);
  }, []);

  return (
    <section className={styles.projectHead} ref={containerRef}>
      <p>코드드림</p>
      <h2>프로젝트</h2>
      <canvas ref={canvasRef} />
    </section>
  );
}
