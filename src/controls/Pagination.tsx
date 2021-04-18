import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LinksContainer = styled.div`
  display: flex;
  a {
    color: blue;
  }
`;

const PageLinkContainer = styled.div`
  padding: 10px;
`;

type Props = {
    page: number,
    perPage: number,
    total: number
}

export const Pagination = ({ page, perPage, total }: Props) => {
    const pagesCount = Math.ceil(
        (total ?? 0) / perPage,
    );
    
    const itemsAround = 3;

    const start = Math.max(
        page - itemsAround - Math.max(page + itemsAround - (pagesCount - 1), 0),
        0,
    );

    const end = Math.min(
        page + itemsAround - Math.min(page - itemsAround, 0),
        pagesCount - 1,
    );

    return (
        <LinksContainer>
            {page > 0 && (
                <PageLinkContainer>
                    <Link to={`/exchanges/${page - 1}`}>←</Link>
                </PageLinkContainer>
            )}

            {Array.from(Array(end - start + 1))
                .map((_, i) => i + start)
                .map(i => (
                    <PageLinkContainer key={i}>
                        {i+1 !== page ? 
                        <Link to={`/exchanges/${i + 1}`}>{i + 1}</Link> :
                            i+1 }
                    </PageLinkContainer>
                ))}

            {page < pagesCount - 1 && (
                <PageLinkContainer>
                <Link to={`/exchanges/${page + 1}`}>→</Link>
                </PageLinkContainer>
            )}
        </LinksContainer>
    );  
};