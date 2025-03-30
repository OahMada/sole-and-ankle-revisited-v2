import styled from 'styled-components';

var NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: var(--font-weight-medium);

	&:first-of-type {
		color: var(--color-secondary);
	}
`;

export default NavLink;
