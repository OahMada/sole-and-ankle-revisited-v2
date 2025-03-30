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
	// const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<LaptopNav>
					<NavLink href='/sale'>Sale</NavLink>
					<NavLink href='/new'>New&nbsp;Releases</NavLink>
					<NavLink href='/men'>Men</NavLink>
					<NavLink href='/women'>Women</NavLink>
					<NavLink href='/kids'>Kids</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
					<NavLink href='/collections'>Collections</NavLink>
				</LaptopNav>
				<Side />
				<MobileNav>
					<UnstyledButton>
						<VisuallyHidden>shopping bag</VisuallyHidden>
						<Icon id='shopping-bag' />
					</UnstyledButton>
					<UnstyledButton>
						<VisuallyHidden>search</VisuallyHidden>
						<Icon id='search' />
					</UnstyledButton>
					<MobileMenu>
						<UnstyledButton>
							<VisuallyHidden>menu</VisuallyHidden>
							<Icon id='menu' />
						</UnstyledButton>
					</MobileMenu>
				</MobileNav>
			</MainHeader>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	height: 72px;
	border-bottom: 1px solid var(--color-gray-300);

	@media ${QUERIES.tablet} {
		border-top: solid 4px var(--color-gray-900);
		align-items: center;
	}

	@media ${QUERIES.phone} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const LaptopNav = styled.nav`
	display: flex;
	gap: 48px;
	gap: clamp(24px, -2.5rem + 7vw, 48px);

	margin: 0px 48px;
	overflow: auto;

	@media ${QUERIES.tablet} {
		display: none;
	}
`;

var MobileNav = styled.div`
	display: none;
	gap: 32px;

	@media ${QUERIES.tablet} {
		display: flex;
	}

	@media ${QUERIES.phone} {
		gap: 16px;
	}
`;

const Side = styled.div`
	flex: 1;
`;

export default Header;
