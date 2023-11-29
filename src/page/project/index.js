import { useEffect, useRef } from "react";
import Matter, {
  World,
  Engine,
  Render,
  Bodies,
  Common,
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
    let engine = Engine.create();
    let render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 1920,
        height: 480,
        background: "#fff",
        showAngleIndicator: false,
        wireframes: false,
      },
    });

    var offset = 10,
      options = {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      };

    World.add(engine.world, [
      Bodies.rectangle(960, -offset, 1920.5 + 2 * offset, 150.5, options),
      Bodies.rectangle(960, 480 + offset, 1920.5 + 2 * offset, 150.5, options),
      Bodies.rectangle(1920 + offset, 260, 150.5, 480.5 + 2 * offset, options),
      Bodies.rectangle(-offset, 260, 150.5, 480.5 + 2 * offset, options),
    ]);

    var stack = Composites.stack(20, 20, 10, 5, 0, 0, function (x, y) {
      if (Common.random() > 0.35) {
        return Bodies.rectangle(x, y, 220, 46, {
          render: {
            sprite: {
              texture: "/images/main/img_gwangmyeong.jpg",
              xScale: 0.25,
              yScale: 0.25,
            },
          },
        });
      } else {
        return Bodies.rectangle(x, y, 20, 64, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.01,
          render: {
            sprite: {
              texture:
                "https://e7.pngegg.com/pngimages/870/501/png-clipart-emoji-emoji-wink-sticker-smiley-emoticon-hand-emoji-face-hand-emoji-thumbnail.png",
              xScale: 0.25,
              yScale: 0.25,
            },
          },
        });
      }
    });

    World.add(engine.world, stack);

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
