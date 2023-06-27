import { StyledListWraper, StyledNav } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ILinkListItem } from '../../shared/link_list';

export interface INavigationProps {
    breakpoint?: string;
    currentUrl?: string | null;
    linkList?: ILinkListItem[];
    burgeralign?: BURGER_ALIGNMENT;
}

export enum BURGER_ALIGNMENT {
    left = 'left',
    center = 'center',
    right = 'right',
}

const Navigation = ({ breakpoint, currentUrl, linkList, burgeralign }: INavigationProps) => {
    const [navActive, setNavActive] = useState(false);

    return (
        <StyledNav breakpoint={breakpoint}>
            <StyledListWraper breakpoint={breakpoint} burgeralign={burgeralign}>
                <i className='fa-solid fa-bars' onClick={() => setNavActive((prev) => !prev)}></i>

                <ul className={navActive ? 'active' : ''}>
                    {linkList &&
                        linkList.map((link) => {
                            return (
                                <li key={link.key} className={`${currentUrl === link.url ? 'active' : ''}`} onClick={() => setNavActive(() => false)}>
                                    <Link to={link.url}>{link.name}</Link>
                                </li>
                            );
                        })}
                </ul>
            </StyledListWraper>
        </StyledNav>
    );
};

export default Navigation;