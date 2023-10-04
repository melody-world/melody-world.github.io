import React from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

import styles from './news.module.scss';

import { VscChevronDown , VscChevronUp } from "react-icons/vsc";

export default function News() {
    return (
        <article className={styles.newsPage}>
            <div className={styles.container}>
                <h3>💬 공지사항</h3>

                <Accordion>
                    {NEWSLIST.map(({id, title, date, content}, index) => (
                        <AccordionItem key={index}>
                            {({open}) => (
                                <>
                                    <AccordionHeader as={"div"}>
                                        <div className={`${styles.titleWrap} ${open ? 'accordion-active' : ''}`}>
                                            <div>
                                                <p>{title}</p>
                                                <span>{date}</span>
                                            </div>

                                            {
                                                open ?
                                                <button type="button"><VscChevronDown/></button> :
                                                <button type="button"><VscChevronUp/></button>
                                            }
                                        </div>
                                    </AccordionHeader>

                                    <AccordionBody>
                                        <div className={styles.contentWrap}>
                                            <p>{content}</p>
                                        </div>
                                    </AccordionBody>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </article>
    )
}

const NEWSLIST = [
    {
        id: 1,
        title: 'test 테스트 :: 공지사항',
        date: '2023.08.03',
        content: '※ 업데이트 내용(2023.08.03)\n\n매매 : 2021.01~2023.07 자료 업데이트\n전/월세 : 2021.01~2023.08 자료 업데이트\n\n\n※ 특이사항\n\n<a href="https://www.data.go.kr/bbs/ntc/selectNotice.do?originId=NOTICE_0000000003217">매매 자료 : 등기일자 추가예정</a>\n<a href="https://www.data.go.kr/bbs/ntc/selectNotice.do?originId=NOTICE_0000000003199">매매 자료 : 업데이트 지연</a>\n',
    },
    {
        id: 2,
        title: 'one',
        date: '20.05.05',
        content: 'TEST 입니다',
    },
]