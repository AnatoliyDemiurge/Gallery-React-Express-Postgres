import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer( () => {
    const {content} = useContext(Context)
    const pageCount = Math.ceil(content.totalCount / content.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className="mt-5">
            {pages.map(page => 
                <Pagination.Item
                    key={page}
                    active={content.page === page}
                    onClick={()=> content.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages;