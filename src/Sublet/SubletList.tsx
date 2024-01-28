import React from 'react';
import { SubletType, SubletItem } from './SubletItem';
import ItemsData from './data.json';
import styled from 'styled-components';

const MyList = styled.ul`
    max-width: 600px;
    list-style-type: none;
`;

const MyListItem = styled.li`
    border-radius: 6px;
    border: 1px solid #757575;
    padding: 1em;
    margin-bottom: 1em;
`;

export const SubletList: React.FC = () => {

    const list: Array<SubletType> = ItemsData;

    return <>
        Here is the list of sublets:
        <MyList>
            {list.map((item) => <MyListItem key={item.id}><SubletItem {...item}/></MyListItem>)}
        </MyList>
    </>;
};