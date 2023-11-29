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
import { Link } from "react-router-dom";
import BottomPopup from "component/popup/BottomPopup";
import PROJECT_LIST from "constants/projectData";

import styles from "./project.module.scss";

export default function Project() {
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
              texture: `/images/main/icon_bg_${i}.png`,
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
    <main>
      <BottomPopup content="💡 프로젝트를 탭하여 내용을 확인해 보세요." />

      {/* 캔버스 애니메이션 영역 */}
      <section className={styles.projectHead} ref={containerRef}>
        <h2>상상을 현실로</h2>
        <canvas ref={canvasRef} />
      </section>

      {/* 프로젝트 리스트 영역 */}
      <section className={styles.projectPage}>
        <div className={styles.container}>
          <div className={styles.projectList}>
            {PROJECT_LIST.map((item) => {
              return (
                <Link
                  key={item.id}
                  className={styles.project}
                  to={item.readMore}
                  target="_blank"
                >
                  <div className={styles.projectImg}>
                    <img
                      src={item.projectMainImage}
                      alt="프로젝트 메인 이미지"
                    />
                  </div>

                  <div className={styles.projectInfo}>
                    <div className={styles.projectType}>
                      {item.projectType.map((type) => {
                        return <small>{type}</small>;
                      })}
                    </div>
                    <h5>{item.projectName}</h5>
                    <p>{item.projectContent}</p>
                    <div className={styles.projectDirect}>
                      {item.projectWebLink != null ? (
                        <a
                          href={item.projectWebLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Website
                        </a>
                      ) : (
                        ""
                      )}
                      {item.projectIosLink != null ? (
                        <a
                          href={item.projectIosLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Apple
                        </a>
                      ) : (
                        ""
                      )}
                      {item.projectAndLink != null ? (
                        <a
                          href={item.projectAndLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Android
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
