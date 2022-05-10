import styled from 'styled-components';

export const Wrapper = styled.div`
	width: calc(100vw - 30px);
	height: calc(100vh - 30px);
	max-width: ${({ success }) => (success ? '1200' : '500')}px;
	min-height: 150px;
	max-height: 530px;
	background: lightblue;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: auto;
	border-radius: 50px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 1070px) {
    max-height: 100%;
  }
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 20px;
  @media (max-width: 1070px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	z-index: 9;
`;

export const Actual = styled.h2`
	text-transform: uppercase;
	letter-spacing: 2px;
	font-weight: 700;
	color: lightblue;
`;

export const MainLeft = styled.div`
	margin-top: -30px;
	color: white;
	font-size: 28px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 230px;
`;

export const Main = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	padding: 50px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
  flex-wrap: wrap;

  @media(max-width: 1070px) {
    gap: 30px;
  }
`;

export const Temperature = styled.div`
	font-size: 42px;
	padding: 10px 0;
`;

export const WeatherIcon = styled.img`
	max-width: 140px;
`;

export const MainRight = styled.div`
height: 100%;
padding-top: 30px;
	svg {
		width: 20px;
	}
  @media (max-width: 1070px) {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    flex-shrink: 1;
  
  }
  @media (max-width: 740px) {
    padding: 0;
  }
`;

export const RightSection = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	letter-spacing: 1.3px;
  
`;

export const RightItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	gap: 5px;
	> span {
		font-size: 20px;
		margin-left: 30px;
	}
`;
export const Upcoming = styled.div`
	display: flex;
	gap: 50px;
	padding: 0 20px;
  
	//flex-wrap: wrap;
`;

export const DetailsWrapper = styled.div`
	height: 100%;
	max-height: 150px;
	width: 100%;
	border-radius: 0 0 50px 50px;
	padding: 0 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background: white;
  overflow: scroll;
	box-shadow: rgba(99, 99, 99, 0.15) 0px 3px 5px 0px;
  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-height: 200px;
  }
`;

export const UpcomingDay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	img {
		width: 80px;
	}
`;

// City Form

export const Form = styled.form`
	z-index: 10;
	margin: ${({ center }) => (center ? 'auto' : '0')};
	width: ${({ center }) => (center ? 'calc(100% - 150px)' : '350px')};
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: ${({ center }) => (center ? 'absolute' : 'static')};
	top: 50%;
	left: 50%;
	transform: ${({ center }) => (center ? 'translate(-50%, -50%)' : 'none')};
`;

export const Message = styled.span`
	//min-height: 50px;
`;

export const Timezone = styled.div`
	
`;
