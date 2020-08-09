import styled, { css } from 'styled-components';
import { SelectableTile } from '../Layout/Tile';
import { fontSize3, fontSizeBig, wheatBoxShadow } from './Styles';

export const RatePercentage = styled.div`
	justify-self: right;
	align-self: center;
	color: gray;
`;

export const RateArrow = styled(RatePercentage)`
	${fontSizeBig};
	color: darkgreen;

	${(props) =>
		props.status &&
		css`
			color: darkred;
		`}
`;

export const TickerCurrency = styled.div`
	${fontSizeBig};
	color: darkgreen;
	align-self: center;

	${(props) =>
		props.negative &&
		css`
			color: darkred;
		`}
`;

export const CurrencyTileStyled = styled(SelectableTile)`
	color: lightgray;
	align-self: center;
	${(props) =>
		props.compact &&
		css`
			${fontSize3}
		`}

	${(props) =>
		props.currentFav &&
		css`
			${wheatBoxShadow};
			pointer-events: none;
		`}
`;

export const CurrencyStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;
