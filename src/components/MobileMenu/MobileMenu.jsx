import React from 'react';
import styled from 'styled-components';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import NavLink from '../NavLink';

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<DialogPrimitive.Root open={isOpen} onOpenChange={onDismiss}>
			{/* <DialogPrimitive.Trigger asChild={true}>{children}</DialogPrimitive.Trigger> */}
			<DialogPrimitive.Portal>
				<DialogOverlay />
				<DialogContent aria-describedby={undefined}>
					<DialogPrimitive.Title>
						<VisuallyHidden>Mobile Menu Dialog</VisuallyHidden>
					</DialogPrimitive.Title>
					<DialogPrimitive.Description asChild={true}>
						<VisuallyHidden>This Dialog contains navigation links for mobile devices.</VisuallyHidden>
					</DialogPrimitive.Description>
					<DialogClose asChild={true}>
						<UnstyledButton>
							<VisuallyHidden>Dismiss menu</VisuallyHidden>
							<Icon id='close' />
						</UnstyledButton>
					</DialogClose>
					<Filler />
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
	background-color: var(--color-backdrop);
`;

var DialogContent = styled(DialogPrimitive.Content)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 300px;

	background-color: var(--color-white);
	padding: 32px;

	display: flex;
	flex-direction: column;
	overflow: auto;
	gap: 16px;
`;

var DialogClose = styled(DialogPrimitive.Close)`
	position: absolute;
	right: 16px;
	top: 10px;
	padding: 16px; // to make the button a bigger target.

	@media ${QUERIES.phoneAndSmaller} {
		right: 0;
	}
`;

var Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: calc(22px - 6px); // because the nav items are a bit taller than they appear.
`;

var Footer = styled.footer`
	flex: 1;
	display: flex;
	gap: 9px;
	flex-direction: column;
	justify-content: flex-end;
`;

var Filler = styled.div`
	flex: 1;
`;

var FooterLink = styled.a`
	font-size: ${14 / 16}rem;
	text-decoration: none;
	color: var(--color-gray-700);
	font-weight: var(--font-weight-normal);
`;

export default MobileMenu;
