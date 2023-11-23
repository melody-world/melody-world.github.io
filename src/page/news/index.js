import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

import Request from "services/Request";
import PROJECT_LIST from "constants/projectData";

import styles from "./news.module.scss";

export default function News() {
  const [newList, setNewsList] = useState([]);
  async function fetchData() {
    // 프로젝트 단위로 공지사항을 조회한다.
    const porjectList = PROJECT_LIST.filter(
      (project) => project.shortName !== ""
    );
    const getDataList = porjectList.map(async (item) => {
      try {
        const response = await Request.get(`/${item.shortName}/notice.json`);
        const dataList = response.data.data.map((data) => ({
          ...data,
          projectName: item.projectName,
        }));

        return dataList;
      } catch (err) {
        console.log(err);
        return [];
      }
    });

    try {
      const results = await Promise.all(getDataList);
      const flattenedNewsList = results.flat();

      setNewsList(flattenedNewsList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.newsPage}>
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
                        <p>
                          [{item.projectName}] {item.title}
                        </p>
                        <span>
                          {moment(item.createDate, "YYYYMMDD").format(
                            "YYYY.MM.DD"
                          )}
                        </span>
                      </div>

                      {open ? (
                        <button type="button">
                          <VscChevronDown />
                        </button>
                      ) : (
                        <button type="button">
                          <VscChevronUp />
                        </button>
                      )}
                    </div>
                  </AccordionHeader>

                  <AccordionBody>
                    <div className={styles.contentWrap}>
                      <p>{item.content}</p>
                    </div>
                  </AccordionBody>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
