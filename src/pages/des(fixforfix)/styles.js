import styled from 'styled-components';

export const Container = styled.div`
  
	display: flex;
	flex-direction: row;
	height: 100vh;
	background-color: #6153CC;
	justify-content: flex-start;
	padding: 120px 0px;
	align-items: center;
	 
	@media screen {
		
	}
	
	img {
		width: 700px;
		height: 500px;
		border-radius: 25px;
		box-shadow: 2px 3px rgba(0,0,0,0.3);
		margin: 0px 80px;
	}
	
	div {
  	display: flex;
    flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		margin-top: 20px;
  }

	h1 {
		font-size: 55px;
		color: #fff;
	}

	input, p {
		background-color: white;
		padding: 15px 25px;
		border-width: 0px;
		border-radius: 15px;
		width: 380px;
		color: gray;

		margin: 5px 0px;
	}

	button {
		background-color: #44FFD1;
		padding: 15px;
		border-width: 0px;
		border-radius: 15px;
		color: #961D4E;
		font-weight: bold;
		width: 380px;
		margin-top: 20px;
	}

`;
