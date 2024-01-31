import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

import Loading from "component/loading";
import styles from "./news.module.scss";

export default function News() {
  const [newList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const data = await fetch("/api/notice", {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      if (data.message === "OK") {
        setIsLoading(false);
        return setNewsList(data.resultList);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <section className={styles.newsPage}>
        <div className={styles.container}>
          <h3>💬 공지사항</h3>

          <Accordion>
            {newList.map((item, index) => (
              <AccordionItem key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader as={"div"}>
                      <div
                        className={`${styles.titleWrap} ${
                          open ? "accordion-active" : ""
                        }`}
                      >
                        <div>
                          <h4>{item.noticeTitle}</h4>
                          <span>
                            {moment(item.createDate, "YYYYMMDD").format(
                              "YYYY.MM.DD"
                            )}
                          </span>
                        </div>

                        {open ? (
                          <button type="button">
                            <VscChevronUp />
                          </button>
                        ) : (
                          <button type="button">
                            <VscChevronDown />
                          </button>
                        )}
                      </div>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className={styles.contentWrap}>
                        <p>{item.noticeContent}</p>
                      </div>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
