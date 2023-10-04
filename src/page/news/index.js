import React, { useState, useEffect } from "react";
import moment from 'moment';
import axios from 'axios';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

import styles from './news.module.scss';

import { VscChevronDown , VscChevronUp } from "react-icons/vsc";

export default function News() {
    const [newList, setNewsList] = useState([]); 

    useEffect(() => {    
        axios.get('https://merry-eddy.co.kr/fgm/notice.json')
        .then(function(res) {
            setNewsList(res.data.data);
        })
        .catch(function(err) {
            console.log(err);
        })
    }, []);

    return (
        <article className={styles.newsPage}>
            <div className={styles.container}>
                <h3>💬 공지사항</h3>

                <Accordion>
                    {newList.map(({id, title, createDate, content}, index) => (
                        <AccordionItem key={index}>
                            {({open}) => (
                                <>
                                    <AccordionHeader as={"div"}>
                                        <div className={`${styles.titleWrap} ${open ? 'accordion-active' : ''}`}>
                                            <div>
                                                <p>{title}</p>
                                                <span>{moment(createDate, 'YYYYMMDD').format('YYYY.MM.DD')}</span>
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