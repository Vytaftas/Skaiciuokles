import { StyledHeader } from './styles';
import Navigation from '../Navigation';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LINK_LIST } from '../../shared/link_list';
import { NAV_ALIGNMENT } from '../Navigation/Navigation';
import { currentTheme } from '../../shared/color_themes';

export interface IHeaderProps {
    breakpoint: string;
}

const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        setUrl(pathname);
    }, [location, pathname]);

    const breakpoint = '1200px';

    return (
        <StyledHeader breakpoint={breakpoint} theme={currentTheme}>
            <Navigation
                theme={currentTheme}
                breakpoint={breakpoint}
                currentUrl={url}
                linkList={LINK_LIST}
                burgeralign={NAV_ALIGNMENT.right}
                desktopalign={NAV_ALIGNMENT.center}
            />
        </StyledHeader>
    );
};

export default Header;
