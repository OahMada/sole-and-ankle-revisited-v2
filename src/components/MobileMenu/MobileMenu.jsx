import React from 'react';
import styled from 'styled-components';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import NavLink from '../NavLink';

const MobileMenu = ({ children }) => {
	return (
		<DialogPrimitive.Root>
			<DialogPrimitive.Trigger asChild={true}>{children}</DialogPrimitive.Trigger>
			<DialogPrimitive.Portal>
				<DialogOverlay />
				<DialogContent>
					<DialogClose asChild={true}>
						<UnstyledButton>
							<VisuallyHidden>Dismiss menu</VisuallyHidden>
							<Icon id='close' />
						</UnstyledButton>
					</DialogClose>
					<Side />
					<Nav>
						<NavLink href='/sale'>Sale</NavLink>
						<NavLink href='/new'>New&nbsp;Releases</NavLink>
						<NavLink href='/men'>Men</NavLink>
						<NavLink href='/women'>Women</NavLink>
						<NavLink href='/kids'>Kids</NavLink>
						<NavLink href='/collections'>Collections</NavLink>
					</Nav>
					<Footer>
						<FooterLink href='/terms'>Terms and Conditions</FooterLink>
						<FooterLink href='/privacy'>Privacy Policy</FooterLink>
						<FooterLink href='/contact'>Contact Us</FooterLink>
					</Footer>
				</DialogContent>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
};

var DialogOverlay = styled(DialogPrimitive.Overlay)`
	position: fixed;
	inset: 0;
	background-color: var(--color-gray-700);
	opacity: 0.8;
`;

var DialogContent = styled(DialogPrimitive.Content)`
	position: fixed;
	top: 0;
	right: 0;
	height: 100%;
	width: 50%;

	background-color: var(--color-white);
	padding: 32px;

	display: flex;
	flex-direction: column;
	align-items: baseline;
	overflow: auto;
	gap: 22px;

	@media ${QUERIES.phone} {
		width: 80%;
	}
`;

var DialogClose = styled(DialogPrimitive.Close)`
	position: absolute;
	right: 32px;
	top: 26px;

	@media ${QUERIES.phone} {
		right: 16px;
	}
`;

var Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 22px;
`;

var Footer = styled.footer`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

var Side = styled.div`
	flex: 1;
`;

var FooterLink = styled.a`
	font-size: ${14 / 16}rem;
	text-decoration: none;
	color: var(--color-gray-700);
	font-weight: var(--font-weight-normal);

	&:first-of-type {
		margin-top: auto;
	}
`;

export default MobileMenu;
