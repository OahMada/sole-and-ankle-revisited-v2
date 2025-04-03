import React from 'react';
import styled from 'styled-components';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import UnstyledButton from '../UnstyledButton';
import NavLink from '../NavLink';

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<DesktopNav>
					<NavLink href='/sale'>Sale</NavLink>
					<NavLink href='/new'>New&nbsp;Releases</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/women'>Women</NavLink>
					<NavLink href='/kids'>Kids</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</DesktopNav>
				<Side />
				<MobileActions>
					<UnstyledButton>
						<VisuallyHidden>open cart</VisuallyHidden>
						<Icon id='shopping-bag' />
					</UnstyledButton>
					<UnstyledButton>
						<VisuallyHidden>search</VisuallyHidden>
						<Icon id='search' />
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<VisuallyHidden>open menu</VisuallyHidden>
						<Icon id='menu' />
					</UnstyledButton>
				</MobileActions>
				<MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
			</MainHeader>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	/* height: 72px; */
	border-bottom: 1px solid var(--color-gray-300);
	overflow: auto;

	@media ${QUERIES.tabletAndSmaller} {
		border-top: solid 4px var(--color-gray-900);
		align-items: center;
	}

	@media ${QUERIES.phoneAndSmaller} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: 48px;
	gap: clamp(16px, -4.4rem + 9.1vw, 48px);

	margin: 0px 48px;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

var MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		display: flex;
		gap: 32px;
	}

	@media ${QUERIES.phoneAndSmaller} {
		gap: 16px;
	}
`;

const Side = styled.div`
	flex: 1;
`;

export default Header;
