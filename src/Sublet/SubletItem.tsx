import React from 'react';
import styled from 'styled-components'

export type SubletType = {
    id: number,
    title: string,
    description?: string,
    url?: string,
};


const ItemTitle = styled.h3`
    color: #BF4F74;
`;


export const SubletItem: React.FC<SubletType> = (item) => {

    return <>
        <ItemTitle>[{item.id }] {item.title}</ItemTitle>
        <span>{item.description}</span>
    </>;
};